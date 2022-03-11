from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from music import serializers
from .models import Music
from .serializers import SongSerializer

@api_view(['GET','POST'])
def music_list(request):  

    if request.method == 'GET':
        music = Music.objects.all()
        serializer = serializers.SongSerializer(music, many=True)   
        return Response (serializer.data)

    elif request.method == 'POST':
        serializer = serializers.SongSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response (serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET','PUT','DELETE'])
def music_detail(request, pk): 
    Music = get_object_or_404(Music, pk=pk)

    if request.method =='GET':       
        serializer = SongSerializer(Music)
        return Response(serializer.data)
    elif request.method =='PUT':
        serializer =SongSerializer(Music, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response (serializer.data)
    elif request.method == 'DELETE':
        Music.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
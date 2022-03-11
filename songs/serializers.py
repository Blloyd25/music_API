from dataclasses import fields
from pyexpat import model
from rest_framework import serializer
from .models import Song

class SongSerializer(serializer.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'title', 'artist', 'album', 'release_date', 'genre']
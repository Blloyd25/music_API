import React, {useEffect} from 'react';


const Modal=(props)=> {
    

    useEffect(()=>{

    },[])

    document.addEventListener('keydown', (e)=>{
        if(e.key === 'Escape' && props.hideShow == true){
            props.onClick();
        }
    })

    return ( 
        <>
            {props.hideShow ? 
            <div className = "modal-wrapper"  onClick={()=>props.onClick()}>
                <div className="modal-body" onClick={e=>{e.stopPropagation()}}>
                    {props.children}
                    <br/>
                    
                </div>
            </div>
            
            : null}
        </>
     );
}

export default Modal;
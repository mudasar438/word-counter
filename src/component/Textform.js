import React, { useState } from 'react'

export default function Textform(props) {
    
        const [text, setText] = useState('Enter Text here');
        const handleUPclick = () => {
            console.log("alert yout click on button")
            let newText= text.toUpperCase();
            setText(newText)
            
        }
        const handleLowerclick = () => {
            console.log("alert yout click on button")
            let newText= text.toLowerCase();
            setText(newText)
            
        }

        const handleonchange =(e) =>{
            console.log("On change")
            setText(e.target.value)
        }

        
    return (
   <>
   
                <div className="container" style = {{color: props.mode === 'light' ? 'grey' : 'white' }}>
                    <h1>{props.heading}</h1> 
 
     <div className="mb-3">
  
   <textarea className="form-control" id="myBox" rows="8" value={text } onChange={handleonchange} style = {{backgroundColor: props.mode === 'dark' ? 'grey':'grey' }} style= {{color: props.mode === 'light' ? 'grey' : 'cyne' }}></textarea>
 </div>
 <button className="btn btn-primary" onClick={handleUPclick}>
     Conver to Uppercase
 </button>

 <button className="btn btn-primary mx-4" onClick={handleLowerclick}>
    convert to Lowercase
 </button>

    </div>
    <div className="container my-3" style = {{color: props.mode==='light'?'grey' : 'white' }}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes in reading</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here....."}</p>
    </div>
   
   </>

  )
};

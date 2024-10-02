import { useState } from "react"
const TextForm = (props) => {
    const handleOnChange =(event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        console.log("uppercase button is clicked" + text)
        let newtext= text.toUpperCase()
        setText(newtext)
    }

    const [text, setText]=useState('Enter your text');
    return(
        <div>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
               <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>     
            
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>
            convert to toUpperCase</button>
        </div>
    )
}
export default TextForm
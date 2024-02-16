import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text Converted to UpperCase Successfully", "success");
    }
    const handleLoClick = ()=>{
        
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Text Converted to lowerCase Successfully", "success");
  }
  const handleClick = ()=>{
        
    let newText = ('');
    setText(newText);
    props.showAlert("Text Clear", "success");
}
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
<div className="mb-3 my-5">
    <h1>{props.heading}</h1>
    <textarea
  className="form-control"
  value={text}
  onChange={handleOnChange}
  style={{
    backgroundColor: props.mode === 'light' ? 'white' : 'black',
    color: props.mode === 'light' ? 'black' : 'white',
  }}
  id="exampleFormControlTextarea1"
  rows="10"
></textarea>


</div>
<button className='btn btn-primary' onClick={handleUpClick}p>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick}p>Convert to Lowercase</button>
<button className='btn btn-primary mx-3' onClick={handleClick}p>Clear Text</button>

    </div>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words, and {text.length} characters</p>
      <p>{text.split(" ").length*0.008} minutes are required to read</p>
      <h3>Your Text Summary</h3>
      <p>{text.length>0?text:"Enter Something to preview it here"}</p>
    </div>
    </>
    
  )
}

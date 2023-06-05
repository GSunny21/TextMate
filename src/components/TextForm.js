import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase btn clicked" + text)
        let ntext = text.toLocaleUpperCase();
        setText(ntext)
        props.showAlert("Converted to UpperCase")
    }

    const handleLowClick = ()=>{
        // console.log("UpperCase btn clicked" + text)
        let ntext = text.toLocaleLowerCase();
        setText(ntext)
        props.showAlert("Converted to LowerCase")
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const handleClearText = ()=>{
        setText('')
        props.showAlert("Text cleared")
    }

    const handleFindnReplace = ()=>{
        let key = prompt("Enter the word to replace")
        let value = prompt("Enter the word to replace with")

        let result = text.replace(key, value);
        setText(result)
        props.showAlert("Replaced successfully!")
    }

    const handleCopyText = ()=>{
        let cpyText = document.getElementById("textArea")

        cpyText.select();
        cpyText.setSelectionRange(0, 99999)

        navigator.clipboard.writeText(cpyText.value)
        props.showAlert("Text Copied")
    }

    const [text, setText] = useState('Enter the text')

    return (
    <>
    <div className="container" style={{color: ((props.mode==='dark') ? 'white' : 'black')}}>
      <div className="mb-3 position-relative">
        <div><h1>{props.heading}</h1></div>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: ((props.mode==='dark') ? '#202020' : 'white'), color: ((props.mode==='dark') ? 'white' : 'black')}} id="textArea" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleFindnReplace}>Find & Replace</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleCopyText}>Copy text</button>
        <button className="btn btn-danger my-3 position-absolute bottom-0 end-0" onClick={handleClearText}>Clear Text</button>
      </div>
    </div>
    <div className="container" style={{color: ((props.mode==='dark') ? 'white' : 'black')}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} minutes to read</p>
    </div>
    </>
  );
}

import React, { useState } from 'react';
import PropTypes from 'prop-types';
export default function TextForm(props) {
console.log("received props = == = = =>", props);
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleOnClick = () => {
    setText(text.toUpperCase());
    props.showAlert('Converted to Upper case','success')
  }
  const handleLoClick = () => {
    setText(text.toLocaleLowerCase());
    props.showAlert('Converted to lower case','success')
  }
  const handleUcClick = () => {
    setText(text[0].toUpperCase() + text.slice(1));
    props.showAlert('Converted to First lettr case','success')
  }
  const removeExtraSpace = () => {
    setText(text.split(' ').filter(word => word).join(' '));
    props.showAlert('Removed extra spaces','success')
  } 
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard','success')
  }
  const resetText = () => {
    if(text.length) {
      setText('');
      props.showAlert('Test reset','success')
    }
  }
  const [text, setText] = useState('Enter text Here');
  return (
    <div className="container">
      <div className="mb-3">
        {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title} </label> */}
        <h2 className='my-3' style={{color: props.textColor || 'black'}}> {props.title || "Enter the text to analyze below1"} </h2>
        <textarea className="form-control" id="myBox" rows="3" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} onChange = {handleOnChange} value = {text}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick= { handleOnClick }> Convert to upper case </button>
      <button className="btn btn-primary mx-1 my-1" onClick= { handleLoClick }> Convert to lower case </button>
      <button className="btn btn-primary mx-1 my-1" onClick= { handleUcClick }> UC First case </button>
      <button className="btn btn-primary mx-1 my-1" onClick= { removeExtraSpace }> Remove extra space </button>
      <button className="btn btn-primary mx-1 my-1" onClick= { copyText }> Copy Text </button>
      <button className="btn btn-primary mx-1 my-1" onClick= { resetText }> Reset Text </button>

          <h2  style={{color: props.textColor}}>Your text summery</h2>

        <div className="container my-3" style={{color: props.textColor}}>
          <p> Total {text.split(" ").filter(res=> res.length!==0).length } words  and {text.trim().length} characters </p>
          <p> Total {0.008 * text.split(" ").filter(res=> res.length!==0).length } Minutes read </p>

        </div>
        <h2 style={{color: props.textColor}}>Preview</h2>
        <p style={{color: props.textColor}}>{text}</p>

    </div>
    // </div>
  )
}

TextForm.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string
}
TextForm.defaultProps = {
  title: "Enter the text to analyze below",
  textColor: 'black'
}


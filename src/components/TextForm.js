import React, { useState } from 'react';
export default function TextForm(props) {

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleOnClick = () => {
    setText(text.toUpperCase());
  }
  const handleLoClick = () => {
    setText(text.toLocaleLowerCase());
  }
  const handleUcClick = () => {
    setText(text[0].toUpperCase() + text.slice(1));
  }
  

  const [text, setText] = useState('Enter text Here');
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title} </label>
        <textarea className="form-control" id="myBox" rows="3"  onChange = {handleOnChange} value = {text}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleOnClick}>Convert to upper case</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button>
      <button className="btn btn-primary mx-1" onClick={handleUcClick}>UC First case</button>


        <div className="container">
          <h2>Your text summery</h2>
          <p> Total {text.length} letters and {text.split(" ").length } words</p>
        </div>
        <h2>Prevew</h2>
        <p>{text}</p>

    </div>

  )
}

import React, { useState } from "react";

export default function Textbox(props) {
  const [text, setText] = useState("");

  let chngValueFunc = (event) => {
    setText(event.target.value);
  };

  let chngToUpperBtn = () => {
    let uc = text.toUpperCase();
    setText(uc);
  };

  let chngToLowerBtn = () => {
    let uc = text.toLowerCase();
    setText(uc);
  };

  let clearBtn = ()=>{
      setText("");
  }

  let copyBtn = ()=>{
    navigator.clipboard.writeText(text);
  };


  return (  
    <div>
      <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}
          id="textBox"
          rows="10"
          value={text}
          onChange={chngValueFunc}
        ></textarea>
      </div>
      <p className={`text-${props.mode==='light'?'dark':'light'}`}>Length : {text.length} and Words : {text.split(" ").length-1}</p>
      <button className="btn btn-primary me-2 my-2" onClick={chngToUpperBtn}>
        Change to uppercase
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={chngToLowerBtn}>
        Change to lowercase
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={copyBtn}>
        Copy to clipboard
      </button>
      <button className="btn btn-primary me-2 my-2" onClick={clearBtn}>
        Clear
      </button>

      
      
    </div>
  );
}

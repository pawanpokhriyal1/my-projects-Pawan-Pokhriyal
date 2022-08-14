import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		// console.log("uppercase was clicked" + newText);
	};
    const handleLoClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		// console.log("uppercase was clicked" + newText);
	};
     const clearOnclick = () => {
		
		setText("");
		// console.log("uppercase was clicked" + newText);
	};
    const reverseOnclick = () => {
		 let newString = "";
    for (let i = text.length - 1; i >= 0; i--) {
        newString += text[i];
    }
    setText(newString);
	};
    

	const handleOnChange = (event) => {
		// console.log("On Change");
		setText(event.target.value);
	};

	const [text, setText] = useState("enter text");
	// text="new text"; //wrong way to change text or update
	// setText("newText"); correct way

	return (
		<div>
			<div className="mb-3">
				<label htmlFor="mybox " className="form-label h1" style={{color:props.mode==='dark'?'white':'dark'}}>
					{props.heading}
				</label>
				<textarea
					className="form-control"  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}
					value={text}
					onChange={handleOnChange}
					id="mybox"
					rows="10"></textarea>
			</div>
			<div style={{color:props.mode==='light'?'black':'white'}}> 
				<button className="btn btn-primary mx-3" onClick={handleUpClick}>
				Convert to uppercase
			</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>
				Convert to lower case
			</button>
            <button className="btn btn-primary mx-3" onClick={clearOnclick}>
				Click to clearOnclick
			</button>
             <button className="btn btn-primary mx-3" onClick={reverseOnclick}>
				Click to reverse
			</button>
            <div className="my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{.008 * text.split("").length} minutes will require to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
			</div>
		</div>
	);
}
TextForm.propTypes = { heading: PropTypes.string };

TextForm.defaultProps = { heading: "Enter your here" };

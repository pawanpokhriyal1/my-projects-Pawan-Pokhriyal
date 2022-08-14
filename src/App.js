import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Form from "./components/Form";

import React,{useState} from 'react';


function App() {
	const [mode, setmode] = useState('dark');

	const toggleMode =()=>{
		if(mode === 'light'){
			setmode('dark');
			document.body.style.backgroundColor = 'grey';
		}
		else{
			setmode('light');
			document.body.style.backgroundColor = 'white';
		}
	}


	return (
		<>
			<Navbar title="React js"  mode={mode} toggleMode={toggleMode}/*aboutText="About React"*/ />
			{/* <Navbar /> */}
			<div className="container">
				<TextForm heading="Enter the text to analyze" mode={mode}/>
				<About/>
				<Form/>
				
			</div>
		</>
	);
}

export default App;

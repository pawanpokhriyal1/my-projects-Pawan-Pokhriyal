import React, { useState,useEffect} from "react";

export default function Form() {
	const initialValues = { user: "", Email: "", Password: "", Mob: "" };
	const [FormValues, setFormValues] = useState(initialValues);
	const [FormErrors, setFormErrors] = useState({});
	const [isSubmit, setisSubmit] = useState(false);
	const handleOnChange = (event) => {
		const {name, value } = event.target;
         setFormValues({...FormValues, [name]: value });
		setFormValues(event.target);
	};
	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.user) {
			errors.user = "name required !";
		}
		if (!values.Email||"") {
			errors.Email = "email is reqired";
		} else if (!regex.test(values.Email)) {
			errors.Email = "this is not valid email format";
		}
		if (!values.Password||"") {
			errors.Password = "Password is reqired";
		} else if (!regex.test(values.Password)) {
			errors.Password = "this is not valid password ";
		}
		
		if (!values.Mob||"") {
			errors.Mob = "mob no is reqired";
		} 
		return errors;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(FormValues));
		setisSubmit(true);
        console.log(FormErrors);
        console.log(FormValues);

        localStorage.setItem("data gathered",JSON.stringify(FormValues));
        console.log(JSON.parse(localStorage.getItem("data gathered")));
	};
	useEffect(() => {
		console.log(FormErrors);
		if (Object.keys(FormErrors).length === 0 && isSubmit) {
			console.log(FormValues);
		}
	}, [FormErrors]);

	return (
		<div >
			<div className="text-center fs-4">
				{Object.keys(FormErrors).length === 0 && isSubmit ? (
					<div className="ui message success">Signed in successfully</div>
				) : (
					<div className="ui message alert"> unsuccessful in your attempt</div>
				)}
			</div>
			<h1 className="text-center my-3">Himalayan Explorer</h1>
			<div className="container">
				<form className="row g-3 border border-3 border-primary m-2 p-2"  >
					<div className="col-12">
						<label htmlFor="inputUserName" className="form-label">
							User Name
						</label>
						<input
							type="text"
							className="form-control "
							id="inputUserName"
							value={FormValues.user}
							placeholder="Enter your Name"
							onChange={handleOnChange}
						/>
                        <p className="text-danger">{FormErrors.user}</p>
					</div>
                    
					<div className="col-md-6">
						<label htmlFor="inputEmail4" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control "
							value={FormValues.Email}
							id="inputEmail4"
							onChange={handleOnChange}
						/>
                         <p className="text-danger">{FormErrors.Email}</p>
					</div>
                   
					<div className="col-md-6">
						<label htmlFor="inputPassword4" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control "
							value={FormValues.Password}
							id="inputPassword4"
							onChange={handleOnChange}
						/>
                        <p className="text-danger">{FormErrors.Password}</p>
					</div>
                    
					{/* <div className="col-12">
						<label htmlFor="inputAddress" className="form-label">
							Address
						</label>
						<input
							type="text"
							className="form-control"
							id="inputAddress"
							placeholder="1234 Main St"
						/>
					</div> */}

					<div className="col-md-6">
						<label htmlFor="inputCity" className="form-label">
							City
						</label>
						<input type="text" className="form-control" id="inputCity" />
					</div>
					{/* <div className="col-md-4">
						<label htmlFor="inputState" className="form-label">
							State
						</label>
						<select id="inputState" className="form-select">
							<option selected>Choose...</option>
							<option>UKD</option>
							<option>UP</option>
							<option>HR</option>
							<option>PNJ</option>
						</select>
					</div> */}
					<div className="col-md-2">
						<label htmlFor="inputMob" className="form-label">
							Mob No
						</label>
						<input
							type="text"
							className="form-control "
							value={FormValues.Mob}
							id="inputMob"
							onChange={handleOnChange}
						/>
                        <p className="text-danger">{FormErrors.Mob}</p>
					</div>
                    
					<div className="col-12">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								id="gridCheck"
							/>
							<label className="form-check-label" htmlFor="gridCheck">
								I agree to terms and Condition
							</label>
						</div>
					</div>
					<div className="col-12">
						<button
							type="submit"
							className="btn btn-primary"
							id="submit"
                            onClick={handleSubmit}
							>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
// import { useState, useEffect } from "react";


// function App() {
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="container">
//       {Object.keys(formErrors).length === 0 && isSubmit ? (
//         <div className="ui message success">Signed in successfully</div>
//       ) : (
//         <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
//       )}

//       <form onSubmit={handleSubmit}>
//         <h1>Login Form</h1>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.username}</p>
//           <div className="field">
//             <label>Email</label>
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="fluid ui button blue">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./FormFile.css";
import { useState } from "react";
import Axios from 'axios';
import validation from "./Validation";

const Form = () => {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        age:"",
        phone:"",
        password:"",
        text:"",
        select:""
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        Axios.post("https://webhook.site/0de2f33c-96bc-4efb-8f64-7fd88eb6c24e", values).then(res => 
            { 
                console.log(res.data)
            })}

    const changeHandler = (e) => {
        setValues( prevValues => {
            return { ...prevValues, [e.target.name]: e.target.value}
        })
    }

    return (
        <div className="create">
        <form onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
        <div className='firstLine'>
            <label>First Name:</label>
            <input className="firstLineInput" 
                type="text"
                name="firstName"
                value={values.firstName}
                placeholder="First Name"
                onChange={changeHandler}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
            <label>Last Name:</label>
            <input className="firstLineInput"  
                type="text"
                name="lastName"
                value={values.lastName}
                placeholder="Last Name"
                onChange={changeHandler}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            
        </div>    
        <div className='formInputs'> 
            <label>Email:</label>
            <input 
                type="email"
                name="email"
                value={values.email}
                placeholder="Email"
                onChange={changeHandler}
            />
            {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='formInputs'> 
            <label>Age:</label> 
            <input 
                type="number"
                min="1"
                max="99"
                name="age"
                placeholder="Age"
                onChange={changeHandler}
            />
           
            {errors.age && <p>{errors.age}</p>}
        </div> 
        <div className='formInputs'> 
            <label>Phone:</label>   
            <input 
                type="tel"
                name="phone" 
                placeholder="Phone"
                onChange={changeHandler}
            />
           
            {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className='formInputs'>     
            <label>Password:</label>  
            <input 
                type="password"
                name="password"
                placeholder="Password"
                 onChange={changeHandler}
            />
        </div>    
            {errors.password && <p>{errors.password}</p>}
        <div className='formInputs'>     
            <label>Select topic:</label>
            <select className="Select"
                value={values.select}
                name="select"
                onChange={changeHandler}>
                <option value='contact'>contact</option>
                <option value='apply'>apply</option>
            </select>
        </div>
        <div className='formInputs'> 
            <label>Text:</label>
            <textarea className="textArea" 
                name="text"
                placeholder="Write your text"
                onChange={changeHandler}
            ></textarea>
            {errors.text && <p>{errors.text}</p>}
        </div>    
            <button>Submit</button>
        </form>
        </div>

    );
}

export default Form;
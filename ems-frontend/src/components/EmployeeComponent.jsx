import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');

    const [ errors, setErrors ] = useState({
        firstName : '',
        lastName : '',
        email : ''
    });

    const navigator = useNavigate();

   
    const saveEmployee = ( e ) => {
        e.preventDefault();

        if ( validateForm() ){
            const employee = { firstName, lastName, email }
            console.log(employee);

            createEmployee(employee).then((response) => {
                console.log(response.data);
                navigator('/employees');

            })
    }
        }
            

    function validateForm () {
        let valid = true;

        const errorsCopy = {... errors }

        // validate first bane
        if( firstName.trim() ){
            errorsCopy.firstName = '';
        }
        else {
            errorsCopy.firstName = 'First Name is Required';
            valid = false;
        }


        // validates last name
        if( lastName.trim() ){
            errorsCopy.lastName = '';
        }
        else {
            errorsCopy.lastName = 'Last Name is Required';
            valid = false;
        }

        // validates email
        if( email.trim() ){
            errorsCopy.email = '';
        }
        else {
            errorsCopy.email = 'Email id is Required';
            valid = false;
        }

        setErrors(errorsCopy);
        return valid; 
    }
 
    return (
        <div className = 'container'>
            <br></br>
           <div className = 'row'>
                <div className = 'card col-md-6 offset-md-3'>
                    <h2 className = 'text-center'>
                        Add Employee
                    </h2>

                    <div className = 'card-body'>
                        <form>
                            <div className = 'form-group mb-2'>
                                <label 
                                    className = 'form-label'>
                                        First Name:
                                </label>
                                <input 
                                    type = 'text'
                                    placeholder = 'Enter First Name'
                                    name = 'firstName'
                                    value = {firstName}
                                    className = {`form-control ${ (errors.firstName) ? "is-invalid" : ''}`}
                                    // className = {`form-control ${errors.firstName ? "is-invalid" : ""}`}
                                    onChange = {(e) => setFirstName(e.target.value)}>

                                </input>
                                
                                {errors.firstName && 
                                    <div className = 'invalid-feedback' >
                                        {errors.firstName}
                                    </div>}
                            </div>

                            <div className = 'form-group mb-2'>
                                <label 
                                    className = 'form-label'>
                                        Last Name: 
                                </label>
                                <input 
                                    type = 'text'
                                    placeholder = 'Enter Last Name'
                                    name = 'lastName'
                                    value = {lastName}
                                    className = {`form-control ${ (errors.lastName) ? "is-invalid" : ''}`}
                                    onChange = {(e) => setLastName(e.target.value)}>

                                </input>

                                {errors.lastName && 
                                    <div className = 'invalid-feedback' >
                                        {errors.lastName}
                                    </div>}

                            </div>

                            <div className = 'form-group mb-2'>
                                <label 
                                    className = 'form-label'>
                                        Email Id: 
                                </label>
                                <input 
                                    type = 'email'
                                    placeholder = 'Enter Your Email Id'
                                    name = 'email'
                                    value = {email}
                                    className = {`form-control ${ (errors.email) ? "is-invalid" : ''}`}
                                    onChange = {(e) => setEmail(e.target.value)}>

                                </input>

                                {errors.email && 
                                    <div className = 'invalid-feedback' >
                                        {errors.email}
                                    </div>}

                            </div>

                            <button className = 'btn btn-success' onClick = {saveEmployee}> Submit </button>
                        
                        </form>

                    </div>

                </div>

           </div>
        </div>
    )
}

export default EmployeeComponent
// 1......................
    
    // function handleFirstName (e) {
    //     setFirstName(e.target.value)
    // }




    // 2................
    // const handleFirstName = (e) => setFirstName(e.target.value);

    // const handleLastName = (e) => setLastName(e.target.value);
    
    // const handleEmail = (e) => setEmail(e.target.value);
 


    // 3.................
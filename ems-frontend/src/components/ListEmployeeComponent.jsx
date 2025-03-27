import React from 'react';
import { useState, useEffect } from 'react';
import { listEmployee } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

   const [employees, setEmployees ] = useState([]);
   const navigator = useNavigate ();
   
   useEffect(()=>{
                listEmployee().then((response)=>{
                    setEmployees(response.data);
                }).catch((error) => {
                    console.log(error);
                })
   }, [] );

   function addNewEmployee () {
    navigator('/add-employee')

   }

    return (
    <div className='container'>

      <h1 className='text-centre' > List of Employees </h1>
      <button
        className = 'btn btn-primary mb-2'
        onClick = { addNewEmployee }>
        Add Employee
        </button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th> Employee First Name </th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
            </tr>
        </thead>

        <tbody>
            {
                employees.map((emoployee)=>
                    <tr key = {emoployee.id} >
                        <td> { emoployee.id } </td>
                        <td> { emoployee.firstName } </td>
                        <td> { emoployee.lastName } </td>
                        <td> { emoployee.email } </td>

                    </tr>
                
                )
            }
        </tbody>
      </table>



    </div>
  )
}

export default ListEmployeeComponent

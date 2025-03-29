import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

// export const listEmployee = () => {
//     return axios.get(REST_API_BASE_URL);
// }

// simplified implementation would be
export const listEmployee = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post( REST_API_BASE_URL, employee );

// Code to Get Employee REST API using axios
export const getEmployee = ( employeeId ) => axios.get( REST_API_BASE_URL + '/' + employeeId );

// // Code to Update Employee REST API using axios
export const updateEmployee = (employeeId, employee) => axios.put( REST_API_BASE_URL + '/' + employeeId, employee );

// // Code to Delete Employee REST API using axios
export const deleteEmployee = (employeeId) => axios.delete( REST_API_BASE_URL + '/' + employeeId );
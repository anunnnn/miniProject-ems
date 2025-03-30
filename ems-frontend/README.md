# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# readme starts here 
Connect React App with Get All employees REST API 

--> adding header and footer to the react app
development Steps:
1. Create HeaderComponent ( functional component )
2. Import and Use Header component
3. CreateFooterComponent ( functional component )
4. Import and Use FooterComponent in App Component
 
 
--> Configure Routing in React App
Development Steps:
1. Install react-router-dome library using NPM
2. Configure Routing in App Component.
3. Configure Route for ListEmployeesComponent.
4. Test Route for listEmployeeComponent.

--> Add Employee Feature - Create React EmployeeComponent
1. Create React Functional Component - EmployeeComponent
2. Add Employee button in listEmployeecomponent
3. Configure Route for EmployeeComponent.
4. Test above changes.

--> Add Employee Feature - Add Employee Form Handling
1. Define State Variables ( firstName, lastName, and email) in EmployeeComponent using useState Hook.
2. Design Add Employee form using HTML and Bootstrap.
3. Create JavaScript Function to Handle onClick Event ( Form Submit ) .
4. Test React App ( print form data in broeser console ).

--> add employee feature - Connect React to Add Employee Rest API
1. In EmployeeService, write a code to call Add Employee REST API using axios.
2. Change EmployeeComponent to call EmployeeService method.
3. Navigate to ListEmployees page After form Submission done.
4.  Test above changes.

--> add employee form validation
Add Employee Feature -  Add Employee Form Validation
1. Use the useState hook to initialize state variables that will hold validation errors.
2. write a validation function that checks thr form data and returns validation errors.
3. Validate form on submission.
4. Display Validation Errors.
5. Test above Changes.


-->> Add Update button, title and route
1. Add Update button to list employee page
2. Add Route for Update Employee in App component
3. Change Page Title Dynamically ( EmployeeComponent supports both Add and Update )
4. Test above changes.


--->> Update Employee Feature - Connect React App to Get Employee REST API
... Connect React App to get Employee REST API
1. In EmployeeService, write a code to call Get Employee REST APi using axios.
2. Use useEffect hook to populate the employee data in the form for update.
3. Test above changes.

---> Update Employee Feature - Connect React App to Update Employee REST API
1. In EmployeeService, write a code to call Update Employee ReST API using axios.
2. Change EmployeeComponent.saveOrUpdateEmployee() method to perform both add and update employee operations.
3. Test above activities.


--> Implement Delete Employee Feature in React App
1. In Employee Service, write a  code to call Delete Employee REST API using axios.
2. Add Delete button to list Employee Table.
3. Create JavaScripts function to handle Delete button event.
4. Test Above Changes.

Requirement 3- Build CRUD REST APIs for Department Management Module
1. Add Department
2. Get Department
3. Get All Department
4. Update Department
5. Delete Department


---> Create Department JPA entity
---> Create Department Entity and Department Repository
---> DepartmentDto and DepartmentMapper
---> Build Create Department REST API
---> Build Get Department REST API
---> Build Get All Department REST API
---> Build Update Department REST APi
---> Build Delete Department REST API



1. Entity
2. Repository

3. Dto
4. Mapper

5. service
6. service implementation
7. controller

















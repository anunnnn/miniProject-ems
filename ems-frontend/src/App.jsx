import ListEmployeeComponent from './components/ListEmployeeComponent.jsx';
import HeaderComponent from './components/HeaderComponent.jsx';
import FooterComponent from './components/FooterComponent.jsx';
import EmployeeComponent from './components/EmployeeComponent.jsx';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>
      < BrowserRouter >
        < HeaderComponent />
          <Routes>
          
          {/* {/* // http://localhost:3000             */}
           <Route
              path = '/' 
              element = { <ListEmployeeComponent />  } >
            </Route>

            {/* // http://localhost:3000/employees */}
            <Route 
              path = '/employees'
              element = { < ListEmployeeComponent /> }
                >
            </Route>

            {/* path: http://localhost:300/add-employee */}
            <Route
              path = '/add-employee'
              element = { < EmployeeComponent /> }
              >
            </Route>

            {/* path: http://localhost:300/edit-employee/1 */}
            <Route
              path = '/edit-employee/:id'
              element = { < EmployeeComponent /> }
              >
            </Route>

          </Routes>

        < FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App

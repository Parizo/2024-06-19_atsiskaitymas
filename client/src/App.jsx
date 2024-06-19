import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'

import {useEffect, useState} from "react";

import axios from "axios";
import { FirstPage } from "./components/FirstPage/FirstPage";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login"
import { Services } from './components/services/Services';
import { Register } from './components/services/Register/Register'
import { Prices } from './components/prices/Prices'


// function App() {

//   const [users, setUsers] = useState([])
  
//   useEffect(() => {
//  axios.get('http://localhost:3000/getUsers')
//  .then(users => setUsers(users.data))
//  .catch(err => console.log(err))
//   }, [])

//   return (
//     <>
//     <div className='title'>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               title
//             </th>
//             <th>
//               subTitle
//             </th>
//             <th>
//               description
//             </th>
//           </tr>
//         </thead>
//         <tbody>
// {
//   users.map(user => {
//  return <tr>
//   <td>{user.name}</td>
//   <td>{user.email}</td>
//   <td>{user.age}</td>
// </tr>
//   })
// }
//         </tbody>
//       </table>
//       </div>
//     </>
//   )
// }
// // function App() {
// // return (
// //   <>
  

function App() {

 return (
<>
<Header />
  <Routes>
    <Route path='/' element={<FirstPage/>}/>
  <Route path='/labas' element={<FirstPage/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/Services" element={<Services/>}/>
  <Route path="/Register" element={<Register/>}/>
  <Route path="/Prices" element={<Prices/>}/>
</Routes>
<Footer />
</>
);
}


export default App

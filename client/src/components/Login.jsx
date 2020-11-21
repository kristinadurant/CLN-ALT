// import React, { useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';

// const Login = ({ history }) => {
//   const { setCurrentUser } = useContext(AppContext);
//   const [formData, setFormData] = useState(null);

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//     console.log(formData);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', formData);
//       setCurrentUser(response.data);
//       sessionStorage.setItem('user', response.data);
//       history.push('/');
//     } catch (error) {
//       console.log('Login Error: ' + error);
//     }
//   };

//   return (
//     <div>
//       {/* <form onSubmit={handleLogin}>
//           <label htmlFor="email">Email Address</label>
//           <input
//             id="email"
//             type="email"
//             placeholder="Email Address"
//             name="email"
//             onChange={handleChange}
//           /> */}
//           {/* <label htmlFor="password">Password</label>
//           <input
//             id="password"
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={handleChange}
//           />
//           <button type="submit">Login</button>
//       </form> */}
//       <Link to="#">
//         Need an Account? Sign up.
//       </Link>
//     </div>
//   );
// };

// export default Login;

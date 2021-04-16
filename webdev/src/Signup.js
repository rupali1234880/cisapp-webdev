// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// function Signup (){
//   const history = useHistory();
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//   });
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//   };

  

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="white">
//         <div className="input-field">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="password">password</label>
//           <input type="password" id="password" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="firstName">firstName</label>
//           <input type="text" id="firstName" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="lastName">lastName</label>
//           <input type="text" id="lastName" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Signup;

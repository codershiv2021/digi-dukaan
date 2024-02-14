import React from 'react';
import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
// import  from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')

//   );

// // root.render(
// //   <BrowserRouter>

    
// //     <App />
// //     {/* <Route path="/" element={ <App /> }> */}

// //   </BrowserRouter>,
//   document.getElementById('root')
// );


 reportWebVitals(); 


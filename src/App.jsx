import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";


// const App = () => {
//   return <Home/>;
// };


const App = () =>{
  return (
//     <Router>
//       <Routes>
//         {/* <Route exact path="/"> */}
//         <Route path="/" element={<Home />} />
//           {/* <Home /> */}
//         {/* </Route> */}
//         {/* <Route path="/login">
//           <Login />
//         </Route> */}
//         <Route path ="/login" element = {<Login/>}/> 
//         {/* redirect ka not done if user hai redirect to home */}
//         {/* <Route path="/register">
//           <Register />
//         </Route> */}
//         <Route path = "/register" element = {<Register/>}/>
// {/*         
//         <Route path="/products">
//         <ProductList />
//         </Route> */}
//         <Route path ="/products" element = {<ProductList/>}/>
//       </Routes>

//     </Router>
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/products" element={<ProductList />} />
  </Routes>
</Router>

  )
}

export default App;


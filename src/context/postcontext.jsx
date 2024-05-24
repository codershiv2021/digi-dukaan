// import axios from "axios"
// import React, { useState } from "react";

// export const postsContext = React.createContext()

// const postcontextwrapper = ({children}) =>{
//       const [posts,setposts] = useState([])
      
//       const getposts = async() =>{
//             try{
//                   const resp = await axios.get("http://localhost:3001/api/products")
//                   setposts(resp.data.posts)
//                   console.log(posts)
//                   return true
//             }
//             catch(err){
//                   return false
//                   console.log(err)
//                   setposts([])
//             }

            
//       }
// }
// return (
//       <postsContext.Provider value={{ posts, getposts }}>
//           {children}
//       </postsContext.Provider>
//   );

//   export default postcontextwrapper;
import axios from "axios";
import React, { useState } from "react";

export const postsContext = React.createContext()

const PosstContextWrapper = ({ children }) => {

    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const resp = await axios.get("http://localhost:3001/api/products")
            setPosts(resp.data.posts)
            console.log(posts)
            return true
        } catch (e) {
            return false
            console.log(e)
            setPosts([])
        }
    }

    const values = {
        posts,
        getPosts
    }

    return (
        <postsContext.Provider value={values}>
            {children}
        </postsContext.Provider>
    );
}

export default PosstContextWrapper;
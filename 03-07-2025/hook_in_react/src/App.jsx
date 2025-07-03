// import { useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";
import User from "./Components/User";

// function App() {
  
//   const [user, setUser] = useState({
//     name: 'John',
//     age: 25,
//     city: 'Delhi'
//   });

//   const updateName = () => {
//     setUser(prev => ({
//       ...prev,
//       name: 'Prakash'
//     }));
//   };
//   return (
//     <>
//     <h2>{user.name}</h2>
//       <p>Age: {user.age}</p>
//       <p>City: {user.city}</p>
//       <button onClick={updateName}>Change Name</button>
//     </>
//   )
// }






// function App(){
//   const inputElement = useRef()
//   const passElement = useRef()

//   function focusInput(){
//     inputElement.current.focus()
//     pass.current.focus()
//   }
//   return (
//     <>
//     <input type="text" ref={inputElement}/>
//     <input type="password" ref={passElement}/>
// <button onClick={focusInput}>Focus</button>
//     </>
//   )
// }


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

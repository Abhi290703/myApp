import { useState } from "react";
import Login from "../features/Auth/Login";
import Signup from "../features/Auth/Signup";

const UserForms=()=>{
    const [login,setlogin]=useState(true)
    return(
        <>
         

<form className="max-w-md mx-auto bg-amber-200">
  {/* <Login/>
  <Signup/> */}
  

  {
    login?<Login/>:<Signup/>
  }

  <button onClick={()=>setlogin(true)}>SignIn</button>
  <button onClick={()=>setlogin(false)}>Signup</button>
</form>

        </>
    )
}
export default  UserForms;
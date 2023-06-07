import { useState } from "react";
// import {loginUser} from "../backend/firebaseinit"
import loginUser from "../backend/firebase";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { auth } from "../backend/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null)
    function handleChangeemail(event) {
        // console.log(event.target.value);
        setEmail(event.target.value)
      }
      function handleChangepassword(event) {
        // console.log(event.target.value);
        setPassword(event.target.value)
      }
    return (
        <div className="login-cont">
            <h2>Login</h2>
        <input type="text" placeholder="email" onChange={handleChangeemail}/>
        <input type="password" placeholder="password" onChange={handleChangepassword}/>
        <button onClick={()=>{
            
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/admin")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                alert(errorMessage)
            });

        }}>Login</button>
        </div>
    );
}

export default Login
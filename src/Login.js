import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth } from './firebase'
import { provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import logo from "./download.jpg"
function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then(result=>{
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user
           })

        })
        .catch((error)=>{
          alert(error.message);
        })
    };

    return (
        <div className="login">
            <div className="login_container">
              <img src={logo} />
                  <div className="login_text">
                      <h1>Login In to Whatsapp</h1>

                  </div>
                  <Button onClick={signIn}>Sign In With Google</Button>
              
            </div>
        </div>
    )
}

export default Login

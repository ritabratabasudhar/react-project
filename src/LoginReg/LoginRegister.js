import React, { Fragment,useContext } from 'react'
import Login from './Login';
import Register from './Register';
import { LoginRegisterContext } from '../Context/LoginRegContext'



export default function LoginRegister() {
  const {isLoginTrue} =  useContext(LoginRegisterContext);
  
    return (
            <Fragment>
            
                {isLoginTrue===true?<div>
                   <div><Login/></div> <br></br>
                   </div>
                :
                <div>
                    <div style={{justifyContent:'center'}}><Register/></div><br></br>
                </div>
                }
                
                
            </Fragment>
        )
    }

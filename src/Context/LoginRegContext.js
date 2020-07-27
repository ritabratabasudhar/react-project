import React,{createContext, useState} from 'react'
export const LoginRegisterContext=createContext();
    
export default function LoginRegistercontext(props){
    
    const[isLoginTrue,LoginTruechange]=useState(true);
    const onChangeLogin=()=>{
        LoginTruechange(!isLoginTrue);
        console.log(isLoginTrue)
    }
    return(<div>      
          <LoginRegisterContext.Provider value={{isLoginTrue,onChangeLogin}}>
        
         {props.children}
        
        </LoginRegisterContext.Provider>
        </div>

    )
}
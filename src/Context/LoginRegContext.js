import React,{createContext, useState} from 'react'
export const LoginRegisterContext=createContext();
    
export default function LoginRegistercontext(props){
    
    const[isLoginTrue,LoginTruechange]=useState(true);
    const[username,setUsername]=useState('');
    const settheusername=(name)=>{
        setUsername(name);
        console.log(name)
    }
    const onChangeLogin=()=>{
        LoginTruechange(!isLoginTrue);
        console.log(isLoginTrue)
    }
    return(<div>      
          <LoginRegisterContext.Provider value={{isLoginTrue,onChangeLogin,username,settheusername}}>
        
         {props.children}
        
        </LoginRegisterContext.Provider>
        </div>

    )
}
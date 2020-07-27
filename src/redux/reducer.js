const initialState = {
    userName:"",
    password:"",
    fname:"",
    lname:"",
    email:"",
    password:"",
    ph_no:""

};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            newState.userName = action.value;
            newState.password=action.To;
            break;
        case 'REGISTER':
            newState.lname=action.lname;
            newState.fname=action.fname;
            newState.password=action.password;
            newState.ph_no=action.ph_no;
            newState.email=action.email;
        }
    return newState;
};

export default reducer;
const initialState = {
    userName: "",
    password: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    ph_no: "",
    dcity: "",
    state: "",
    price: "",
    firstName: "",
    lastName: "",
    city: "",
    zip: "",
    totalPeople: "",
    address: "",
    country: "",
    startDate:"",
    totalDays:""
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case 'AGE_UP':
            newState.userName = action.value;
            newState.password = action.To;
            break;
        case 'REGISTER':
            newState.lname = action.lname;
            newState.fname = action.fname;
            newState.password = action.password;
            newState.ph_no = action.ph_no;
            newState.email = action.email;
            break;
        case 'Destination_Details':
            newState.state = action.state;
            newState.dcity = action.city;
            newState.price = action.price;
            break;
        case 'BOOKING_DETAILS':
            newState.firstName = action.firstName;
            newState.lastName = action.lastName;
            newState.city = action.city;
            newState.country = action.country;
            newState.zip = action.zip;
            newState.totalPeople = action.totalPeople;
            newState.address = action.address;
            newState.startDate=action.startDate;
            newState.totalDays=action.totalDays;
            break;

    }
    return newState;
};

export default reducer;
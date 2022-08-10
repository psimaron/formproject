const validation = (values) => {
        let errors = {};
    
        if(!values.firstName){
            errors.firstName = "Username required";
        }
    
        if(!values.lastName){
            errors.lastName = "Username required";
        }
    
        if(!values.email) {
            errors.email = "Email required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
        {
            errors.email = "Email adress is invalid";
        }
    
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if(!values.password){
            errors.password = "Password is required";
        } else if (values.password.length < 6) {
            errors.password = "Password needs to be 6 characters or more";
        } else if (!values.password.match(passw)){
            errors.password = "Password must include between 7 to 15 characters which contain at least one numeric digit and a special character"
        }

        if(!values.phone){
            errors.phone = "Enter your phone number";
        } else if (values.phone.length > 10) {
            errors.phone = "Enter a valid phone number";
        } else if (values.phone.length < 10) {
            errors.phone = "Enter a valid phone number";
        }

        if(!values.age){
            errors.age = "Enter your age.";
        } 

        if(!values.text){
            errors.text = "Write something";
        } else if (values.text.length < 15) {
            errors.text = "Write at least 15 characters"
        }

        return errors;
    };   

    export default validation;
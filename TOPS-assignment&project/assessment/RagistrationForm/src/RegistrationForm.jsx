import React from 'react'
import useValidation from './useValidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const RegistrationForm = () => {

    const validateUsername = (username) => {
        return username.length > 4 ? "Username must be 4 characters or less" : "";
      };
    const validatePassword =(password)=>{

    }
      const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email) ? "" : "Invalid email format";
      };
    
      const validatePhoneNumber = (phoneNumber) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phoneNumber) ? "" : "Phone number must be 10 digits";
      };

    const username = useValidation(validateUsername);
    const email = useValidation(validateEmail);
    const phoneNumber = useValidation(validatePhoneNumber);
    const password = useValidation(validatePassword);


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (!username.error && !email.error && !phoneNumber.error && username.value && email.value && phoneNumber.value) {
    //         console.log("Form Submitted Successfully!", {
    //             Username: username.value,
    //             Email: email.value,
    //             PhoneNumber: phoneNumber.value,
    //         });
    //     } else {
    //         console.log("Form submission failed. Please correct errors.");
    //     }
    // };
    const handleSubmit = (event, formState) => {
        event.preventDefault();
        
        // Check if all fields have valid values (no error and a value present)
        const allValid = Object.values(formState).every(
            (field) => !field.error && field.value
        );
    
        if (allValid) {
            // Extract the values dynamically
            const formData = Object.fromEntries(
                Object.entries(formState).map(([key, field]) => [key, field.value])
            );
            
            console.log("Form Submitted Successfully!", formData);
        } else {
            console.log("Form submission failed. Please correct errors.");
        }
    };
    return (
        <div className="container">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3 text-black p-2 ">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username.value}
                        onChange={username.handleChange}
                        className='border-2'
                        required
                    />
                    {username.error && <p className="error">{username.error}</p>}
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email.value}
                        onChange={email.handleChange}
                        className='border-2'
                        required
                    />
                    {email.error && <p className="error">{email.error}</p>}
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password.value}
                        onChange={password.handleChange}
                        className='border-2'
                        required
                    />
                    {password.error && <p className="error">{password.error}</p>}
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Phone Number:</label>
                    <input
                        type="number"
                        value={phoneNumber.value}
                        onChange={phoneNumber.handleChange}
                        className='border-2'
                        required
                    />
                    {phoneNumber.error && <p className="error">{phoneNumber.error}</p>}
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Address:</label>
                    <input
                        type="text"
                        className='border-2'
                        required
                    />
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Town:</label>
                    <input
                        type="text"
                        className='border-2'
                        required
                    />
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Region:</label>
                    <input
                        type="text"
                        className='border-2'
                        required
                    />
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Postcode:</label>
                    <input
                        type="number"
                        className='border-2'
                        required
                    />
                </div>
                <div className="mb-3 text-black p-2 ">
                    <label>Country:</label>
                    <input
                        type="text"
                        className='border-2'
                        required
                    />
                </div>
                <Button variant="success" type="submit">Register</Button>
            </form>
        </div>
    )
}

export default RegistrationForm

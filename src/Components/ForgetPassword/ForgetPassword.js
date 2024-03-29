import React, { useState } from 'react';
import firebase from 'firebase';
import FirebaseConfig from '../../FirebaseConfig';

if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
 }
const ForgetPassword = () => {
    const auth = firebase.auth()
    const [email,setEmail]=useState('');

    function handleOnChange(e){
        setEmail(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        auth.sendPasswordResetEmail(email)
            .then(()=> {
                alert('Please Check your email and set new password')
            })
            .catch((err)=>{
                alert(err)
            });
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-group col-sm-3 mx-auto">
                <input onChange={handleOnChange} className='form-control my-3 pl-3' placeholder='Enter a email address' type="email" name="email" id="email" required/>
                <button className='form-control btn btn-warning mb-3' type="submit">Forget Password</button>
            </form>
        </div>
    );
};

export default ForgetPassword;
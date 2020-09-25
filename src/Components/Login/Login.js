import firebase from 'firebase';
import React, { createContext,  useContext,  useState } from 'react';
import FirebaseConfig from './FirebaseConfig';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faGoogle} from '@fortawesome/free-brands-svg-icons';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { IsLoggedContext } from '../../App';

if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig);
}

const Login = () => {
    
    const [user,setUser]=useState({email:'',password:'',name:''});

    const [isLogged,setIsLogged]=useContext(IsLoggedContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    var facebookProvider = new firebase.auth.FacebookAuthProvider();

    const[newUser,setNewUser]=useState(false)

    function googleSignUp(){
        firebase.auth().signInWithPopup(googleProvider)
        .then((result)=>{
            setIsLogged(true);
            history.replace(from);
        })
        .catch(err=>{
            alert(err.message)
        })
    }
     
    function facebookLogin(){
        firebase.auth().signInWithPopup(facebookProvider)
        .then(result=>{
            setIsLogged(true);
            history.replace(from);
        })
        .catch(err=>{
            alert(err.message)
        })
    }

    function handleOnBlur(e){
        const newUserInfo={...user};
        newUserInfo[e.target.name]=e.target.value;
        setUser(newUserInfo)
        console.log(user)
    }

    function handleCreateAccount(){
        setNewUser(true);
    }
    function handleLoginAccount(){
        setNewUser(false)
    }

    function customSignIn(e){
        e.preventDefault();
        if(user.name.length<3){  //validate name for signup
            alert('Please enter your fullname')
        }
        inputValidation()

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res=>{
            setIsLogged(true)
            history.replace(from)
        })
        .catch(function(err) {
            alert(err.message);
        });
    }
    
   
    function customLogIn(e){
        e.preventDefault();
        inputValidation();
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            setIsLogged(true)
            history.replace(from)
        
        })
        .catch(err=>alert(err.message))
    }
    
    function inputValidation(){
        if(user.email<0){
            alert('Please enter a valid emil')
        }
    }
    
    return (
        
            <div id='wrapper'>
                <form className='login-form rounded' onSubmit={newUser? customSignIn :customLogIn}>
                    {newUser&&(
                        <>
                        <label htmlFor="">Name</label><br/>
                        <input onChange={handleOnBlur} className='input-field pl-2 rounded' type="name"  name="name" id="" required /><br/>
                        </>
                    )}
                    <label htmlFor="">Email</label><br/>
                    <input onChange={handleOnBlur} className='input-field pl-2 rounded' type="email"  name="email" id="" required />
                    <label htmlFor="">Password</label>
                    <input onChange={handleOnBlur} className='input-field pl-2 rounded' type="password"  name='password'  required/><br/>
                    <input type="checkbox"/><label htmlFor="" className='inline-label mr-5'>Remember Me</label> {newUser==false&&<label className='inline-label link-text' htmlFor=""><Link to='/password-forget'>Forgot Password</Link> </label>}
                    <input className='btn btn-warning px-3 mt-3 py-2 mb-2' type="submit" value={newUser?'SignUp' : 'Login'}/><br/>
                    {newUser?(
                            <><span className='mx-2'>Have an account?</span  ><span onClick={handleLoginAccount} className='link-text'>Login</span></>
                        )
                        :(
                            <><span className='mx-2'>Don't have an account?</span ><span onClick={handleCreateAccount} className='link-text'>Create an account</span></>
                        )
                    }
                </form>
                <div id='or-wrapper'>
                    <p > --------------------Or---------------------- </p>
                    <button className='google-signIn' onClick={googleSignUp}><FontAwesomeIcon  className='mr-5' icon={faGoogle}/>Continue with Google</button><br/>
                    <button className='facebook-signIn' onClick={facebookLogin}><FontAwesomeIcon className='mr-5'  icon={faFacebook} />Continue with Facebook</button>
                </div>
            </div>
        
    );
};

export default Login;
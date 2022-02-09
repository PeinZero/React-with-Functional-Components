import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


// with useReducer
function emailReducer (state, action){
  if (action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.includes('@')}
  }

  if (action.type === 'ON_BLUR'){
    return {value: state.value, isValid: state.value.includes('@')}
  }

  return {value: '', isValid: false}
}

function passwordReducer (state, action){
  if (action.type === 'USER_INPUT'){
    return {value: action.value, isValid: action.value.trim().length > 6}
  }

  if (action.type === 'ON_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }
  
  return {value: '', isValid: false}
}

const Login = (props) => {

  // with useReducer
  const [emailState, dispatchEmail] =  useReducer(emailReducer, {
    value: '', isValid: null
  })
  const [passwordState, dispatchPassword] =  useReducer(passwordReducer, {
    value: '', isValid: null
  })
  const {isValid: emailIsValid} = emailState
  const {isValid: passwordIsValid} = passwordState

  // without useReducer
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  
  const [formIsValid, setFormIsValid] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Checking form validity", emailIsValid, passwordIsValid);
      console.log(emailIsValid && passwordIsValid);
      console.log(!null);
      if(!emailIsValid){
        console.log("here");
      }
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500);

    return () => {
      console.log("CleanUp");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid]);


  // with useReducer
  const emailChangeHandler = (event) => {
    dispatchEmail({type: "USER_INPUT", value: event.target.value});
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: "USER_INPUT", value: event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "ON_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: "ON_BLUR"});
  };
  
  // without useReducer
  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(enteredEmail.includes('@'));
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    // with useReducer
    props.onLogin(emailState.value, passwordState.value);

    // without useReducer
    // props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            // with useReducer
            value={emailState.value}
            // without useReducer
            // value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid=== false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // with useReducer
            value={passwordState.value}
            // without useReducer
            // value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

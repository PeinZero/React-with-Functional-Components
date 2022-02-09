import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

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

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
    if(formIsValid){
      // with useReducer
      props.onLogin(emailState.value, passwordState.value);
      // without useReducer
      // props.onLogin(enteredEmail, enteredPassword);
    }
    else if (!emailIsValid){
      // focus the email field if form is invalid because of email.
      emailInputRef.current.focus()
    }
    else{
      // focus the password field if form is invalid because of password.
      passwordInputRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id='email'
          ref={emailInputRef}
          label='E-Mail'
          type='email'
          // with useReducer
          value={emailState.value}
          // without useReducer
          // value={enteredEmail}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id='password'
          ref={passwordInputRef}
          label='Password'
          type='password'
          // with useReducer
          value={passwordState.value}
          // without useReducer
          // value={enteredPassword}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

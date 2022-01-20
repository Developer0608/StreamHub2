import { useState } from "react";

function Signin() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  }

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }

  const onLoginHandler = () => {
    // Validate email
    if(!email.includes('@')) {
      setEmailError('Check Email')
    }
  }

  return <>
    <div className="login">

      <h1 className="login__title">Sign In</h1>
      {emailError !== '' && <span style={{color: "red"}}>*{emailError}</span>}
      <div className="login__group">
        <input className="login__group__input" id="email" type="email" value={email} onChange={emailChangeHandler}/>
        <label className="login__group__label">Email  </label>
      </div>

      <div className="login__group">
        <input className="login__group__input" id="password" type="password" value={password} onChange={passwordChangeHandler}/>
        <label className="login__group__label">Password</label>
      </div>
      <button className="login__sign-in" type="button" disabled={email === '' || password === ''} onClick={onLoginHandler}>Sign In</button>
      <div>
        <img className="icon-google" src="https://4.bp.blogspot.com/-Pp8TROoyTwc/VeXXFhKQwWI/AAAAAAAACPo/b2g71CJ_Hj8/s1600/inline-googles-new-logo.png" />
        <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Login with Google</a></div>
        <br></br> 
      </div>
      <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="/signup">Sign Up</a></div>
      <br></br>
      <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="/loginhelp">Need help?</a></div>
    </div>
  </>;
}

export default Signin;
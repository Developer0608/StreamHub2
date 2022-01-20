import { Redirect, useHistory } from "react-router-dom";

function SetPassword() {

  let history = useHistory();

  const onEmailHandler = () => {
    console.log('Redirecting...');
    return history.push('/otpvalidate');
  }

  return <>
    <div className="login">
      <h1 className="login__title">Forget Password</h1><br></br>
      <br></br>
      <p style={{color: "white"}}>We will send you an email with instructions on how to reset your password.</p>
      <div className="login__group">
        <input className="login__group__input" id="email" type="text"/>
        <label className="login__group__label">Email  </label>
      </div>
      <button className="login__sign-in" type="button" onClick={onEmailHandler}>Email Me</button>
    </div>
  </>

}

export default SetPassword;
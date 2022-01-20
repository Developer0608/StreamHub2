import { useHistory } from "react-router-dom";

function PasswordReset(){
  let history = useHistory();

  const onOtpHandler = () => {
    console.log('Redirecting...');
    return history.push('/reset-password');
  }
  
  return <>
    <div class="login">
      <h1 class="login__title">Reset Password</h1><br></br>
      <br></br>
      <p>Please use strong password</p>
      <div class="login__group">
        <input class="login__group__input" id="password" type="password" required="true"/>
        <label class="login__group__label">Password</label>
      </div>

      <div class="login__group">
        <input class="login__group__input" id="confirm-password" type="password" required="true"/>
        <label class="login__group__label">Confirm-Password</label>
      </div>
      <button class="login__sign-in" type="button" onCanPlay={onOtpHandler}>Reset Password</button>
    </div>
  </>
}

export default PasswordReset;
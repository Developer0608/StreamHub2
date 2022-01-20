import './Otp.css';

function Otp() {
  let history = useHistory();

  const onOtpHandler = () => {
    console.log('Redirecting...');
    return history.push('/reset-password');
  }

    return <>
    <div className="login">
      <h1 className="login__title">Enter OTP</h1><br></br> 
      <br></br>
      <p>Please enter otp that was sent on your gmail</p>
      <div className="login__group">
        <input className="login__group__input" id="email" type="text" required="true"/>
        <label className="login__group__label">OTP</label>
      </div>
      <button className="login__sign-in" type="button" onClick={onOtpHandler}>Check OTP</button>
    </div>
    </>
}

export default Otp;
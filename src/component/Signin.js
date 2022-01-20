function Signin() {
  return <>
    <div className="login">

      <h1 className="login__title">Sign In</h1>
      <div className="login__group">
        <input className="login__group__input" id="email" type="email" />
        <label className="login__group__label">Email  </label>
      </div>
      <div className="login__group">
        <input className="login__group__input" id="password" type="password" />
        <label className="login__group__label">Password</label>
      </div>
      <button className="login__sign-in" type="button">Sign In</button>
      <div>
        <img className="icon-google" src="https://4.bp.blogspot.com/-Pp8TROoyTwc/VeXXFhKQwWI/AAAAAAAACPo/b2g71CJ_Hj8/s1600/inline-googles-new-logo.png" />
        <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Login with Google</a></div>
      </div>
      <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="/signup">Sign Up</a></div>
      <br></br>
      <div className="login__secondary-cta"><a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="/login-help">Need help?</a></div>
    </div>
  </>;
}

export default Signin;
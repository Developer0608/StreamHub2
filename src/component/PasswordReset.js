function passwordReset(){
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
      <button class="login__sign-in" type="button" onclick="">Reset Password</button>
    </div>
  </>
}
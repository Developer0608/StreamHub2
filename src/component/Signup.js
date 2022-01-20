function Signup() {
    // Validation
    return <>
        <div className="login">

            <h1 className="login__title">Register</h1>
            <div className="login__group">
                <input className="login__group__input" id="email" type="email" />
                <label className="login__group__label" >Email  </label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="username" type="text" />
                <label className="login__group__label">Username  </label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="password" type="password" />
                <label className="login__group__label">Password</label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="password-check" type="password" />
                <label className="login__group__label">Confirm-Password</label>
            </div>

            <button className="login__sign-in" type="button">Register</button>
        </div>
    </>;
}

export default Signup;
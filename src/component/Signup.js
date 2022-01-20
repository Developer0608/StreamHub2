import { useState } from "react";

function Signup() {
    // Validation

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailError, setEmailerror] = useState('');

    const emailHandler = (e) => {
        setEmail(e.target.value);
        setEmailerror('')
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
    }

    const onSignupHandler = (e) => {
        console.log('>>>>>>>>>>>')
        
        if(!email.includes('@')){
            setEmailerror('Check Email');
        }
    }

    return <>
        <div className="signup">

            <h1 className="login__title">Register</h1>
            {emailError !== '' && <span style={{color: "red"}}>*{emailError}</span>}
            <div className="login__group">
                <input className="login__group__input" id="email" type="email" value={email} onChange={emailHandler}/>
                <label className="login__group__label" >Email  </label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="username" type="text" value={username} onChange={usernameHandler} />
                <label className="login__group__label">Username  </label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="password" type="password" value={password} onChange={passwordHandler}/>
                <label className="login__group__label">Password</label>
            </div>

            <div className="login__group">
                <input className="login__group__input" id="password-check" type="password" value={confirmPassword} onChange={confirmPasswordHandler}/>
                <label className="login__group__label">Confirm-Password</label>
            </div>

            <button className="login__sign-in" type="button" disabled={email==='' || username==='' || password === '' || confirmPassword === ''} onClick={onSignupHandler}>Register</button>
        </div>
    </>;
}

export default Signup;
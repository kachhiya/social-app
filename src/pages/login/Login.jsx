import "./login.css"
export default function Login(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginleft">
                    <h3 className="loginLogo">DIVI Social</h3>
                    <span className="loginDescription">Connect with your friends and the world around you on DIVISocial</span>
                </div>
                <div className="loginright">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton"></button>
                        <span className="loginForgot">Forgot password?</span>
                        <button className="loginRegisterButton">Create a new account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
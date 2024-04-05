export const LoginWidget = () => {
    return (
        <div className="loginForm centerY">
            <div className="form">
                <div className="title text">Log In</div>
                <div className="label text">Email</div>
                <input className="email input" type="text"></input>
                <div className="label text">Password</div>
                <input className="password input" type="text"></input>
                <div className="text button">Log In</div>
            </div>
        </div>
    )
}
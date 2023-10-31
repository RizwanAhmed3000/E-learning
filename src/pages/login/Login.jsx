import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()
    // const { isFetching, dispatch } = useContext(AuthContext)

    // function loginHandler(e) {
    //     e.preventDefault();
    //     loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    //     navigate('/')
    // }

    // console.log(user);

    return (
        <div className="login">
            <div className="textContainer">
                <h1 className="loginTitle">E-Learning app</h1>
                <p className="tagline">Welcome to the E-learning platform</p>
            </div>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="imgContainer">
                        <img src="src/assets/onlineLearing.png" alt="" className="bgImage" />

                    </div>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form > {/* onSubmit={loginHandler} */}
                            <div class="form__group field">
                                <input type="email" class="form__field" placeholder="Email" required ref={email} />
                                <label for="name" class="form__label">Email Address</label>
                            </div>
                            <div class="form__group field">
                                <input type="password" class="form__field" placeholder="Email" required minLength={8} ref={password} />
                                <label for="name" class="form__label">Password</label>
                            </div>
                            <button className="loginBtn seeMoreBtn" type="submit">Login</button> {/* {isFetching ? <CircularProgress style={{ color: "black" }} size="18px" /> : "Log in"} */}
                            <span className="forgetPassword">Forget password</span>
                        </form>
                        <Link to={'/signup'}>
                            <button style={{ marginTop: "0px" }} className="signupBtn seeMoreBtn">Create new account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

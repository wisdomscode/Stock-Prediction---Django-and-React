import { useContext, useState } from "react"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginFailed, setLoginFailed] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = {
            username, password
        }

        // console.log("UserData == ", userData);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/token/", userData)
            localStorage.setItem('stockAccessToken', response.data.access)
            localStorage.setItem('stockRefreshToken', response.data.refresh)

            // console.log(response.data);
            setIsLoggedIn(true);

            setUsername('')
            setPassword('')
            navigate('/dashboard')
        } catch (error) {
            setLoginFailed(true)
            // console.log("Login error: Invalid credentials",);

        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="contentBox p-5">

                            <h3 className="mb-4">Login</h3>
                            <form action="" onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label htmlFor="">Username</label>
                                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                </div>

                                {loginFailed && <div className="alert alert-danger mt-4">Login Failed! Invalid credentials</div>}

                                {loading ? (
                                    <button type="submit" className="btn btn-info d-block mx-auto mt-5" disabled> <FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>
                                ) : (
                                    <button type="submit" className="btn btn-info d-block mx-auto mt-5">Login</button>
                                )}


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
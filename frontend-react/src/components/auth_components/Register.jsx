import { useState } from "react"
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = {
            username, email, password
        }

        console.log("UserData == ", userData);

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/v1/register/", userData)
            console.log('Response Data == ', response.data);
            console.log("Registration is successful");

            setSuccess(true);
            setErrors({});

            setUsername('')
            setEmail('')
            setPassword('')
        } catch (error) {
            setErrors(error.response.data)
            console.log("Registration error: ", error.response.data);

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

                            <h3 className="mb-4">Create an Account</h3>
                            <form action="" onSubmit={handleRegistration}>
                                <div className="mb-3">
                                    <label htmlFor="">Username</label>
                                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" />
                                    <small>{errors.username && <div className="text-danger">{errors.username}</div>}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
                                    <small>{errors.email && <div className="text-danger">{errors.email}</div>}</small>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Password</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Email Address" />
                                    <small>{errors.password && <div className="text-danger">{errors.password}</div>}</small>
                                </div>

                                {success && <div className="alert alert-success mt-4">Registration was succssful</div>}

                                {loading ? (
                                    <button type="submit" className="btn btn-info d-block mx-auto mt-5" disabled> <FontAwesomeIcon icon={faSpinner} spin /> Please wait...</button>
                                ) : (
                                    <button type="submit" className="btn btn-info d-block mx-auto mt-5">Register</button>
                                )}


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
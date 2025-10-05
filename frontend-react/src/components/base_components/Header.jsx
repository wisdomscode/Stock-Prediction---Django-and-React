import ButtonWidget from '../custom_widgets/ButtonWidget'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-body-dark mx-5 py-4 align-items-start">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>

                                </ul>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <ButtonWidget text="Register" url="/register" class="btn-outline-info mx-3" />
                            <ButtonWidget text="Login" url="/login" class="btn-info" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
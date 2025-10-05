import { Link } from "react-router-dom"
const ButtonWidget = (props) => {
    return (
        <>
            <Link className={`btn ${props.class}`} to={props.url}>{props.text}</Link>
        </>
    )
}

export default ButtonWidget
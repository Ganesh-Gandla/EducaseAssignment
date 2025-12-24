import { Link } from "react-router-dom";
import { useContext } from "react";
import PageContext from "../context/PageContext";

function LandingPage() {

    const { pages, setPageIndex } = useContext(PageContext)

    function handleClick(page) {
        setPageIndex(pages.indexOf(`${page}`))
    }
    return (
        <div className={"container"}>
            <div className={"landing"}>
                <h1 className="text heading">Welcome to PopX</h1>
                <p className="text description">Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit.</p>
                <Link to={"/signup"}><button onClick={e => {handleClick("signup")}} className="btn create-btn">Create Account</button></Link>
                <Link to={"/login"}><button onClick={e => {handleClick("login")}} className="btn login-btn">Already Registered? Login</button></Link>
            </div>
        </div>
    )
}

export default LandingPage;
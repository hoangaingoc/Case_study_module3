import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {MyContext} from "../MyContext";

export default function NavBar() {
    let {currentUser, setCurrentUser} = useContext(MyContext);
    let navigate = useNavigate();

    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/');
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={'/user'}>Home<span
                                        className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={'/admin/cart'}>Cart</Link>
                                </li>
                            </ul>
                            {!currentUser ? (
                                <>
                                    <button className="btn btn-outline-primary mr-2">
                                        <Link to={'/'}>Login</Link>
                                    </button>
                                    <button className="btn btn-outline-primary mr-2">
                                        <Link to={'/register'}>Register</Link>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className="navbar-text mr-3">
                                        {currentUser.user && currentUser.user.username}
                                    </span>
                                    <button className="btn btn-outline-danger mr-2" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
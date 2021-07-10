import { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../auth.class';

const Header = ({searchFur}) => {
    const [search, setSearch]= useState("");

    const checkLogin = () => {
        let result = <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">Account<b className="caret"></b></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </li>
        if(auth.isAuthenticated() || localStorage.getItem("admin")) {
            let account = JSON.parse(localStorage.getItem("admin"))
            result = <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">${account.username}<b className="caret"></b></Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/" onClick={() => logout()}>Logout</Link></li>
                        </ul>
                    </li>
        }
        return result;
    };

    const logout = () => {
        auth.logout(() => {
            if(!auth.isAuthenticated()) {
                localStorage.removeItem("admin");
            };
        });
    };

    const searchItem = () => {
        searchFur(search);
    };

    return (
        <div className="Header">
            <nav className="navbar navbar-default" role="navigation">
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li><Link to="/store-management">Store Manager</Link></li>
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Input Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => searchItem()}>Search</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        {checkLogin()}
                        <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span></Link></li>
                    </ul>
                </div>
            </nav>            
        </div>
    );
};

export default Header;
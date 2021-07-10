import { useState } from 'react';
import auth from '../../auth.class';

const Login = ({history}) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = (e) => {
        e.preventDefault();
        let admin = {
            username,
            password
        };
        if(username === "admin" && password === "admin") {
            localStorage.setItem("admin", JSON.stringify(admin));
            if(localStorage.getItem("admin")) {
                auth.login(() => {
                    if(username === "admin" && password === "admin") {
                        localStorage.setItem("admin", JSON.stringify(admin));
                        history.push("/store-management");
                    };
                });
            };
        }else {
            alert("Please try again");
        };
    };

    return (   
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading"></div>
                        <div className="panel-body">
                            <form>
                                <legend>Form Login</legend>
                            
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                            
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            
                                <button type="submit" className="btn btn-primary" onClick={(e) => login(e)}>
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    );
};

export default Login;
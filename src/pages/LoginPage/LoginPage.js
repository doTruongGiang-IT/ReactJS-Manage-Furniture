import React from "react";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";

const LoginPage = ({history}) => {
    return (
        <div className="LoginPage">
            <Header />
            <Login history={history} />
        </div>
    );
};

export default React.memo(LoginPage);
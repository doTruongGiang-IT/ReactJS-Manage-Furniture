import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import authClass from '../../auth.class';

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            if(authClass.isAuthenticated() || localStorage.getItem("admin")) {
                return <Component {...props} />
            }else {
                <Redirect to={{
                    pathname: props.history.goBack(),
                    state: {
                        from: props.location
                    }
                }} />
            };
        }} />
    );
};

export default ProtectedRoute;

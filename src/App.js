import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './appRoutes';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function renderRoutes(routes) {
  let result = '';
  if(routes.length > 0) {
    result = routes.map((route, index) => {
      if(route.path === "/store-management") {
        return <ProtectedRoute key={index} path={route.path} exact={route.exact} component={route.main} />
      };
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    });
  }
  return result;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { APP_ROUTES } from "./approutes";
import LoginForm from "../Components/Authentication/Login";
import ForgotForm from "../Components/Authentication/ForgotPassword";
import Dashboard from "../Components/Pages/Dashboard";

const PageRouting = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={APP_ROUTES.LOGINFORM} component={LoginForm} />
        <Route path={APP_ROUTES.FORGOTFORM} component={ForgotForm} />
        <Route path={APP_ROUTES.DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export { PageRouting };

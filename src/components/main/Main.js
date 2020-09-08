import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Tasks from "../../pages/Tasks";
import Form from "../form/Form";
import PublicRoute from "../routes/PublicRoute";
import PrivateRoute from "../routes/PrivateRoute";
import routes from "../routes";

const Main = () => {
  return (
    <Suspense fallback={<h2>loading...</h2>}>
      <Switch>
        {routes.map((route) =>
          route.private ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          )
        )}
        {/* <PublicRoute exact path="/" component={Home} />
      <PrivateRoute path="/tasks" component={Tasks} />
      <Route path="/signin" component={Form} />
      <Route path="/signup" component={Form} /> */}
      </Switch>
    </Suspense>
  );
};

export default Main;

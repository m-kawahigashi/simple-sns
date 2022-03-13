import React, { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";

export const Router : VFC = memo(() => {
    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})
import React from 'react';
import {WelcomeSlide} from "./slides/WelcomeSlide";
import {WhyTddSlide} from "./slides/WhyTddSlide";
import {TddRulesSlide} from "./slides/TddRulesSlide";
import {Redirect, Route, Switch} from "react-router";

export function PresentationMain() {
    return (
        <main>
            <Switch>
                <Route path="/welcome" component={WelcomeSlide}/>
                <Route path="/why-tdd" component={WhyTddSlide}/>
                <Route path="/tdd-rules" component={TddRulesSlide}/>
                <Redirect from="/" to="/welcome"/>
            </Switch>
        </main>
    )
}
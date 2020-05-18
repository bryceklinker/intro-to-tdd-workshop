import React from 'react';
import {WelcomeSlide} from "./slides/WelcomeSlide";
import {WhyTddSlide} from "./slides/WhyTddSlide";
import {TddRulesSlide} from "./slides/TddRulesSlide";
import {Redirect, Route, Switch} from "react-router";

export function PresentationMain() {
    return (
        <main>
            <Switch>
                <Route path="/intro-to-tdd-workshop/welcome" component={WelcomeSlide}/>
                <Route path="/intro-to-tdd-workshop/why-tdd" component={WhyTddSlide}/>
                <Route path="/intro-to-tdd-workshop/tdd-rules" component={TddRulesSlide}/>
                <Redirect from="*" to="/intro-to-tdd-workshop/welcome"/>
            </Switch>
        </main>
    )
}
import React from 'react';
import {Switch, Route, Redirect }from 'react-router-dom';
import { WelcomeSlide } from './slides/WelcomeSlide';
import { WhyTddSlide } from './slides/WhyTddSlide';
import { TddRulesSlide } from './slides/TddRulesSlide';

export function PresentationApp() {
    return (
        <div>
            <Switch>
                <Route path="/welcome" component={WelcomeSlide} />
                <Route path="/why-tdd" component={WhyTddSlide} />
                <Route path="/tdd-rules" component={TddRulesSlide} />
                <Redirect from="/" to="/welcome" />
            </Switch>
        </div>
    ) 
}
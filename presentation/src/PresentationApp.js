import React from 'react';
import {Switch, Route, Redirect} from 'react-router';
import {WelcomeSlide} from './slides/WelcomeSlide';
import {WhyTddSlide} from './slides/WhyTddSlide';
import {TddRulesSlide} from './slides/TddRulesSlide';
import {PresentationHeader} from "./header/PresentationHeader";
import {PresentationFooter} from "./footer/PresentationFooter";

import './PresentationApp.scss';

export function PresentationApp() {
    return (
        <div className={'presentation'}>
            <PresentationHeader/>
            <main>
                <Switch>
                    <Route path="/welcome" component={WelcomeSlide}/>
                    <Route path="/why-tdd" component={WhyTddSlide}/>
                    <Route path="/tdd-rules" component={TddRulesSlide}/>
                    <Redirect from="/" to="/welcome"/>
                </Switch>
            </main>
            <PresentationFooter/>
        </div>
    )
}
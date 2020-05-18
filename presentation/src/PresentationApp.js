import React from 'react';

import './PresentationApp.scss';
import {PresentationHeader} from "./header/PresentationHeader";
import {PresentationMain} from "./main/PresentationMain";
import {PresentationFooter} from "./footer/PresentationFooter";

export function PresentationApp() {
    return (
        <div className={'presentation'}>
            <PresentationHeader/>
            <PresentationMain />
            <PresentationFooter/>
        </div>
    )
}
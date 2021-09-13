import React from 'react';
import { Button } from './Button';
import './ActivitySection.css';

function ActivitySection() {
    return (
        <div className='activity-container'>
        <h1>WELCOME</h1>
        <div className="activity-btns">
            <Button className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'> JOIN THE FUN </Button>
             
              <Button className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>VIEW ACTIVITIES</Button>
        </div>
            
        </div>
    )
}

export default ActivitySection

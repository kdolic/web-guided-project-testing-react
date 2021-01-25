import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MissionForm from './MissionForm';

test("MissionForm renders without errors", ()=>{
    render(<MissionForm/>);
});

test('renders message when isFetchingData is true', ()=> {

});

test('renders the button on the isFetchingData is false', ()=>{

});

test('calls getData when the button is pressed', ()=>{

});
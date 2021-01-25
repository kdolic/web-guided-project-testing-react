import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MissionForm from './MissionForm';

test("MissionForm renders without errors", ()=>{
    render(<MissionForm/>);
});

test('renders message when isFetchingData is true', ()=> {
    //Arrange: Show MissionForm with isFetchingData = true
    render(<MissionForm isFetchingData={true}/>);

    //Act: Query for text 'we are fetching data'
    const item = screen.getByText(/we are fetching data/i);

    //Assert: 'we are fetching data' exists on the page.
});

// test('renders the button on the isFetchingData is false', ()=>{

// });

// test('calls getData when the button is pressed', ()=>{

// });
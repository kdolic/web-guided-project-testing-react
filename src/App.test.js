import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

import mockFetchMissions from './api/fetchMissions';
jest.mock('./api/fetchMissions');

test('Renders without errors', ()=> {
    render(<App/>);
});

test('Renders mission data when button is clicked', async ()=> {
    //Arrange: render app
    render(<App />);

    //Act: get data from api? and push button
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    await waitFor(()=>{
        //Assert: We should get the same amount of missions as our api returned.
        expect(screen.getAllByTestId('mission')).toHaveLength(10);
    });
});
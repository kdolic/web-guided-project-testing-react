import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Renders without errors', ()=> {
    render(<App/>);
});

test('Renders mission data when button is clicked', ()=> {
    
});
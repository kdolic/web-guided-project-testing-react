import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MissionForm from './MissionForm';

test("MissionForm renders without errors", ()=>{
    render(<MissionForm/>);
});

test('Renders message when isFetchingData is true', ()=> {
    //Arrange: Show MissionForm with isFetchingData = true
    render(<MissionForm isFetchingData={true}/>);

    //Act: Query for text 'we are fetching data'
    const item = screen.queryByText(/we are fetching data/i);

    //Assert: 'we are fetching data' exists on the page.
    expect(item).not.toBeNull();
    expect(item).toBeInTheDocument();
});

test('Renders the button on the isFetchingData is false', ()=>{
    render(<MissionForm isFetchingData={false}/>);
    const item = screen.queryByRole('button');
    expect(item).toBeInTheDocument();
});

test('calls getData when the button is pressed', ()=>{
    const otherFakeFunction = ()=>{};

    const fakeGetData = jest.fn();

    //Arrange
    render(<MissionForm isFetchingData={false} getData={otherFakeFunction}/>);

    //Act:
    const button = screen.getByRole('button');
    userEvent.click(button);

    console.log(otherFakeFunction);

    //Assert
    expect(fakeGetData.mock.calls.length).toBe(1);
    expect(fakeGetData.mock.calls).toHaveLength(1);
    expect(fakeGetData).toHaveBeenCalled();
    expect(fakeGetData).toHaveBeenCalledTimes(1);
});
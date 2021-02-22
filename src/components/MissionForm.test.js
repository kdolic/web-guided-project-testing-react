import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MissionForm from './MissionsList'

// mock functions being passed to the comp
const getDataMock = jest.fn()

test('shows loading message when button is clicked', () => {
    const {rerender} = render(<MissionForm getData={getDataMock}/>)

    // test that loading message is NOT in the UI
     expect(screen.queryByText(/we are fetching data/i)).toBeNull()

    // query for the get data button
    // click the button
    userEvent.click(screen.getByRole('button', {name: /get data/i}))

    expect(getDataMock).toHaveBeenCalled()

    rerender(<MissionForm getData={getDataMock} isFetchingData={true} />)

    // test that the loading message IS in the UI
    expect(screen.queryByText(/we are fetching data/i)).toBeInTheDocument()
})

import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionsList from "./MissionsList";



const missions = [
    {
        mission_name: "Thaicom",
        mission_id: "9D1B7E0"
    },
    {
        mission_name: "Telstar",
        mission_id: "F4F83DE"
    }
];

test('renders without errors', ()=>{
    render(<MissionsList missions={[]}/>);
});

test('renders change in missions list correctly', ()=>{
    const { rerender } = render(<MissionsList missions={[]}/>);

    let missionObjects = screen.queryAllByTestId('mission');
    expect(missionObjects).toStrictEqual([]);
    expect(missionObjects).toHaveLength(0);

    rerender(<MissionList mission={missions}/>);


});
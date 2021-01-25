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
    render(<MissionsList missions={missions}/>);
});
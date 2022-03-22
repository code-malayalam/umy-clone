import React from 'react';
import TopBar from '../components/TopBar';
import { Outlet } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <TopBar />
            <Outlet />
        </div>
    )
}

import React from 'react';
import './App.css';
import Button from './Component/Button';
import Sidebar from './Component/Sidebar';
import Mainpage from'./Component/Mainpage';
function App() {
    return (
        <div>
            <Button />
            <Sidebar />
            <Mainpage/>
        </div>
    );
}

export default App;


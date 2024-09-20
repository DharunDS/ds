import React, { useState } from "react";
import profile from "./downloade.jpg"; // Ensure this path is correct
import './Sidebar.css'; 

function Slidebar() {
    const [theme, setTheme] = useState("light");
    const [number, setNumber] = useState(0);

    function changeTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    function add() {
        setNumber(prevNumber => prevNumber + 1);
    }

    function reset() {
        setNumber(0);
    }

    return (
        <div className={`side ${theme}`}>
            <img className="pro" src={profile} alt="Profile of Dharun" />
            <h1 className="name">Dharun</h1>
            <p className="para">
                React is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js.
            </p>
            <button className="contact" aria-label="Contact Dharun">Contact</button>
            <button onClick={changeTheme} aria-label="Toggle Theme">Toggle Theme</button>
            <button onClick={add} aria-label="Increment counter">+</button>
            <button onClick={reset} aria-label="Reset counter">Reset</button>
            <h1 className="theme">{theme} {number}</h1>
        </div>
    );
}

export default Slidebar;

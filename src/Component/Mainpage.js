import React, { useState } from "react";

function Main() {
    const [input, setInput] = useState(""); 
    const navlist = [
        { title: "about" },
        { title: "skills" },
        { title: "experiments" },
    ];
    const[data,setData]=useState(navlist)

    function onFormSubmit(e) {
        e.preventDefault();
        setData([...data,{title:input}])
        console.log(input);
    }

    return (
        <div className="sidebar">
            {navlist.map((val, index) => {
                 return   <button>
                    {val.title}
                </button>
})}
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text" onChange={(e) => setInput(e.target.value)}
                    value={input} 
                />
                <input type="submit" />
            </form>
            {input}
        </div>
    );
}

export default Main;


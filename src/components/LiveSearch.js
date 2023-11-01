import React, { useEffect, useState } from "react";


const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const LiveSearch = () => {

    const [allFruits, setAllFruits] = useState(fruits);
    const [search, setSearch] = useState("");

    useEffect(() => {
       setAllFruits(fruits.filter(fruit => fruit.toLowerCase().includes(search.toLowerCase().trim())));
    }, [search])

    function handleInput(event)
    {
        setSearch(event.target.value);
    }

    return(
        <div>
            <input type="text" onChange={handleInput}/>
            {
                <ul>
                    {
                        allFruits.map((fruit) =>
                        <li>{fruit}</li> )
                    }
                </ul>  
            }
        </div>
    )
}

export default LiveSearch;
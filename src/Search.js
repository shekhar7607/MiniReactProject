import React, { useState } from 'react';
// import Developer from './Developer';
// import DeveloperList from './DeveloperList';

const Search = (props) => {

    const DeveloperListArray = [
        {
            id:1,
            name:"Lisa",
            work:"FRONT-END DEVELOPER"
        },
        {
            id:2,
            name:"Haydon",
            work:"CONTENT DEVELOPER"
        },
        {
            id:3,
            name:"Clark",
            work:"FULL STACK DEVELOPER"
        },
        {
            id:4,
            name:"Smith",
            work:"BACKEND DEVELOPER"
        },
        {
            id:5,
            name:"Smith",
            work:"BACKEND DEVELOPER"
        },
        {
            id:6,
            name:"Parker",
            work:"CEO"
        },
        {
            id:7,
            name:"Princi",
            work:"HR"
        },
        {
            id:8,
            name:"Zeus",
            work:"Business Analyst"
        }
    ];
    
    const [searchTerm, setSearchTerm] = useState("");
    return <div className="Dev">
    <input type="text" placeholder="Search..." onChange={(event) => {
        setSearchTerm(event.target.value)
    }}
     />
     
    {DeveloperListArray.filter((val)=>{
        if(searchTerm ===""){
            return val
        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
        }
        return true
    }).map((val,key) =>  {
        return <div className="worker" key="key">
            <p>{val.name}</p>
            </div>
    })}
    
</div>
}

export default Search;
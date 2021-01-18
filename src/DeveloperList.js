import React from 'react';

const DeveloperList = (props) => {
    return (
                <div className="developerStyle ma4 bg-light-purple dib pa3 tc grow">
                    <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Developer" />
                    <h1>{props.name}</h1>
                    <p>{props.work}</p>
                </div>
             
    )
}

export default DeveloperList;
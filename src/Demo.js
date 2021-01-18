import React from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = (props) => {
    return <div className="main_div"> 
                <h1> Hello {props.name} </h1>
                <p>Welcome to my new website</p>
               </div>
}


// class Demo extends Component{
//     render()
//     {
//         return <div className="main_div"> 
//                 <h1> Hello {this.props.name} </h1>
//                 <p>Welcome to my new website</p>
//                </div>
//     }

// }

export default Demo;
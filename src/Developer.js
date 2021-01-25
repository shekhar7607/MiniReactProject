import React,{Component} from 'react';
import './Developer.css';
import DeveloperList from './DeveloperList';
import 'tachyons';
import Search from './Search';
// import Video from './Video';


// const Developer = (props) => {

class Developer extends Component{

    constructor(){
        super();
        this.state = {
            name : "Welcome to Developers World",
            term: "Developer",
            h:"bvc",

        }

    }

    namechange(){
        this.setState({
            name:"Developed by Swami Shekhar using React JS",
            

        })
    }

    

    render(){
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

        
    
       const developercardo = DeveloperListArray.map((developercard,i) =>{
           return  < DeveloperList key={i} name={DeveloperListArray[i].name} work={DeveloperListArray[i].work} />
       }
    
       )

     
    //   const t = function bolo()
    //    {
    //        var p = document.getElementById("23").value;
    //        document.getElementById("123").innerHTML = p;
    //    }



       
      
    
    
    return  (      
                    <div className="mainpage  nbv">
                            <h1 className="tc grow">{this.state.name}</h1>
                            {developercardo}
                            <br/>
                            <button onClick={ () => this.namechange()} className="grow"  >Created By</button> 
                            <br></br>
                            <br></br>
                    
                            <Search />
                            
                    </div>
                            
                       

    )
    }
}





export default Developer;
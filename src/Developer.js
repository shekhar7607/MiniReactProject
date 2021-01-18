import React,{Component} from 'react';
import './Developer.css';
import DeveloperList from './DeveloperList';
import 'tachyons';
// import Video from './Video';


// const Developer = (props) => {

class Developer extends Component{

    constructor(){
        super();
        this.state = {
            name : "Welcome to Developers World",
            term: "Developer",
            h:"bvc"
        }

    }

    namechange(){
        this.setState({
            name:"Developed by Swami Shekhar using React JS"
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

    
       const developercard = DeveloperListArray.map((developercard,i) =>{
           return  < DeveloperList key={i} name={DeveloperListArray[i].name} work={DeveloperListArray[i].work} />
       }
    
       )

    //    const age =[
    //        {
    //            id:20,
    //            name:"Parul",
    //            loves:"Shekhar"
    //        },
    //        {
    //         id:21,
    //         name:"Shekhar",
    //         loves:"Parul"
    //     },
    //     {
    //         id:22,
    //         name:"Rizwan"
    //     }

    //    ];
       
    //    const index = age.findIndex(function(ageL,name){
    //        return ageL.name === 'Rizwan';
    //    });

    //    console.log(index);
     
    //    const findName = function(ageL,name){
    //        const index = ageL.findIndex(function(ageLD,index){
    //            return ageLD.name.toLowerCase() === name.toLowerCase();
    //        })
    //        return ageL[index].loves;
    //    }
        
    //    let printme = findName(age,'Parul')
    //    console.log(printme);
        

    //    const findDeveloper = function(developerName,name){
    //        const index = developerName.findIndex(function(developerlist){
    //                 return developerlist.name.toLowerCase() === name.toLowerCase();
    //        })
    //        return developerName[index].work;
    //    }
    //    let print_work = findDeveloper(DeveloperListArray,'LISA')
    //    console.log(print_work);


    

       const find_ceo = function(developerName,work){
           const index = developerName.findIndex(function(developerlist){
            return developerlist.work.toLowerCase() === work.toLowerCase();
        })
           return developerName[index].name;
       }
       

        let ceo_name = find_ceo(DeveloperListArray,'ceo');
       console.log("The ceo of the company is "+ ceo_name);

    
    return  (      
                    <div className="mainpage  nbv">
                            <h1 className="tc grow">{this.state.name} loves </h1>
                            {developercard}
                            <br/>
                            <button onClick={ () => this.namechange()} className="grow"  >Created By</button> 
                            <br></br>
                            <br></br>
                            <input type="text" placeholder="Search Developer" id="23"/>
                            <button>Search {this.state.term}</button>
                    </div>
                            
                       

    )
    }
}





export default Developer;
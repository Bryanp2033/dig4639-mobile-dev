import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import './index.css';


class Remove extends Component {


    constructor(props){
        super(props);

        this.state = {
            position:"",
            contacts: []
        }
    }




    componentDidMount(){

        window.fetch("http://plato.mrl.ai:8080/contacts",
        {headers: {API: "porras"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({contacts: data.contacts});
        });
    }


    removeContact(){
        
            const url = "http://plato.mrl.ai:8080/contacts/remove";
            const data = this.state;
            const number = data.position - 1;

            console.log("FIRST DATA: ", data.position)

            // this.componentDidMount();
            // console.log(this.state.contacts)

            fetch(url, {
                method: "POST",
                headers: {
                    "API": "porras",
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(number)
            }).then((result)=>{
                console.log("DATA", result)
                result.json().then((resp)=>{
                    console.warn("resp", resp);
                    console.log("DATA", result);
                })
            })
        
    }



    render(){
        return(

            <div>
                <h1>Remove a Contact</h1>

                    {
                    <div>
                        <input type="text" value={this.state.position} name="position"
                        onChange={(data)=>{this.setState({position: data.target.value})}}/><br></br>
                        <button onClick={()=>{this.removeContact()}}>Submit</button>
                     </div>
                    }
            </div>
        )
    }
}

export default Remove;
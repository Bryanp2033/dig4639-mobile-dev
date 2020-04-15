import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import './index.css';


class Add extends Component {

    constructor(props){
        super(props);

        this.state = {
            name:"",
            number:""
        }
    }

    addContact(){
        const url = "http://plato.mrl.ai:8080/contacts/add"
        const data = this.state;
        fetch(url, {
            method: "POST",
            headers: {
                "API": "porras",
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn("resp", resp);
                console.log(data);
            })
        })
    }

    // componentDidMount(){

    //     window.fetch("http://plato.mrl.ai:8080/contacts",
    //     {headers: {API: "porras"}})
    //     .then((res) => res.json())
    //     .then((data) => {
    //         this.setState({contacts: data.contacts});
    //     });
    // }


    render(){
        return(

            <div>
                <h1>Add a new Contact</h1>
                <input type="text" value={this.state.name} name="name"
                 onChange={(data)=>{this.setState({name: data.target.value})}}/><br></br>
                <input type="text" value={this.state.number} name="number"
                 onChange={(data)=>{this.setState({number: data.target.value})}}/><br></br>
                <button onClick={()=>{this.addContact()}}>Submit</button>
            </div>
        )
    }
}

export default Add;
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './index.css';


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
                alert("Contact added successfully");
            })
        })
    }


    render(){
        return(

            <div>
                <h1 className="title">Add a new Contact</h1>
                <Link className="profile-nav-link"to='/contacts'>Go Back</Link>
                <div className="form">
                    <input  className="form-content" placeholder="Name" type="text" value={this.state.name} name="name"
                    onChange={(data)=>{this.setState({name: data.target.value})}}/><br></br>
                    <input className="form-content" placeholder="Number" type="text" value={this.state.number} name="number"
                    onChange={(data)=>{this.setState({number: data.target.value})}}/><br></br>
                    <button className="form-submit" onClick={()=>{this.addContact()}}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Add;
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './index.css';


class Remove extends Component {


    constructor(props){
        super(props);

        this.state = {
            position:""
        }
    }


    removeContact(){
        
            const url = "http://plato.mrl.ai:8080/contacts/remove";
            const data = this.state;

            console.log("FIRST DATA: ", data)

            fetch(url, {
                method: "POST",
                headers: {
                    "API": "porras",
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(data)
            }).then((result)=>{
                console.log("DATA", result)
                result.json().then((resp)=>{
                    console.warn("resp", resp);
                    alert("Contact removed successfully");
                })
            })
        
    }



    render(){
        return(

            <div>
                <h1 className="title">Remove a Contact</h1>
                <Link className="profile-nav-link"to='/contacts'>Go Back</Link>
                    {
                    <div>
                        <div className="form">
                            <input className="form-content" type="text" placeholder="position number" value={this.state.position} name="position"
                            onChange={(data)=>{this.setState({position: data.target.value})}}/><br></br>
                            <button className="form-submit" onClick={()=>{this.removeContact()}}>Submit</button>
                        </div>
                     </div>
                    }
            </div>
        )
    }
}

export default Remove;
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './index.css';


class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {
            profile: []
        }
    }

    componentDidMount(){

        window.fetch("http://plato.mrl.ai:8080/profile",
        {headers: {API: "porras"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({profile: data});
            console.log(this.state.profile);
        });
    }


    render(){
        return(

            <div>
                <h1 className="title">Profile Page</h1>
                <Link className="profile-nav-link"to='/contacts'>Go Back</Link>
                <h2 className="title">Name: {this.state.profile.name}</h2>
                <h3 className="title">Count: {this.state.profile.count} </h3>
            </div>
        )
    }
}

export default Profile;

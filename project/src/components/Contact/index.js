import React, { Component } from 'react';
import { Link} from 'react-router-dom';
// import './index.css';


class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {contacts: []};
    }

    componentDidMount(){

        window.fetch("http://plato.mrl.ai:8080/contacts",
        {headers: {API: "porras"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({contacts: data.contacts});
        });
    }


    render(){
        return(

            <div>
                <h1>Contacts Page</h1>
                <Link to='/contacts/add'>Add New Contact</Link>
                <Link to='/contacts/remove'>Remove a Contact</Link>
                <Link to='/profile'>My Profile</Link>
                    {
                        this.state.contacts.map((value, index) => {
                            return (
                            <div>
                                <p key={index}>Name: {value.name}, Number: {value.number}</p>
                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Contact;
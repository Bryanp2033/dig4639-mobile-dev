import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './index.css';


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
                <h1 className="title">Contacts Page</h1>

                    <div className="contacts-nav">
                    <Link to='/contacts/add' className="contacts-nav-link">Add New Contact</Link>
                    <Link to='/contacts/remove' className="contacts-nav-link">Remove a Contact</Link>
                    <Link to='/profile' className="contacts-nav-link">My Profile</Link>
                    </div>
                    {
                        this.state.contacts.map((value, index) => {
                            return (
                            <div className="contact-list">
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
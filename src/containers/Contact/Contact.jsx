import React, {useState} from 'react';
import './Contact.css';
import Main from '../../components/Main/Main';



const contact = () => {
    const [formData, setFormData] = useState({ subject: "", message: "" });
    const title = "Contact";

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }
}
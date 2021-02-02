import React,{useState} from 'react'
import './Connect.css'
import { Form, Button } from 'react-bootstrap';
import db from '../firebase.js';
function Connect() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

    const submitDetails = (e) => {
        e.preventDefault();

        if(name!=""&&email!=""&&message!=""){
            
            db.collection('enquiry').add({
                name:name,
                email:email,
                enquiry:message
            });

            setName('');
            setEmail('');
            setMessage('');
            alert('Query has been submitted successfully');
        }
        else {
            alert('enter all the details to submit your enquiry');
        }
    }
    return (
        <div>
            <section className="contact-us-block">
                <div className="container-fluid">
                    <div className="row">
                        <div class="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                            <Form onSubmit={submitDetails}>
                                <Form.Group>
                                    <input className="input-style" type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                                </Form.Group>

                                <Form.Group >
                                    <input className="input-style" type="email" value={email}  placeholder="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                <input  className="input-style txt-area" value={message}  as="textarea" placeholder="message"
                                onChange={(e)=>setMessage(e.target.value)}
                                />
                            </Form.Group>
    
                            {/* <input type="text" value={name} onChange={e=>setName(e.target.value)}></input> */}
                            <Button  className="btn-connect" type="submit" >
                                    send
                                 </Button>
                            </Form>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Connect
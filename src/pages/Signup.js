import '../style.css';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

function Signup() 
{
    return (
        <section id = "heading">
            <div className = "container">
                <div className = "row my-4">
                    <div className = "col-md-6">
                        <h1>Sign Up</h1>
                    </div>
                </div>
                <div className = "row my-4">
                    <div className = "col-md-6 text-left">
                            <Button href="https://curtin-mlc.tidyhq.com/public/membership_levels" target="_blank">Sign Up</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;
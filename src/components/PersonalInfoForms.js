import React, { useState } from 'react';
import { Form, Input, Button, Radio } from 'antd';


function PersonalInfoForms(props){

    return( 
        <div className="forms">
            <Form>
                <p className="forms-label">Firstname: </p>
                <Input type="text" className="text-box" onChange={e => props?.submitInfo('fname', e.target.value)}/><br />
                <p className="forms-label">Middle Name: </p>
                <Input type="text" className="text-box" onChange={e => props?.submitInfo('mname', e.target.value)}/><br />
                <p className="forms-label">Lastname:</p> 
                <Input type="text" className="text-box" onChange={e => props?.submitInfo('lname', e.target.value)}/><br />
                <p className="forms-label">Age: </p>
                <Input type="text" className="text-box" onChange={e => props?.submitInfo('p_age', e.target.value)}/><br />
            </Form>

        </div>  
    );

}

export default PersonalInfoForms

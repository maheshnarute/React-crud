import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';  // Update import statement
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import Employee from './Employee';
function AddEmployee() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    let history = useNavigate();

    const handaleSubmit = (e) => {
        e.preventDefault();

        const id = uuid();
        let uniqueId = id.slice(0, 8);
        let  a= name,
        b=age;

         Employee.push({Id: uniqueId, Name:a, Age:b});

        history('/');
    };

    return (
        <>
         <div>
            <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
                <FormGroup>
                    <Label for='formName'>Name:</Label>
                    <Input type='text' placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for='formAge'>Age:</Label>
                    <Input type='text' placeholder="Enter your age" required onChange={(e) => setAge(e.target.value)} />
                </FormGroup>

                <Button type='submit' onClick={(e) => handaleSubmit(e)}>
                    Submit
                </Button>
            </Form>
        </div>
   
        </>
       
    );
}

export default AddEmployee;

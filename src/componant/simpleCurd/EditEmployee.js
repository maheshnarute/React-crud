import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Employee from './Employee';

function EditEmployee() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
   
    let history= useNavigate();

    var index=Employee.map(function(e){
        return e.Id;
      }).indexOf(id);

      const handaleSubmit = (e) => {
        e.preventDefault();
        let a=Employee[index];
        a.Name=name;
        a.Age=age;
        a.Id=id;


        history('/');
    };
    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
    },[])

    return (
        <>
          <div>
            <Form className='d-grid gap-2' style={{ margin: '15rem' }}>
                <FormGroup>
                    <Label for='formName'>Name:</Label>
                    <Input type='text' placeholder="Enter your name" required  value={name}
                    onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for='formAge'>Age:</Label>
                    <Input type='text' placeholder="Enter your age" required value={age}
                     onChange={(e) => setAge(e.target.value)} />
                </FormGroup>

                <Button type='submit' onClick={(e) => handaleSubmit(e)}>
                    update
                </Button>
            </Form>
        </div>
        </>
    );
}

export default EditEmployee;

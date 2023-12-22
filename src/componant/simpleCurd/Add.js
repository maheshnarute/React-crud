import React  ,{useEffect, useState}from 'react'
import {Button, Form} from "reactstrap";
import{ v4 as uuid} from "uuid";
import {Link, useNavigate}from "react-router-dom";
import Employee from './Employee';
function Add() {
    const [name ,setName]=useState();
    const[age , setAge]=useState();
    let history= useNavigate();
    const handaleSubmit=(e)=>{
        e.preventDefault();

        const ids= uuid;
        let  uniquid=ids.slice(0,8);

        let a=name,
        b=age;
        Employee.push({id: uniquid, name:a, age:b})
        history('/')
    }
  return (
    <div>
        <Form className='d-grid gap-2' style={{margin: "15rem"}}>
            <Form.Group className="mb-3" ControlId='formname'>
                <Form.Control type='text' placehoder="enter your name" required onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" ControlId='formage'>
                <Form.Control type='text' placehoder="enter your age" required onChange={(e)=>setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button type='submit'
            onClick={(e)=>handaleSubmit(e)}>

            </Button>
           
           
        </Form>
    </div>
  )
}

export default Add
import React from 'react'
import { Button,Table } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Employee from "./Employee";
import {Link,useNavigate} from 'react-router-dom';
function Home() {
  let history= useNavigate();

  const handleDelete=(id)=>{
    var index=Employee.map(function(e){
      return e.Id;
    }).indexOf(id);
    Employee.splice(index,1);
    history('/')
  }
  const handleEdit=(id, name, age)=>{
      localStorage.setItem('Name', name)
      localStorage.setItem('Age', age)
      localStorage.setItem('Id', id)


  }
  return (
    <>
    <div style={{margin:"10rem"}}>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
            
               <th>
                Name
               </th>
               <th>
                Age
               </th>
               <th>
                Actions
               </th>
            </tr>
          </thead>
          <tbody>
            {
              Employee && Employee.length>0
              ?
              Employee.map((item)=>
              {
                return(
                  <tr>
                    <td>
                      {item.Name}
                    </td>
                    <td>
                      {item.Age}
                    </td>
                    <td>
                      <Link to={`/edit`}>
                      <Button 
                      onClick={()=>handleEdit(item.Id,item.Name,item.Age)}>
                        EDIT
                      </Button>
                      </Link>
                      &nbsp;
                      <Button 
                      onClick={()=>handleDelete(item.Id)}>
                        DELETE
                      </Button>
                      
                      
                    </td>
                  </tr>

                )
              }):' '
            }
          </tbody>
        </Table>
        <br></br>
        <Link className='d-grid gap-2' to="/create">
          <Button  size='lg'>
            Create
            </Button>
        </Link>
    </div>
    </>
  )
}

export default Home
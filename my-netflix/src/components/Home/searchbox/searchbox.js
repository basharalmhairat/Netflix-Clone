import { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
// import './searchbox.css';


function SearchBox({setData}) {
  const [search, setSearch] = useState("");
  const handleFilter = async(event)=>{
     event.preventDefault();
     try{
        const result = await axios.get(`https://bashar-abb.herokuapp.com/search`);
        setData(result.data);
     
      } catch(err){
        console.log(err);
     }

  }

  return (
    <>
      <Form className="form" onSubmit={handleFilter} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control value={search} type="text" placeholder="Search" 
            onChange={(event)=> {
              setSearch(event.target.value)
            }
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </>
  )
}

export default SearchBox;
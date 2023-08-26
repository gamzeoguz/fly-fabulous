import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/flights");
    }
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
 
  };
  console.log(query);
  
  return (
    <section className="search">
      <Container>
        <Row className="align-items-center">
    <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="From" onChange={(e)=>setQuery(e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="To" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="date" placeholder="Depart" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="date" placeholder="Return" />
                    </Col>    
                    <Row>            
                    <Col size={12} sm={6} className="px-1">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Passenger(s)
                    </Dropdown.Toggle>
                    <Dropdown.Menu id='dropdown-menu'>
                      <Dropdown.Item>Adult</Dropdown.Item>
                      <Dropdown.Item>Student</Dropdown.Item>
                      <Dropdown.Item>Child</Dropdown.Item>
                      <Dropdown.Item>Baby</Dropdown.Item>
                      <Dropdown.Item>Over 65 years</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                    </Col> 
                    </Row> 
                    <Row>            
                    <Col size={12} sm={6} className="px-1">
                      <button className='ticket'>One Way</button>
                    </Col>
                    <Col>
                    <button className='ticket'>Return Ticket</button><br></br>
                    </Col>
                    </Row> 
                    <Col size={12} className="px-1">
                      <button type="submit"><span>Search Flights</span></button>
                    </Col>
                  </Row>
                </form>
                </Row>
                </Container>
                </section>
  )
}

export default Search
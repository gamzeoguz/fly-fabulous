import React from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import SearchResults from './SearchResults';
import SearchResults2 from './SearchResults2';

function Search() {
  const [query, setQuery] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: ""
  });
  
  const [queryResults, setQueryResults] = useState([])
  const [queryResults2, setQueryResults2] = useState([])
  
  const [buttonClicked, setButtonClicked] = useState(false)

  const fetchData = async (category, value) => {
    fetch("http://localhost:5000/countries")
    .then((res) => res.json())
    .then((data) => {
      const results = data.filter((country) => {
        return (value && country && country.country && country.country.toLowerCase().includes(value) && category==="from") || (value && country && country.code && country.code.toLowerCase().includes(value) && category==="from");
      });
      const results2 = data.filter((country) => {
        return (value && country && country.country && country.country.toLowerCase().includes(value) && category==="to") || (value && country && country.code && country.code.toLowerCase().includes(value) && category==="to");
      });
      setQueryResults(results);
      setQueryResults2(results2);
    })
 }

 const onChange = (category, value) => {
  setQuery({
    ...query,
    [category]: value
  })
  fetchData(category, value);
}

  function oneWay () {
    setButtonClicked(true);
  }
  function returnTicket () {
    setButtonClicked(false);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
 
  };
  
  return (
    <section className="search">
      <Container>
        <Row className="align-items-center">
    <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="from" placeholder="From" value={query.from} onChange={(e)=>onChange('from', e.target.value)} required />
                      <SearchResults queryResults={queryResults} onChange={onChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" id="to" placeholder="To" value={query.to} onChange={(e)=>onChange('to', e.target.value)} required/>
                      <SearchResults2 queryResults2={queryResults2} onChange={onChange} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="date" placeholder="Depart" min="2023-09-01"
                      max="2024-04-20" value={query.depart} onChange={(e)=>onChange('departDate', e.target.value)} required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                    {buttonClicked ? ( <p></p> ) : (  
                      <input type="date" placeholder="Return" min="2023-09-01"
                      max="2024-04-20" value={query.return} onChange={(e)=>onChange('returnDate', e.target.value)}/>)}
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
                      <button className='ticket' onClick={oneWay}>One Way</button>
                    </Col>
                    <Col>
                    <button className='ticket' onClick={returnTicket} >Return Ticket</button><br></br>
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
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import company from '../assets/images/company.jpg'

function About() {
  return (
    <>
    <Navigation />
    <section className='about' id='about'>
      <Container>
        <Row className="align-items-center">
          <h1>About Us</h1>
          <Col xs={12} md={6} xl={5}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti facilis distinctio adipisci placeat culpa quibusdam est repudiandae ipsum ipsam nostrum minus pariatur quod nihil repellendus, odit consequuntur ad id.</p>
          </Col >
          <Col xs={10} md={6} xl={5}>
            <img src={company} alt='Company'/>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default About
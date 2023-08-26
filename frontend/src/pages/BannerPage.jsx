import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import banner from '../assets/images/output-onlinegiftools.gif' 
import Navigation from '../components/Navigation'
import Search from '../components/Search'

function BannerPage() {
  return (
    <>
    <Navigation />
    <section className='banner' id='home'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
          <h1>Fly Fabulous</h1>
            <p>Where you can easily search, filter flights in a few minutes</p>
          <Search />
          </Col >
          <Col xs={10} md={6} xl={5}>
            <img src={banner} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default BannerPage
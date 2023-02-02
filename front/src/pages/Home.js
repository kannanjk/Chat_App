import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import './Home.css'

function home() {
    return <Row>
        <Col md={6} className="d-flex-direction-column align-items-center justify-content-center">
        <div>
            <h1>Shere the world with your friends</h1>
            <p>Chat app lets you connect with the world</p>
            <LinkContainer to="/chat">
                <button variant="success">
                    Get Started    <i className='fas fa-comments home-message-icon'></i>
                </button>
            </LinkContainer>
        </div>
        </Col>
        <Col md={6} className="home__bg">
            
        </Col>
    </Row>
}

export default home
import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import MessageForm from '../components/MessageForm'
import Saidbar from '../components/Saidbar'

function chat() {
  return (<Container>
    <Row>
      <Col md={4}>
        <Saidbar />
      </Col>
      <Col md={8}>
        <MessageForm />
      </Col>
    </Row>
  </Container>
  )
}

export default chat
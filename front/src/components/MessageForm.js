import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function MessageForm() {
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <div className='messages-output'>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={11}>
                        <Form.Group>
                            <Form.Control type='text' placeholder='your message' > </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={1}>
                        <Button variant='primary' type='submit' style={{width:"100%",backgroundColor:"orange"}} ></Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default MessageForm
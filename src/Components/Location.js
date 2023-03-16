import React, { useState } from 'react'
import { Form, Col, InputGroup, Row } from 'react-bootstrap';
import { BiLocationPlus, BiExit } from 'react-icons/bi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { AiFillLike } from 'react-icons/ai';

export default function Location() {
    return (
        <div className='location'>
            <Form>
                <Form.Group controlId="formBasicEmail" className='locin' >
                    <InputGroup hasValidation>
                        <BiLocationPlus className='search' />
                        <Form.Control
                            type="text"
                            placeholder="Add Location"
                            aria-describedby="inputGroupPrepend"
                            name="username"
                            className='loc'
                        />
                    </InputGroup>
                </Form.Group>
            </Form>
            <div className="in">
                <Row>
                    <Col xs={1}>
                        <RiErrorWarningLine />
                    </Col>
                    <Col xs={11}>
                        Your location will help us serve better and extend a personalised experience
                    </Col>
                </Row>
            </div>
            <br />
            <br />
            <br />
            <h5><AiFillLike /> Rcommended Groups </h5>


        </div>
    )
}

import React, { useState } from 'react'
import { Form, Col, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineSearch, AiFillCaretDown, AiOutlineArrowLeft } from 'react-icons/ai';
import Login from './Login';
import Signup from './Signup';

export default function Navbar() {
    const [dis1, setDisp1] = useState(false)
    const [dis2, setDisp2] = useState(false)
    const [dis3, setDisp3] = useState(false)
    const signin = () => {
        setDisp1(true)
        setDisp2(true)
    }
    const close = () => {
        setDisp1(false)
        setDisp2(false)
        setDisp3(false)
    }

    const login = () => {
        setDisp3(true)
        setDisp2(false)
    }
    const x = localStorage.getItem("group")
    const clicked = () => {
        if (localStorage.getItem("join") === "True") {
            localStorage.setItem("join", "False")
        } else {
            localStorage.setItem("join", "True")
        }
    }
    return (
        <>
            <div className='Nav'>
                <Row className='row'>
                    <Col>
                        <img src={require('../Images/logo-in.png')} className='navimg' />
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className='inp'>
                                <InputGroup hasValidation>
                                    <AiOutlineSearch className='search' />
                                    <Form.Control
                                        type="text"
                                        placeholder="Search your favourite group in AGT"
                                        aria-describedby="inputGroupPrepend"
                                        name="username"
                                        className='inpu'
                                    />
                                    <Form.Control.Feedback type="invalid">
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>{x !== undefined ?
                        <h5>Create an account <button className='but' onClick={signin}>It's Free</button><AiFillCaretDown /></h5> : <h5>{x}</h5>}
                    </Col>
                </Row>
            </div >
            {
                dis1 ? <div className='wall'>

                </div> : null
            }
            {dis3 ? <Login signin={signin} close={close} /> : null}
            {dis2 ? <Signup Login={login} close={close} /> : null}
            {dis1 ? <button className='close' onClick={close}>X</button> : null}
            <div className='navsm'>
                <div className='navb'>
                    <AiOutlineArrowLeft />
                </div>
                <div className="group">
                    <button onClick={clicked}>{x === "True" ? "Leave Group" : "Join Group"}</button>
                </div>

            </div>
        </>
    )
}

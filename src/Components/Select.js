import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { MdGroupAdd } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';
import { Col, Row, Nav, Button, Dropdown, DropdownButton } from 'react-bootstrap';

export default function Select() {
    const x = localStorage.getItem("join")
    const [click, setclick] = useState(false)
    const clicked = () => {

        if (localStorage.getItem("join") === "True") {
            localStorage.setItem("join", "False")
        } else {
            localStorage.setItem("join", "True")
        }
        setclick(!click)

    }
    return (
        <div className='select'>
            <Row className='nsmall'>
                <Col sm={12} lg={6}>
                    <Nav fill variant="tabs" defaultActiveKey="#">
                        <Nav.Item>
                            <Nav.Link href="#">All Posts (32)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Article</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Job</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Col>
                <Col md={2} className='nsmall'>

                </Col>
                <Col className='nsmall'>
                    <Button variant="light" className='btn' >Write a Post <AiFillCaretDown /></Button>
                    <Button className='btn' onClick={clicked}>{x === "True" ? (<><BiExit />Leave Group</>) : (<><MdGroupAdd className='icon' />Join group</>)}</Button>
                </Col>
            </Row>
            <br />
            <Row className='Small'>
                <Col xs={6}>
                    Post 32
                </Col>
                <Col xs={2}>
                </Col>

                <Col>
                    <DropdownButton id="dropdown-basic-button" title="Filter" variant='secondary' >
                        <Dropdown.Item href="#/action-3">All</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Education</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Meet up</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Job</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Article</Dropdown.Item>

                    </DropdownButton>
                </Col>
            </Row>
        </div>
    )
}

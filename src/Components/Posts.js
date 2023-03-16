import React from 'react'
import { Col, Row, Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { BsPencilFill, BsBriefcaseFill, BsBriefcase, BsFillShareFill, BsFillBookFill, BsCalendarDay, BsFillCalendarDateFill } from 'react-icons/bs';
import { BiLocationPlus } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';


export default function Posts(props) {
    var x = {
        "Article": [<BsPencilFill />],
        "Job": [<BsBriefcaseFill />, <BsBriefcase />],
        "Education": [<BsFillBookFill />],
        "Meetup": [<BsFillCalendarDateFill />, <BsCalendarDay />]
    }
    var post = props.posts.map((item, index) => {
        const { image, heading, pic, name, para, info1, tag, loc } = item
        return (
            <div className='post border'>
                {image && <img src={image} alt='photo' className='cardimg' />}
                <div className='info'>
                    {x[tag][0]}<span className='heading'>{tag}</span>
                    <br />
                    <Row>
                        <Col xs={9}>
                            <h4>{heading}</h4>
                        </Col>
                        <Col xs={3}>
                            <DropdownButton
                                as={ButtonGroup}
                                variant="secondary"
                                title="..."
                            >
                                <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Report</Dropdown.Item>
                                <Dropdown.Item eventKey="3">
                                    Option 3
                                </Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    {(tag === "Meetup") || (tag === "Job") ?
                        <>
                            <br />
                            <Row >
                                <Col xs={6} md={5}>
                                    {x[tag][1]}<span className="date">{info1}</span>
                                </Col>
                                <Col xs={6} md={5}>
                                    <BiLocationPlus /><span className="date">{loc}</span>
                                </Col>
                            </Row>
                        </> : null
                    }
                    {para && <p>{para}</p>}
                    {(tag === "Meetup") || (tag === "Job") ? <><br /><button className='cardbtn'>Visit Webiste</button></> : null}
                    <br />
                    <br />
                    <Row >
                        <Col md={6}>
                            <img src={pic} alt='user' className="user" />
                            <span className='Name'>{name}</span>
                        </Col>
                        <Col md={6}>
                            <div>
                                <p className='views'><AiOutlineEye />1.4k views <button className='sharebtn'><BsFillShareFill /></button></p>
                            </div>
                        </Col>
                    </Row>
                </div>

            </div >
        )
    })
    return (
        <div>
            {post}
        </div>
    )
}

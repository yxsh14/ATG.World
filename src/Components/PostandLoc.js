import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Location from './Location';
import Login from './Login';
import Posts from './Posts';
import Signup from './Signup';

export default function PostandLoc() {
    const POSTS = [{
        image: require('../Images/daniel-plan-HqBB-mXz_GY-unsplash.jpg'),
        heading: "What if famous brands had regular fonts? Meet RegularBrands!",
        para: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
        name: "Sarthak Kamra",
        pic: require('../Images/entrepreneur-startup-start-up-man-39866.jpeg'),
        tag: "Article"
    }, {
        image: require('../Images/daria-kraplak-NLMo5JXMdHY-unsplash.jpg'),
        tag: "Education",
        heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        para: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
        name: "Sarha West",
        pic: require('../Images/pexels-photo-7268848.jpeg'),
    }, {
        image: require('../Images/david-clarke-cVkfaTS2Nog-unsplash.jpg'),
        tag: "Meetup",
        heading: "Finance & Investment Elite Social Mixer @Lujiazui",
        info1: "Fri, 12 Oct, 2018",
        loc: "Ahmedabad, India",
        name: "Ronal Jones",
        pic: require('../Images/pexels-photo-9392091.jpeg'),

    }, {
        tag: "Job",
        heading: "Software Developer",
        info1: "Innovaccer Analystics Private Ltd.",
        loc: "Nodia, India",
        name: "Joseph Gray",
        pic: require('../Images/pexels-photo-6851464.jpeg'),

    }]
    return (
        <div className="Container">
            <Row>
                <Col sm={12} lg={8}>
                    <Posts posts={POSTS} />
                </Col>
                <Col md={4} className='nsmall'>
                    <Location />
                </Col>
            </Row>
        </div>
    )
}

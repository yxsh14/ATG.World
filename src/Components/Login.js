import React, { useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import Photo from './Photo';
import { useForm } from "react-hook-form";
import axios from 'axios'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [visible, setVisible] = useState(false)
    const Submit = (data) => {
        axios({
            method: "POST",
            url: "https://pacific-bastion-74814.herokuapp.com/users/signup",
            data
        }).then(res => {
            console.log(res.data);
            localStorage.setItem("user", res.data.firstName)
            localStorage.setItem("join", res.data.groupJoin)
            props.close()
        }).catch(e => {
            alert("error occour")
            console.log(e);
        })
    }
    return (
        <div className='Login border'>
            <h6 className='wlcmMsg'>Let's learn, share {"&"} inspire each other our passion for computer engineering. Sign up now</h6>
            <Row>
                <Col xs={12} lg={6} className='content' >
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit(Submit)} className='loginForm'>
                        <input
                            label="email"
                            placeholder="Email"
                            type="email"
                            {...register("email", { required: true })}
                        />
                        <div className="password">
                            <input
                                label="Password"
                                type={visible ? "text" : "password"}
                                placeholder="Password"
                                {...register("password", { required: true, minLength: { value: 8, message: "password is short" } })}
                            />
                            {visible ? <div className='visible'> <AiOutlineEye onClick={() => setVisible(!visible)} /></div> : <div className='visible'> <AiOutlineEyeInvisible onClick={() => setVisible(!visible)} /></div>}
                            {errors.password?.message}
                        </div>
                        <br />
                        <div className='flex'>
                            <Button type="submit" className='submit' >
                                Submit
                            </Button>

                            <p className='small signupIn' onClick={props.signin}>or, Create Account</p>
                        </div>
                    </form>
                    <br />
                    <button className='logo'><img src={require('../Images/download.png')} />Sign in with Facebool</button>
                    <button className='logo'><img src={require('../Images/images.png')} />Sign in with Google</button>
                    <p>Forgot Password?</p>
                </Col>
                <Col md={6}>
                    <Photo signIn={true} func={props.signin} />
                </Col>
            </Row>


        </div>
    )
}

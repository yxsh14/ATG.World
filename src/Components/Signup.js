import React, { useState } from 'react'
import axios from 'axios'
import { Col, Row, Button } from 'react-bootstrap';
import Photo from './Photo';
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export default function Signup(props) {
    const { register, handleSubmit, formState: { errors }, getValues, } = useForm();
    const [visible, setVisible] = useState(false)
    const Submit = (data) => {
        axios({
            method: "POST",
            url: "https://pacific-bastion-74814.herokuapp.com/users/add",
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
    const dis = () => {
        props.Login()
    }
    return (
        <div className='Sign border'>
            <h6 className='wlcmMsg'>Let's learn, share {"&"} inspire each other our passion for computer engineering. Sign up now</h6>
            <Row>
                <Col xs={12} lg={6} className='content'>
                    <h1>Sign Up</h1>
                    <form onSubmit={handleSubmit(Submit)} className='loginForm'>
                        <div className='name'>
                            <input
                                label="firstName"
                                placeholder="First Name"
                                type="text"
                                {...register("firstName", { required: true })}
                            />
                            <input
                                classNam='lname'
                                label="lastName"
                                placeholder="Last Name"
                                type="text"
                                {...register("lastName", { required: true })}
                            />
                        </div>
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
                        <input
                            label="Confirm Password"
                            type="password"
                            placeholder='Confirm Password'
                            {...register("confirmPassword", {
                                required: true,
                                minLength: 8,
                                validate: (value) => value === getValues("password"),
                            })}
                        />
                        <br />
                        <br />
                        <div className='flex'>
                            <Button type="submit" className='submit' >
                                Create Account
                            </Button>
                            <p className='small signupIn' onClick={props.Login}>or, Sign IN</p>
                        </div>
                    </form>
                    <br />
                    <button className='logo'><img src={require('../Images/download.png')} />Sign up with Facebool</button>
                    <button className='logo'><img src={require('../Images/images.png')} />Sign up with Google</button>
                    <p className='small'>By signing up, you agree to our Terms {"&"} conditions, Privacy policy</p>
                </Col>
                <Col md={6}>
                    <Photo func={dis} signIn={false} />
                </Col>
            </Row>


        </div >
    )
}

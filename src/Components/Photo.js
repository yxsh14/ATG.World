import React from 'react'

export default function Photo(props) {
    const { signIn } = props
    const fun = () => {
        props.func(1)
    }
    return (
        <div className='Photo'>
            {signIn ? <p className='h'>Don't have an account yet? <span className="signupIn" onClick={props.func}>Create new for free!</span></p> : <p className='h'>Already have an account? <span className="signupIn" onClick={fun}>Sign In</span></p>}
            <img src={require('../Images/Screenshot(64).png')} alt="signin Photo" />
            {signIn ? null : <p className='tnc'>By signing up, you agree to our Terms {"&"} conditions, Privacy policy</p>}
        </div>
    )
}

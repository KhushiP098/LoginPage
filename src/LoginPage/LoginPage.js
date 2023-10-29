import React, { useState } from 'react'
import Img from '../image.jpg'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'
import {Container} from '../GlobalStyle'


const LoginPage = () => {

    const [show, setShow] = useState(false);
    const [Type, setType] = useState("password");

    const [formdata, setFormdata] = useState(
        {
            loginId: "",
            password: "",
            cbox: false,
            cbox1: false,
        }
    )

    const handler = () => {
        setShow(!show);
        Type === "password" ? setType("text") : setType("password");
    }

    const SubmitHandler = (event) => {
        event.preventDefault();
        console.log(formdata);

    }

    const Handler = (event) => {

        const { name, value, checked, type } = event.target;
        setFormdata(prevformdata => {
            return {
                ...prevformdata,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    return (
        <Container>

            <div className='ImgContainer'><img src={Img} /></div>

            <div className='StyledContainer'>
                {/* <p className='para'>Login</p> */}
                <div className='para'>Login</div>
                <form className='Form' onSubmit={SubmitHandler}>

                    <div className='Styledlabel'><label htmlFor='loginId'>Login ID</label></div>
                    <input className='StyledInput' name="loginId" type="text" id="loginId" placeholder="Enter Login ID" value={formdata.loginId} onChange={(event) => Handler(event)} />

                    <div>
                        <div className='Styledlabel'> <label htmlFor='password'>Password</label></div>
                        <input className='StyledInput' name="password" type={Type} id="password" placeholder="Enter password" value={formdata.password} onChange={(event) => Handler(event)} />
                        <div className='Icon' >
                            {
                                show ? <AiFillEye onClick={() => handler()} /> : <AiFillEyeInvisible onClick={() => handler()} />
                            }
                        </div>
                    </div>

                    <div className='StyledDiv'>

                        <div>
                            <input type="checkbox" id="cbox" checked={formdata.cbox} name="cbox" onChange={(event) => Handler(event)} />
                            <label htmlFor='cbox'>Remember me</label>
                        </div>

                        <div><p className='OrangeText'>Change Password</p></div>
                    </div >


                    <div>
                        <input type="checkbox" id="cbox1" name="cbox1" checked={formdata.cbox1} onChange={(event) => Handler(event)} />
                        <label htmlFor='cbox1'>Agree to <span className='StyledSpan'>Terms & Conditions </span></label>
                    </div>

                    <button className='StyledButton'>Login</button>

                    <p className='StyledP'>Don't have an account? <span className='BottomText'>Register here</span></p>

                </form>
            </div>
        </Container>
    )
}

export default LoginPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, uploadImg } from '../fetchs/userFetch';

import Swal from 'sweetalert2';


const RegisterPage = () => {
    const navigation = useNavigate();

    const [nama, setNama] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageData, setImageData] = useState({});

    const uploadImageHandler = (e) => {
        setImageData(e.target.files[0])
    };

    const register = (imageName) => {
        const registObj = {
            nama, username, email, password,
            image: Math.round(new Date() / 1000) + '---' + imageName
        };
        registerUser(registObj);
        Swal.fire({
            icon: "success",
            title: "Register Success",
            text: "You've created an account",
            footer: "Continue to Login page to log on your account!"
        })
        navigation('/login');
    };

    const submitHandler = () => {
        const data = new FormData();
        data.append('image', imageData);
        uploadImg(data);
        register(imageData.name);
    };


    return (
        <>
            <div className='row my-3'>
                <div className='w-100 text-center'>
                    <h1>Register Form</h1>
                </div>
                <div className='w-50 mx-auto'>
                    <hr />
                    <div className='mb-3'>
                        <label>Name :</label>
                        <input className='form-control' type='text' placeholder='input nama'
                        onChange={(e) => setNama( e.target.value )} />
                    </div>

                    <div className='mb-3'>
                        <label>Username :</label>
                        <input className='form-control' type='text' placeholder='input username'
                        onChange={(e) => setUsername( e.target.value )} />
                    </div>

                    <div className='mb-3'>
                        <label>E-Mail :</label>
                        <input className='form-control' type='text' placeholder='input e-mail'
                        onChange={(e) => setEmail( e.target.value )} />
                    </div>

                    <div className='mb-3'>
                        <label>Password :</label>
                        <input className='form-control' type='password' placeholder='Password'
                        onChange={(e) => setPassword( e.target.value )} />
                    </div>
                    
                    <div className='mb-3'>
                        <label>Upload Photo :</label>
                        <input className='form-control' type='file' accept='image/png, image/gif, image/jpeg, image/jpg'
                        onChange={uploadImageHandler} />
                    </div>

                    <div className='submit-btn'>
                        <button className='btn text-add' onClick={submitHandler} >Register</button>
                    </div>

                    <div className='container text-center'>
                        <p>Already have an account ? <a href='/login'>Log In</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;
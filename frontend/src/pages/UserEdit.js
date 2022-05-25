import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../redux/Actions/userAction';
import { uploadImg } from '../fetchs/userFetch';

import Swal from 'sweetalert2';


const UserEdit = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [imageData, setImageData] = useState({});

    const { getUserDetailResult, getUserDetailLoading, getUserDetailError } = useSelector(
        (state) => state.UsersReducer
    );

    const access_token = localStorage.getItem("access_token");

    useEffect(() => {
        dispatch(getUser(access_token))
    }, [dispatch]);

    const handleImageUpload = (e) => {
        setImageData(e.target.files[0])
    };

    const editHandler = (imageName) => {
        const userObj = {
            nama, email, username, password,
            image: Math.round(new Date() / 1000) + "---" + "imageName"
        };
        dispatch(updateUser(userObj, access_token));
        Swal.fire({
            icon: "success",
            title: "Update Successfully",
            text: "Your account has been updated.."
        });
        navigation('/home/profile');
    };

    const submitHandler = () => {
        const data = new FormData();
        data.append("image", imageData);
        uploadImg(data);
        editHandler(imageData.name);
    };


    return (
        <>
            <div className='container py-4'>
                <p>UserEdit</p>
                {getUserDetailResult ? (
                    <form>
                        <div className='form-group py-3'>
                            <label for='nama'>Nama</label>
                            <input className='form-control' type='text' value={getUserDetailResult.nama}
                                onChange={(e) => setNama(e.target.value)} />
                        </div>
                        <div className='form-group py-3'>
                            <label for='email'>Email</label>
                            <input className='form-control' type='email' value={getUserDetailResult.email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='form-group py-3'>
                            <label for='usename'>Username</label>
                            <input className='form-control' type='text' value={getUserDetailResult.username}
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='form-group py-3'>
                            <label for='password'>Password</label>
                            <input className='form-control' type='password' value={getUserDetailResult.password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='form-group py-3'>
                            <label for='image'>Upload Photo</label>
                            <input className='form-control' type='file' accept='image/png, image/jpeg, image/jpg, image/gif'
                                onChange={handleImageUpload} />
                        </div>
                        <div className='submit-btn'>
                            <button className='btn text-add' onClick={submitHandler} >Update</button>
                        </div>
                    </form>
                ) :
                    getUserDetailLoading ? (
                        <p>Loading ...</p>
                    ) :
                        getUserDetailError ? (
                            getUserDetailError
                        ) : (
                            "User is empty"
                        )
                }
            </div>
        </>
    )
}

export default UserEdit
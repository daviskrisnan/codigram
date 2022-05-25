import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/Actions/userAction";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";


const UserProfile = () => {
    const navigation = useNavigate();

    const { getUserDetailResult, getUserDetailLoading, getUserDetailError } = useSelector(
        (state) => state.UsersReducer
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(localStorage.getItem("access_token")))
    }, [dispatch])
    return (
        <>
            <div className="my-3">
                <h4>Account</h4>
                {getUserDetailResult ? (
                    <div className="row my-3">
                        <div className="col">
                            <div style={{ width: "25vw", height: "50vh" }}>
                                <img src={require(`../assets/images/${getUserDetailResult.image}`)}
                                    style={{ height: "16rem" }} />
                            </div>
                        </div>
                        <div className="col">
                            <div style={{ width: "50vw", height: "50vh" }}>
                                <div className="row">
                                    <div className="col-4">
                                        <h5>User Information</h5>
                                    </div>

                                    <div className="col">
                                        <button style={{ border: 0, backgroundColor: 'transparent' }}
                                            onClick={() => navigation('/home/editUser')}>Edit</button>
                                    </div>
                                    <hr />
                                </div>

                                <div className="row">
                                    <div className="col-sm-2">
                                        <h5>Nama :</h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>{getUserDetailResult.nama}</p>
                                    </div>

                                    <div className="col-sm-2">
                                        <h5>Email :</h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>{getUserDetailResult.email}</p>
                                    </div>

                                    <div className="col-sm-2">
                                        <h5>Username :</h5>
                                    </div>
                                    <div className="col-sm-4">
                                        <p>{getUserDetailResult.username}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    getUserDetailLoading ? (
                        <p>Loading ...</p>
                    ) :
                        getUserDetailError ? (
                            <p>{getUserDetailError ? getUserDetailError : 'Empty'}</p>
                        ) : (
                            console.log('check data')
                )}
            </div>
        </>
    )
}


export default UserProfile;
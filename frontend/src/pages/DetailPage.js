import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailTimeline, deleteTL } from '../redux/Actions/timelineAction';

import Swal from 'sweetalert2';


const DetailPage = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const access_token = localStorage.getItem('access_token');
    const { id } = useParams();

    const { getTLDetailResult, getTLDetailLoading, getTLDetailError } = useSelector(
        (state) => state.TimelinesReducer
    );

    useEffect(() => {
        dispatch(detailTimeline(+id, access_token))
    }, [dispatch]);

    const handleDelete = () => {
        Swal.fire({
            icon: 'question',
            title: 'Are you sure delete this post?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't delete`
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteTL(access_token, getTLDetailResult.post.id));
                    Swal.fire({
                        icon: 'success',
                        title: 'Delete post successfully'
                    });
                    navigation('/home/profile');
                } else if (result.isDenied) {
                    Swal.fire("No one change", "", "info");
                }
            });
    };


    return (
        <>
            <div className='py-3'>
                <h5>detail</h5>
                {getTLDetailResult ? (
                    <div className='card p-3 shadow-sm'>
                        <div className='row my-3'>
                            <div className='col'>
                                <div style={{ height: '80vh', width: '30vw' }}>
                                    <img src={require(`../assets/images/${getTLDetailResult.post.image}`)}
                                        style={{ height: '33rem' }} />
                                </div>
                            </div>

                            <div className='col overflow-scroll'>
                                <div style={{ height: '50vh', width: '30vw' }}>
                                    <div>
                                        <div className='row'>
                                            <div className='row py-2'></div>
                                            {getTLDetailResult.post.userId === getTLDetailResult.userId ? (
                                                <>
                                                    <div className='col-md-1 mx-5'>
                                                        <button className='btn btn-danger' onClick={handleDelete}>
                                                            delete
                                                        </button>
                                                    </div>

                                                    <div className='col-md-1'>
                                                        <button className='btn btn-primary'
                                                            onClick={() => navigation(`/home/editPost/${id}`)}>
                                                            edit
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                        <textarea className='form-control' rows={3} cols={50} disabled
                                            style={{ backgroundColor: 'transparent' }}>
                                            {getTLDetailResult.post.content}
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    getTLDetailLoading ? (
                        <div>Loading...</div>
                    ) :
                        getTLDetailError ? (
                            getTLDetailError
                        ) : (
                            'detail not found'
                        )
                }
            </div>
        </>
    )
}

export default DetailPage
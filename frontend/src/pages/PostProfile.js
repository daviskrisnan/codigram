import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTimelineByUserId } from '../redux/Actions/timelineAction';
import { PostTemplate } from '../components';


const PostProfile = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const { getTLDetailByUserIdResult, getTLDetailByUserIdLoading, getTimelineByUserIdError } = useSelector(
        (state) => state.TimelinesReducer
    );

    useEffect(() => {
        dispatch(getTimelineByUserId(localStorage.getItem('access_token')))
    }, [dispatch]);


    return (
        <>
            <div className='px-5 py-4'>
                <div className='row'>
                    <div className='row md-3'>
                        <h5>My Timelines</h5>
                    </div>
                    <div className='row md-5'>
                        <div align='center'>
                            <button className='btn btn-primary' onClick={() => navigation('/home/add')}>
                                + add
                            </button>
                        </div>
                    </div>
                </div>

                <div className='row py-2'>
                    {getTLDetailByUserIdResult ? (
                        getTLDetailByUserIdResult.map((tl) => {
                            return <PostTemplate data={tl} />
                        })
                    ) :
                        getTLDetailByUserIdLoading ? (
                            <p>Loading...</p>
                        ) :
                            getTimelineByUserIdError ? (
                                <p>{getTimelineByUserIdError ? getTimelineByUserIdError : 'your post list is empty'}</p>
                            ) : (
                                console.log('error')
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default PostProfile
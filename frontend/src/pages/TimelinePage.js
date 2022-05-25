import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimeline } from '../redux/Actions/timelineAction';
import { getUser } from '../redux/Actions/userAction';
import { PostTemplate } from '../components';


const TimelinePage = () => {
  const { getUserDetailResult, getUserDetailLoading, getUserDetailError } = useSelector(
    (state) => state.UsersReducer
  );

  const { getTLDetailResult, getTLDetailLoading, getTLDetailError } = useSelector(
    (state) => state.TimelinesReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimeline())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser(localStorage.getItem('access_token')))
  }, [dispatch]);


  return (
    <>
      <div className='px-5 py-4'>
        <h5>posting</h5>
        <div className='row'>
          <div className='row'>
            {getTLDetailResult ? (
              getTLDetailResult.map((tl) => {
                return <PostTemplate data={tl} />
              })
              ) :
                getTLDetailLoading ? (
                  <p>Loading...</p>
                ) :
                  getTLDetailError ? (
                    <p>{getTLDetailError ? getTLDetailError : 'list empty'}</p>
                  ) : (
                    console.log('null')
                  )
              }
          </div>

          <div className='row py-3 text-center'>
            <div className='card' style={{position: 'sticky', top: 10}}>
              <h5>info user</h5>
              <hr />
              {getUserDetailResult ? (
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='avatar' src={require(`../assets/images/${getUserDetailResult.image}`)} />
                  </div>

                  <div className='col-sm-6'>
                    <strong>
                      <p className='p-2'>{getUserDetailResult.username}</p>
                    </strong>
                    <p style={{paddingLeft: '7px'}}>
                      {getUserDetailResult.email}
                    </p>
                  </div>
                </div>
              ) :
              getUserDetailLoading ? (
                <p>Loading...</p>
              ) :
              getUserDetailError ? (
                <p>{getUserDetailError ? getTLDetailError : 'empty'}</p>
              ) : (
                console.log('tidak ada data')
              )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimelinePage
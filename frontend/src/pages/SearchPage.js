import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimeline } from '../redux/Actions/timelineAction';
import { useParams } from 'react-router-dom';
import { PostTemplate } from '../components';


const SearchPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  const { getTimelineResult, getTimelineLoading, getTimelineError } = useSelector(
    (state) => state.TimelinesReducer
  );

  useEffect(() => {
    dispatch(getTimeline())
  }, [dispatch]);


  return (
    <>
      <div className='px-5 py-4'>
        <h4>Search Result</h4>
        <div className='row'>
          {getTimelineResult ? (
            getTimelineResult
              .filter((tl) =>
                tl.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((tl) => {
                return <PostTemplate data={tl} />
              })
          ) :
            getTimelineLoading ? (
              <p>Loading ...</p>
            ) :
              getTimelineError ? (
                getTimelineError
              ) : (
                <h4>Data not Found</h4>
              )
          }
        </div>
      </div>
    </>
  )
}

export default SearchPage;
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editTimeline, detailTimeline } from '../fetchs/timelineFetch';
import { uploadImg } from '../fetchs/userFetch';

import Swal from 'sweetalert2';

const EditPostTimeline = () => {
  const navigation = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const access_token = localStorage.getItem('access_token');
  
  const { getTLDetailResult, getTLDetailLoading, getTLDetailError } = useSelector(
    (state) => state.TimelinesReducer
  );

  useEffect(() => {
    dispatch(detailTimeline(+id, access_token))
  }, [dispatch]);

  const [content, setContent] = useState('');
  const [imageData, setImageData] = useState({});

  const handleImageUpload = (e) => {
    setImageData(e.target.files[0])
  };

  const updateHandler = (imageName) => {
    const timelineObj = {
      content,
      image: Math.round(new Date() / 1000) + "--" + imageName
    };
    dispatch(editTimeline(timelineObj, access_token, id));
    Swal.fire({
      icon: "success",
      title: "Update Successfully",
      text: "Your post has been updated.."
    });
    navigation('/profile');
  };

  const submitHandler = () => {
    const data = new FormData();
    data.append("image", imageData);
    uploadImg(data);
    updateHandler(imageData.name);
  }


  return (
    <>
      <div className='row my-3'>
        <div className='w-100 text-center'>
          <h1>Edit your post</h1>
        </div>
        {getTLDetailResult ? (
          <div className='w-50 text-center'>
            <hr />
            <div>
              <label>Update Image</label>
              <input className='form-control' type='file' name='image' accept='image/png, image/gif, image/jpeg, image/jpg'
                onChange={handleImageUpload} />
            </div>

            <div className='mb-3'>
              <label>Edit Your Captions:</label>
              <textarea className='form-control' type='textarea' rows={3} cols={50} value={detailTimeline.post.content}
                onChange={(event) => setContent(event.target.value)} />
            </div>

            <div className='submit-btn'>
              <button className='btn text-add' onClick={submitHandler} >Update</button>
            </div>
          </div>
        ) :
          getTLDetailLoading ? (
            <p>Loading ...</p>
          ) :
            getTLDetailError ? (
              getTLDetailError
            ) : (
              "No one Post"
            )

        }
      </div>
    </>
  )
}

export default EditPostTimeline
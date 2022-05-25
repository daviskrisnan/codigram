import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addTimeline } from "../redux/Actions/timelineAction";
import { uploadImg } from "../fetchs/userFetch";

import "bootstrap/dist/css/bootstrap.min.css";
import Swal from "sweetalert2";

const AddPostTimeline = () => {
    const navigation = useNavigate();    
    const dispatch = useDispatch();

    const token = localStorage.getItem('access_token');
    const [imgData, setImgData] = useState({});
    const [content, setContent] = useState('');

    const handleImageUpload = (e) => {
        setImgData(e.target.files[0])
    };

    const submitData = (imageName) => {
        const timelineObject = {
            content,
            image: Math.round(new Date() / 1000 + "---" + imageName)
        };
        dispatch(addTimeline(timelineObject, token));
        Swal.fire({
            icon: "success",
            title: "Add New Post is Success",
            text: "New post has been created!"
        });
        navigation('/home/profile');
    };

    const submitTLhandler = () => {
        const data = new FormData();
        data.append("image", imgData);
        uploadImg(data);
        submitData(imgData.name);
    }
    

    return(
        <div className="container">
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h1>Add new post</h1>
                    <div className="w-50 mx-auto">
                        <div className="form-group mb-3">
                            <label for='image'>Upload Image</label>
                            <input className="form-control" type="file" name="image" accept="image/png, image/gif, image/jpeg, image/jpg"
                            onChange={handleImageUpload} />
                        </div>
                        
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Caption" value={content}
                            onChange={(e) => setContent(e.target.value)}/>
                            <label for="floatingInput">Content</label>
                        </div>
                        
                        <div className="mb-3">
                            <button className="btn text-add" type="button" onClick={submitTLhandler}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPostTimeline;
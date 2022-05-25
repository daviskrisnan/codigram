import axios from "axios";

const URL = 'http://localhost:3000/api/timelines';

const getTimeline = (cb) => {
        axios({
            method: 'GET',
            url: URL
        })
            .then( (timelines) => {
                cb(timelines.data)
            })
            .catch( (err) => {
                console.log(err);
            })
}

const addTimeline = async (data, getAccessToken) => {
    try {
        await axios({
            method: 'POST',
            url: URL + '/add',
            data: data,
            headers: {
                timelineAccessToken: getAccessToken
            }
        })
        return "success"
    } catch(err) {
        console.log(err);
        return "failed"
    }
}

const editTimeline = async (id, userData, getAccessToken) => {
    try {
        await axios({
            method: 'PUT',
            url: URL + '/update/' + id,
            data: userData,
            headers: {
                timelineAccessToken: getAccessToken
            }
        })
        return "success"
    } catch(err) {
        console.log(err);
        return "failed"
    }
}

const uploadImage = async(data) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/single',
            data: data
        })
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

const detailTimeline = async (id, getAccessToken, cb) => {
    axios({
        method: 'GET',
        url: URL + '/detail' + id,
        headers: {
            timelineAccessToken: getAccessToken
        }
    })
        .then( (userData) => {
            cb(userData.data)
        })
        .catch( (err) => {
            console.log(err);
        })
}

export {
    getTimeline, addTimeline, detailTimeline, editTimeline, uploadImage
}
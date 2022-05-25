import axios from 'axios';

const URL = 'http://localhost:3000/api';

const loginUser = async(form) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/users/login',
            data: form
        })

        const access_token =  result.data.access_token;
        localStorage.setItem("access_token", access_token);
        return "success";

    } catch(err) {
        console.log(err);
        return "error"
    }
};

const registerUser = async(form) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/users/register',
            data: form
        })
        console.log(result.data);
    } catch(err) {
        console.log(err);
    }
}

const uploadImg = async(data) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/single',
            data: data
        })
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async(token, userData) => {
    try {
        await axios({
            method: 'PUT',
            url: URL + '/users/update',
            data: userData,
            headers: {
                userAccessToken: token
            }
        })
        return "success"
    } catch(err) {
        console.log(err);
        return "failed";
    }
}

const listUser = async(id, getAccessToken, cb) => {
    axios({
        method: 'GET',
        url: URL + '/detail/' + id,
        headers: {
            userAccessToken: getAccessToken
        }
    })
        .then( (userData) => {
            cb(userData.data);
        })
        .catch( (err) => {
            console.log(err);
        })
}

export {
    loginUser, registerUser, listUser, uploadImg, updateUser
}
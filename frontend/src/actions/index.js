import axios from 'axios';
import * as types from './types'

const port = process.env.PORT || 3001
const ROOT_URL = 'http://52.53.159.37'
const headers = {
    headers: { 'Authorization': 'whatever-you-want' },
}

// axios
export function fetchPosts(category) {
    let request;
    if(category) {
        request = axios.get(`${ROOT_URL}/${category}/posts`,headers)
    } else {
        request = axios.get(`${ROOT_URL}/posts`,headers)
    }

    return {
        type: types.FETCH_POSTS,
        payload: request
    }
}

export function votePost(id, option) {
    const data = { option }
    const request = axios.post(`${ROOT_URL}/posts/${id}`, data, headers)
    return (dispatch) => {
        request.then(({data}) => {
                    dispatch({type: types.VOTE_SCORE, payload: data})
                    return data
                })
               .then((data) => dispatch({type: types.VOTE_POST_SCORE, payload: data}));
    }
}

export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`, headers)
    return {
        type: types.FETCH_CATEGORIES,
        payload: request
    }
}

export function createPost(values, callback, params) {
    let request;
    if(params) {
        request = axios.put(`${ROOT_URL}/posts/${params}`, values, headers)
                    .then((res) => {
                        callback(res.data.id, res.data.category)
                        return res.data
                    })
    } else {
        request = axios.post(`${ROOT_URL}/posts`, values, headers)
                    .then((res) => {
                        callback(res.data.id, res.data.category)
                        return res.data
                    })
    }
    return {
        type: types.CREATE_POST,
        payload: request
    }
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}`, headers)
                    .then((res) => {
                        callback && callback()
                        return res.data
                    })
    return {
        type: types.DELETE_POST,
        payload: request
    }
}

export function getPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`, headers)
    return {
        type: types.FETCH_POST,
        payload: request
    }
}

export function fetchComments(postId) {
    const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, headers)
    return {
        type: types.FETCH_COMMENTS,
        payload: request
    }
}

export function createComment(data) {
    const request = axios.post(`${ROOT_URL}/comments`, data, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: types.CREATE_COMMENT,
        payload: request
    }
}

export function editComment(data) {
    const request = axios.put(`${ROOT_URL}/comments/${data.id}`, data, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: types.EDIT_COMMENT,
        payload: request
    }
}
export function deleteComment(id) {
    const request = axios.delete(`${ROOT_URL}/comments/${id}`, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: types.DELETE_COMMENT,
        payload: request
    }
}

export function voteComment(id, option) {
    const data = { option }
    const request = axios.post(`${ROOT_URL}/comments/${id}`, data, headers)
    return {
        type: types.VOTE_COMMENT,
        payload: request
    }
}

// non-axios
export function setSortOrder(order) {
    return {
        type: types.SET_SORT_ORDER,
        payload: order
    }
}

export function loadInitVals(data, extraData) {
    let request;
    if(extraData) {
        request = Object.assign({}, data, extraData)
    } else {
        request = data
    }
    return {
        type: types.LOAD_INIT_VALS,
        payload: request
    }
}

export function createNewInitVals(data) {
    return {
        type: types.CREATE_NEW_INIT_VALS,
        payload: data
    }
}

export function setCommentNavStatus(status) {
    return {
        type: types.SET_COMMENT_NAV_STATUS,
        payload: status
    }
}
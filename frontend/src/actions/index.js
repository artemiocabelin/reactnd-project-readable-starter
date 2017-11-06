import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const VOTE_SCORE = 'VOTE_SCORE';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CREATE_POST = 'CREATE_POST';
export const LOAD_INIT_VALS = 'LOAD_INIT_VALS';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://localhost:3001'
const headers = {
    headers: { 'Authorization': 'whatever-you-want' },
}

export function fetchPosts(category) {
    let request;
    if(category) {
        request = axios.get(`${ROOT_URL}/${category}/posts`,headers)
    } else {
        request = axios.get(`${ROOT_URL}/posts`,headers)
    }

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function setSortOrder(order) {
    return {
        type: SET_SORT_ORDER,
        payload: order
    }
}

export function votePost(id, option) {
    const data = { option }
    const request = axios.post(`${ROOT_URL}/posts/${id}`, data, headers)
    return {
        type: VOTE_SCORE,
        payload: request
    }
}
export function fetchCategories() {
    const request = axios.get(`${ROOT_URL}/categories`, headers)
    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function createPost(values, callback, params) {
    let request;
    if(params) {
        request = axios.put(`${ROOT_URL}/posts/${params}`, values, headers)
                    .then((res) => {
                        callback(res.data.id)
                        return res.data
                    })
    } else {
        request = axios.post(`${ROOT_URL}/posts`, values, headers)
                    .then((res) => {
                        callback(res.data.id)
                        return res.data
                    })
    }
    return {
        type: CREATE_POST,
        payload: request
    }
}

export function loadInitVals(data, post) {
    let request;
    if(post) {
        request = Object.assign({}, data, post)
    } else {
        request = data
    }
    return {
        type: LOAD_INIT_VALS,
        payload: request
    }
}

export function deletePost(id) {
    console.log(id)
    const request = axios.delete(`${ROOT_URL}/posts/${id}`, headers)
                // .then((res) => {
                //     callback(res.data.id)
                //     return res.data
                // })
    return {
        type: DELETE_POST,
        payload: request
    }
}
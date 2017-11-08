import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const VOTE_SCORE = 'VOTE_SCORE';
export const VOTE_POST_SCORE = 'VOTE_POST_SCORE';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CREATE_POST = 'CREATE_POST';
export const LOAD_INIT_VALS = 'LOAD_INIT_VALS';
export const CREATE_NEW_INIT_VALS = 'CREATE_NEW_INIT_VALS';
export const DELETE_POST = 'DELETE_POST';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const SET_COMMENT_NAV_STATUS = 'SET_COMMENT_NAV_STATUS';

const ROOT_URL = 'http://localhost:3001'
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
        type: FETCH_POSTS,
        payload: request
    }
}

export function votePost(id, option) {
    const data = { option }
    const request = axios.post(`${ROOT_URL}/posts/${id}`, data, headers)
    return (dispatch) => {
        request.then(({data}) => {
                    dispatch({type: VOTE_SCORE, payload: data})
                    return data
                })
               .then((data) => dispatch({type: VOTE_POST_SCORE, payload: data}));
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
        type: CREATE_POST,
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
        type: DELETE_POST,
        payload: request
    }
}

export function getPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`, headers)
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function fetchComments(postId) {
    const request = axios.get(`${ROOT_URL}/posts/${postId}/comments`, headers)
    return {
        type: FETCH_COMMENTS,
        payload: request
    }
}

export function createComment(data) {
    const request = axios.post(`${ROOT_URL}/comments`, data, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: CREATE_COMMENT,
        payload: request
    }
}

export function editComment(data) {
    const request = axios.put(`${ROOT_URL}/comments/${data.id}`, data, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: EDIT_COMMENT,
        payload: request
    }
}
export function deleteComment(id) {
    const request = axios.delete(`${ROOT_URL}/comments/${id}`, headers)
                    .then((res) => {
                        return res.data
                    })
    return {
        type: DELETE_COMMENT,
        payload: request
    }
}

export function voteComment(id, option) {
    const data = { option }
    const request = axios.post(`${ROOT_URL}/comments/${id}`, data, headers)
    return {
        type: VOTE_COMMENT,
        payload: request
    }
}

// non-axios
export function setSortOrder(order) {
    return {
        type: SET_SORT_ORDER,
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
        type: LOAD_INIT_VALS,
        payload: request
    }
}

export function createNewInitVals(data) {
    return {
        type: CREATE_NEW_INIT_VALS,
        payload: data
    }
}

export function setCommentNavStatus(status) {
    return {
        type: SET_COMMENT_NAV_STATUS,
        payload: status
    }
}
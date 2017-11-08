import uuidv1 from 'uuid/v1';


export function createInitialValues(id, parentId) {
    let data = {
        id: setInitialId(id),
        timestamp: Date.now(),
        author: 'randomAuthor',
    }
    if(parentId) {
        data = Object.assign({parentId}, data)
    }
    return data
}

export function setInitialId(id) {
    return id ? id : uuidv1()
}
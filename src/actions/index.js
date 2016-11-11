import * as types from './ActionTypes';


export function create(services) {
    return {
        type: types.CREATE,
        services
    };
}

export function edit(id) {
    return {
        type: types.EDIT,
        id
    }
}

export function remove(id) {
    return {
        type: types.REMOVE,
        id
    }
}

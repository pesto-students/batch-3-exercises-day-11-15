import { createStore } from 'redux';

const getRepo = (gitUserName) => {
    return fetch(`https://api.github.com/users/${gitUserName}/repos`)
    .then
};

var userReducer = function(state, action){
    if (state === undefined){
        state = {
            repo : [],
        };
    }

    switch (action.type){
        case 'GET_REPO':

    }

}

export {
    userReducer
}


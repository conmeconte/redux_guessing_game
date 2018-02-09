import types from './types';

export function getRanNum(){
    return{
        type: types.GET_RAN_NUMBER,
        payload: Math.floor(Math.random() * 10) + 1
    }
}

export function userInput(e){
    return {
        type: types.USER_INPUT,
        payload: e.target.value
    }
}

export function makeGuess(){
    return {
        type: types.MAKE_GUESS
    }
}
import types from '../actions/types';


const DEFAULT_STATE={
    randomNumber: null,
    userGuess: '',
    numberOfGuesses: null,
    message: ''
};


export default function(state=DEFAULT_STATE, action){
    switch(action.type){
        default:
            return state; 
    }
}
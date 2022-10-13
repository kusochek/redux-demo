// store: {}, reducer(state, action), action: {type: ""}, action type

import redux from "redux";

// actions type
const ACTION_INC = "ACTION_INC";
const ACTION_DEC = "ACTION_DEC";
const ACTION_SET = "ACTION_SET";

// action creators
const inc = () => ({ type: ACTION_INC });
const dec = () => ({ type: ACTION_DEC });
const set = payload => ({ type: ACTION_SET, payload: payload });

const state = {
    count: 0,
};

const store = redux.createStore(reducerRoot, state);

function reducerRoot(state, { type, payload }) {
    switch (type) {
        case ACTION_INC:
            return { ...state, count: state.count + 1 };
        case ACTION_DEC:
            return { ...state, count: state.count - 1 };
        case ACTION_SET:
            return { ...state, count: payload };
        default:
            return state;
    }
}

// const action = { type: "ACTION_INC" };
console.log(store.getState());
store.dispatch(inc());
console.log(store.getState());
store.dispatch(dec());
console.log(store.getState());
store.dispatch(set(24));
console.log(store.getState());

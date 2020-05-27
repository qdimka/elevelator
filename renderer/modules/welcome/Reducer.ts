import {IAction} from "../../shared/actions/ActionBase";
import {RECEIVE_CONNECTION_HISTORY} from "./Actions";

interface IWelcomePageState {
    history: any[]
}

const welcomeReducer = (state: IWelcomePageState = { history: [] }, action: IAction) => {
    switch (action.type) {
        case RECEIVE_CONNECTION_HISTORY:
            return {...state, history: action.payload};
    }
    return {...state};
}

export {
    welcomeReducer,
    IWelcomePageState
}
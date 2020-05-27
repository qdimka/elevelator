import {combineReducers} from "redux";
import {IWelcomePageState, welcomeReducer} from "../modules/welcome/Reducer";

export interface IState {
    welcomePage: IWelcomePageState
}

const RootReducer = combineReducers<IState>({
    welcomePage: welcomeReducer
})

export default RootReducer;
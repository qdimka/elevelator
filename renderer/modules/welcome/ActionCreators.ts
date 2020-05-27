import {IAction} from "../../shared/actions/ActionBase";
import {RECEIVE_CONNECTION_HISTORY, REQUEST_CONNECTION_HISTORY} from "./Actions";

const requestConnectionHistory = (): IAction => ({
    type: REQUEST_CONNECTION_HISTORY
})

const receiveConnectionHistory = (history: any[]): IAction => ({
    type: RECEIVE_CONNECTION_HISTORY,
    payload: history
})

export {
    receiveConnectionHistory,
    requestConnectionHistory
}
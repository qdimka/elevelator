import {all, fork} from "redux-saga/effects";
import {watchHistoryRequest} from "../modules/welcome/Sagas";

const RootSaga = function* root(): Generator<any> {
    yield all([fork(watchHistoryRequest)]);
};

export default RootSaga;
import {call, put, takeEvery} from "redux-saga/effects";
import {REQUEST_CONNECTION_HISTORY} from "./Actions";
import {ipcGet} from "../../api/electron";
import {receiveConnectionHistory} from "./ActionCreators";

export function* watchHistoryRequest(): Generator<any> {
    yield takeEvery(
        REQUEST_CONNECTION_HISTORY,
        requestHistory
    );
}

function* requestHistory(): Generator<any> {
    const history = yield call(ipcGet, "connection_history");
    yield put(receiveConnectionHistory(history as any[]));
}
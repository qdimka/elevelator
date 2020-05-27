import WelcomeView from "./View";
import {connect} from "react-redux";
import {IState} from "../../redux/RootReducer";
import {requestConnectionHistory} from "./ActionCreators";

const mapStateToProps = (state: IState) => ({
    history: state.welcomePage.history
});

// @ts-ignore
const mapDispatchToProps = dispatch => ({
    requestHistory: () => dispatch(requestConnectionHistory()),
});

export const WelcomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WelcomeView);
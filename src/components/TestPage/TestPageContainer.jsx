import React from "react";
import { connect } from "react-redux";
import TestPage from "./TestPage";
import { updateEmailValue, onClickCounter } from '../../redux/test-reducer';

let mapStateToProps = (state) => {
    debugger
    return {
        emailValue: state.testReducer.emailValue,
        counter: state.testReducer.counter
    }
}

const TestPageContainer = connect(mapStateToProps, { updateEmailValue, onClickCounter })(TestPage);

export default TestPageContainer;
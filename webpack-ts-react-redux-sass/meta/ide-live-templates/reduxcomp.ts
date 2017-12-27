import {connect, Dispatch, MapDispatchToProps, MapStateToProps} from 'react-redux';
import {AppState} from 'src/state/rootReducer';
import React, {SFC} from 'react';

/**
 * Properties mapped from the redux state
 */
interface $COMPONENTNAME$StateProps {

}

/**
 * Properties mapped to redux store dispatch actions
 */
interface $COMPONENTNAME$DispatchProps {

}

/**
 * Properties passed into the react component via property handling
 */
interface $COMPONENTNAME$OwnProps {

}

/**
 * The sum of properties accepted by the render implementation (react component)
 */
type $COMPONENTNAME$Props =
    $COMPONENTNAME$StateProps
    & $COMPONENTNAME$DispatchProps
    & $COMPONENTNAME$OwnProps;


// nachher
const mapStateToProps: MapStateToProps<$COMPONENTNAME$StateProps, $COMPONENTNAME$OwnProps, AppState>
    = (state: AppState, ownProps: $COMPONENTNAME$OwnProps): $COMPONENTNAME$StateProps => {
    return {};
};

const mapDispatchToProps: MapDispatchToProps<$COMPONENTNAME$DispatchProps, $COMPONENTNAME$OwnProps>
    = (dispatch: Dispatch<any>, ownProps: $COMPONENTNAME$OwnProps): $COMPONENTNAME$DispatchProps => {
    return {};
};

export const $COMPONENTNAME$: SFC = (props: $COMPONENTNAME$Props): JSX.Element => {
    return <div>I am a $COMPONENTNAME$</div>;
};

export default connect(mapStateToProps, mapDispatchToProps)($COMPONENTNAME$);

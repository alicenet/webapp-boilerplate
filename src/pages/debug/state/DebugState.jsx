import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { setLoading, clearLoading } from "redux/reducers";
export function DebugState() {

    const appState = useSelector(reduxState => reduxState.app);
    const dispatch = useDispatch();

    const StateMap = () => {
        return Object.keys(appState).map(stateObjectKey => (
            <div>{JSON.stringify(stateObjectKey, false, 2)}:{JSON.stringify(appState[stateObjectKey])}</div>
        ));
    };

    const LoadingButtons = () => {
        return (<div className={"mt-4"}>
            <Button content={"start-loading"} onClick={() => dispatch(setLoading(true))} />
            <Button content={"stop-loading"} onClick={() => dispatch(clearLoading())} />
        </div>
        )
    }

    return (
        <div>
            <StateMap />
            <LoadingButtons />
        </div>
    )
}


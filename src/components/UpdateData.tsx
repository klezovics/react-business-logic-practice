import {useDispatch} from "react-redux";
import {decrement, increment} from "../containers/reduxSetup.ts";
import {useZustandStore} from "../containers/zustandSetup.ts";

export const UpdateData = () => {
    const dispatch = useDispatch();
    const incrementZ = useZustandStore(state => state.increment);
    const decrementZ = useZustandStore(state => state.decrement);
    return (
        <div>
            <button onClick={() => { dispatch(increment()); incrementZ(); }}>
                Increment
            </button>
            <button onClick={() => { dispatch(decrement()); decrementZ(); }}>
                Decrement
            </button>
        </div>
    );
};

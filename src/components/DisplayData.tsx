import {useSelector} from "react-redux";
import {useZustandStore} from "../containers/zustandSetup.ts";

export const DisplayData = () => {
    const reduxValue = useSelector(state => state.counter.value);
    const zustandValue = useZustandStore(state => state.value);
    return (
        <div>
            <p>Redux Value: {reduxValue}</p>
            <p>Zustand Value: {zustandValue}</p>
        </div>
    );
};
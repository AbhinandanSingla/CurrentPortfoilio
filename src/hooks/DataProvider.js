import {createContext, useMemo, useState} from "react";

const DataContext = createContext();
const DataProvider = (props) => {
    const [lock, setLock] = useState(false);
    const value = useMemo(() => ({lock, setLock}), [lock])
    return (<DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>);
}
export {DataProvider, DataContext};
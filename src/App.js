import {Navbar} from "./components/Navbar";
import './App.css';
import {Home} from "./components/Home";
import {DataProvider} from "./hooks/DataProvider";
import {LockScreen} from "./components/Lockscreen";

function App() {
    return (<DataProvider>
        <Navbar/>
        <Home/>
        <LockScreen/>

    </DataProvider>);
}

export default App;
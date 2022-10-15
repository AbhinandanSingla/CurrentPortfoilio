import {Navbar} from "./components/Navbar";
import './App.css';
import {Home} from "./components/Home";
import {DataProvider} from "./hooks/DataProvider";

function App() {
    return (<DataProvider>
        <Navbar/>
        <Home/>
    </DataProvider>);
}

export default App;
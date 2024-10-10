import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

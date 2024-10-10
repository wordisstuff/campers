import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';

function App() {
    // const [count, setCount] = useState(0)

    

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/catalog' element={<Catalog />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

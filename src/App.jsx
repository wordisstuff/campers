import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import CamperDetail from './pages/CamperDetail/CamperDetail';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<CamperDetail />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <Layout />
            <Hero />
            {/* <Routes>
                <Route path="/" element={<Layout />}>
                    <h1>HELLo</h1>
                </Route>
            </Routes> */}
        </>
    );
}

export default App;

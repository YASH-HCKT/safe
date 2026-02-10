import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NavigatorMap from './pages/NavigatorMap';
import SafetyHub from './pages/SafetyHub';
import DisplaySettings from './pages/DisplaySettings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="map" element={<NavigatorMap />} />
          <Route path="community" element={<DisplaySettings />} />
          <Route path="account" element={<SafetyHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

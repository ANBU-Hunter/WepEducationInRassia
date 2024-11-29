import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // الصفحة الرئيسية
import WorkPage from './components/WorkPage'; // صفحة العمل
import TranslationPage from './components/TranslationServices'; // صفحة الترجمة
import OtherServicesPage from './components/OtherServicesPage'; // صفحة الخدمات الأخرى
import './css/Jobs.css';
import './css/Logo.css';

//<img src="../public/images/Logo.svg" alt="لوجو الموقع" className="logo"/>


function App() {
  return (
    <Router>
      <div className="App">
      

        <nav>
          {/* روابط القوائم */}
          <ul>
          <img src="./images/Logo.svg" alt="لوجو الموقع" className="logo"/>
            <li><a href="/">Home</a></li>
            <li><a href="/work">Work</a></li>
            <li><a href="/translation">Translation</a></li>
            <li><a href="/other-services">Other Services</a></li>
          </ul>
        </nav>

        <Routes>
          {/* المسارات للقوائم المختلفة */}
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/other-services" element={<OtherServicesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

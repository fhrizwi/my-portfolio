import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Test from './pages/Test';


export default function RoutingMap() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add here just after BrowserRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

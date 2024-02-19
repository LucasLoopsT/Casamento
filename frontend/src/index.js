import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './pages/header'
import Banner from './pages/banner'
import Count from './pages/count'
import Welcome from './pages/welcome'
import BuyList from './pages/buyList'
import BoughtList from './pages/boughtList'
import Recados from './pages/recados'
import Footer from './pages/footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Banner/>
    <Count/>
    <Welcome/>
    <BuyList/>
    <BoughtList/>
    <Recados/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

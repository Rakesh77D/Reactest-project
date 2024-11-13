import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Login from './Auth/Login';
import Signup from './Auth/Signup'

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home1';
import List from './Courses.js/List';
import ProductsList from './Products/ProductsList';
import ProfileUpdate from './Profile/ProfileUpdate';
import Products from './ReadData/Products';
import UsersList from './Users/UsersList';
import Icons from './Icons';
import Layout from './Layout';
import DataTest from './DataTest';
import store from './store/store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


    <BrowserRouter>
    <Routes>
   

    <Route path='/create-account' Component={Signup}/>
     <Route path='/' Component={Home}/>
     <Route path='/signin' Component={Login}/>
     <Route path="/courses" Component={List}/>
     <Route path='/products-list' Component={ProductsList}/>
     <Route path='/profile-update' Component={ProfileUpdate}/>
     <Route path='api-practice' Component={Products}/>
     <Route path='/manage-users' Component={UsersList}/>
     <Route path='/icons' Component={Icons}/>
     <Route path='/layout' Component={Layout}/>
     <Route path='/redux' Component={DataTest}/>

    

     
    </Routes>
    </BrowserRouter>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * routes.js
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Book from './components/Book';

// eslint-disable-next-line
export default () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ MainPage } />
            <Route path="/book/:id" component={ Book } />
        </Switch>
    </BrowserRouter>

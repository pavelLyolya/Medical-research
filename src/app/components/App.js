import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
import TableContainer from '../containers/TableContainer';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <main>
                <Route exact path='/' />
                <Route path='/table' component={TableContainer} />
            </main>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;

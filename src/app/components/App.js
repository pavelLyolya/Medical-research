import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
import TableStandingsContainer from '../containers/TableStandingsContainer';
import TeamsContainer from '../containers/TeamsContainer';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <main>
                <Route exact path='/' />
                <Route path='/table' component={TableStandingsContainer} />
                <Route path='/teams' component={TeamsContainer} />
            </main>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;

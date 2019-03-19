import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer';
import TableStandingsContainer from '../containers/TableStandingsContainer';
import TeamsContainer from '../containers/TeamsContainer';
import OneTeamContainer from '../containers/OneTeamContainer';

const App = () => (
    <Router>
        <React.Fragment>
            <Header />
            <main>
                <Route exact path='/' />
                <Route path='/table' component={TableStandingsContainer} />
                <Route exact path='/teams' component={TeamsContainer} />
                <Route path='/teams/:id' component={OneTeamContainer} />
            </main>
            <Footer />
        </React.Fragment>
    </Router>
);

export default App;

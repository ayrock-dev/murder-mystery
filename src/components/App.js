import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CharacterPage from './CharacterPage';

class App extends PureComponent {
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path={`${process.env.PUBLIC_URL}/`}
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL}/character/:id`}
                        component={CharacterPage}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;

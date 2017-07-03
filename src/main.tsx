import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import * as Immutable from 'immutable';

import configureStore from './Base/ConfigureStore';
import App from './Components/App';
import Messages from './Components/Messages';

const initialState = Immutable.fromJS({
    form: { data:{} }
});

const store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router basename="/contact-form/public">
            <div>
                
                <div className="bar">
                    <ul>
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/messages">View All Messages</Link></li>
                    </ul>
                </div>

                <Route exact path="/" component={App} />
                <Route path="/messages" component={Messages} />

            </div>
        </Router>
    </Provider>, 
    document.getElementById('container')
);

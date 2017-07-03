import * as React from 'react';
import Form from '../Containers/Form';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Form fields={[{
                    ID: "name",
                    type: "text",
                    placeholder: "Full Name",
                    rules: [{
                        rule: /([^\s])/,
                        msg: "Name is required."
                    }]
                }, {
                    ID: "mail",
                    type: "email",
                    placeholder: "Email Address",
                    rules: [{
                        rule: /([^\s])/,
                        msg: "Email address is required."
                    },{
                        rule: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        msg: 'Email address is invalid.'
                    }]
                }, {
                    ID: "message",
                    type: "textarea",
                    placeholder: "Message",
                    rules: [{
                        rule: /([^\s])/,
                        msg: "Message is required."
                    },{
                        rule: /.{20,}/,
                        msg: "Message should be at least 20 letters."
                    }]
                }]} />
            </div>
        )
    }
}

export default App;
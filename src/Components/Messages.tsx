import * as React from 'react';
import LocalStorage from '../Services/LocalStorage';

class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onRemoveClick(i) {
        LocalStorage.removeAt('messages',i);
        this.forceUpdate();
    }

    render() {
        let m = LocalStorage.get('messages'),
            data = m && JSON.parse(m);

        return (
            <div className="messages-component">
                <div className="messages-header">
                    <h1>Messages</h1>
                    <p>This is just to show that the form data has been stored</p>
                </div>
                <div className="messages-body">
                    {
                        data && data.length > 0 ? data.map((d,i) => {
                            return (
                                <div className="msg-item" key={"m"+i}>
                                    <p><strong>{d.name}</strong></p>
                                    <p>{d.mail}</p>
                                    <p>{d.message}</p>
                                    <div className="remove-btn" onClick={this.onRemoveClick.bind(null,i)}>Remove</div>
                                </div>
                            )
                        }) : <div className="msg-empty">No Messages Found</div>
                    }
                </div>
            </div>
        );
    }
}

export default Messages;
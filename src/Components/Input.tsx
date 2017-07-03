import * as React from 'react';

interface InputProps {
    ID: string,
    type:string,
    placeholder?:string,
    value:string,
    onChange?: (e) => void;
    onClick?: (e) => void;
}

interface InputState {

}

class Input extends React.Component<InputProps,InputState> {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.props.onChange &&
        this.props.onChange({
            key: this.props.ID,
            value: e.target.value
        });
    }

    onClick(e) {
        this.props.onClick &&
        this.props.onClick(this.props.ID);
    }    

    render() {
        let props = this.props;
        
        switch(props.type) {
            case 'text':
            case 'email':
            case 'button':
                return (<input id={props.ID} type={props.type} value={props.value} placeholder={props.placeholder} onChange={this.onChange} onClick={this.onClick} />)
            case 'textarea':
                return (<textarea id={props.ID} type={props.type} value={props.value} placeholder={props.placeholder} onChange={this.onChange}></textarea>);
        }
    }
}

export default Input;
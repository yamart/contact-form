import * as React from 'react';
import {connect} from 'react-redux'
import {FormProps} from './StateAndProps';
import {ACTIONS} from './Actions';

import Input from '../../Components/Input';

class Form extends React.Component<FormProps,any> {
    constructor(props) {
        super(props);

        this.validate = this.validate.bind(this);

        this.state = {
            message: {
                data: [],
                type: "",
                timeout: 0
            }
        }
    }

    validate() {
        let errors = [],
            props = this.props;

        props.fields.forEach((field) => {
            let found = false;
            field.rules.map((r:any) => {
                if(!r.rule.test(props.data[field.ID] || "") && !found) {
                    errors.push(r.msg);
                    found = true;
                }
            });
        });

        this.setState({
            message: {
                data: errors,
                type: "error"
            }
        });
        
        if(errors.length > 0) {
            return;            
        }

        this.props.onSubmit();
        
        this.setState({
            message: {
                data: ["Your message has been sent."],
                type: "success",
                timeout: 2000
            }
        });        
    }

    renderMessage() {   
        let message = this.state.message;

        if(message.data.length > 0) {
            return (
                <div ref="form-message" className="form-message" data-type={message.type}>
                    <ul>
                    {
                        message.data.map((e,i) => {
                            return (<li key={"error"+i}>{e}</li>)
                        })
                    }
                    </ul>
                </div>
            )
        }           
    }

    componentDidUpdate() {
        let message = this.state.message;
        if(message.timeout > 0) {
            setTimeout(() => {
                try {
                    this.setState({ 
                        message: { 
                            data: [],
                            type: "",
                            timeout: 0
                        } 
                    });
                } catch(e) {
                    console.log('Failed to set the state.');
                }
            }, message.timeout);
        }
    }

    render() {
        let props = this.props;

        return (
            <div className="form-component">
                <div className="form-header">
                    <h1>Contact Us</h1>
                </div>
                <div className="form-body">
                {
                    props.fields.map((field, i) => {
                        return (<Input  key={i} 
                                        ID={field.ID} 
                                        type={field.type} 
                                        placeholder={field.placeholder} 
                                        value={props.data[field.ID] || ""} 
                                        onChange={props.onInputChange} />);
                    })
                }
                </div>
                <div className="form-footer">
                    { this.renderMessage() }
                    <Input  ID={"submit-btn"} 
                            type={"button"} 
                            value={"Submit"}
                            onClick={this.validate} />                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps:FormProps) => ({
    data: state.toJS().form.data
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (e) => { dispatch(ACTIONS.VALUE_CHANGED(e)) },
    onSubmit: () => { dispatch(ACTIONS.SUBMIT_FORM()) }
});

export default connect(mapStateToProps,mapDispatchToProps)(Form);
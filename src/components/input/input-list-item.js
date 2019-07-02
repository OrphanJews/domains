import React, { Component } from 'react';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './input-list-item.css';

export default class InputListItem extends Component {

    state = {value: this.props.defaultValue ? this.props.defaultValue : 10};

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleBlur = (e) => {
        if (Number(e.target.value) > Number(e.target.max)) {
            this.setState({value: e.target.max});
        } else if (Number(e.target.value) < Number(e.target.min)) {
            this.setState({value: e.target.min});
        }
    };

    render() {
        const {label = '', id = '', min = 1, max = 40, step = 1} = this.props;

        return (
            <div>
                <label htmlFor={id} className="control-label input-label">{label}</label>
                <input
                    id={id}
                    className="form-control"
                    type="number"
                    min={min}
                    max={max}
                    step={step}
                    value={this.state.value}
                    onChange={ this.handleChange }
                    onBlur={ this.handleBlur }
                />
            </div>
        );
    }
}

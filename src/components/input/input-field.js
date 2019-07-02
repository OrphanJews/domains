import React, { Component } from 'react';

import './input-field.css';

export default class InputListItem extends Component {
    handleChange = (e) => {
        this.props.update(e.target.value);
    };

    handleBlur = (e) => {
        if (Number(e.target.value) > Number(e.target.max)) {
            this.props.update(e.target.max);
        } else if (Number(e.target.value) < Number(e.target.min)) {
            this.props.update(e.target.min);
        }
    };

    render() {
        const {label = '', id = '', min = 1, max = 40, step = 1, value} = this.props;

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
                    value={value}
                    onChange={ this.handleChange }
                    onBlur={ this.handleBlur }
                />
            </div>
        );
    }
}

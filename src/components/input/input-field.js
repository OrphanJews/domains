import React, {Component} from 'react';

import './input-field.css';

export default class InputListItem extends Component {
    handleChange = (e) => {
        this.props.update(Number(e.target.value));
    };

    handleBlur = (e) => {
        const step = Number(e.target.step);
        const min = Number(e.target.min);
        const max = Number(e.target.max);
        let value = Number(e.target.value);

        value = (step === 1) ? Math.trunc(value) : value;

        if (value > max) {
            this.props.update(max);
        } else if (value < min) {
            this.props.update(min);
        } else {
            this.props.update(value);
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
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
            </div>
        );
    }
}

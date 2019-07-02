import React from 'react';

export default class MatrixItem extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
    };

    onClick = () => {
        this.props.onClick(this.state.x, this.state.y);
    };

    render() {
        const {col = 0} = this.props;

        return (
            <td onClick={this.onClick}>{col}</td>
        );
    }
}
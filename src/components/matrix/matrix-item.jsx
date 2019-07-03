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
        const {el} = this.props;
        return (
            <td style={{backgroundColor: el.color}} onClick={this.onClick}>{el.value}</td>
        );
    }
}
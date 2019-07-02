import React from 'react';
import MatrixItem from "./matrix-item";

export default class Matrix extends React.Component {
    state = {
        test: Array(this.props.height).fill(Array(this.props.width).fill(0)),

        arr: [
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
            Array(this.props.width).fill(0),
        ]
    };

    updateMatrixItemState = (x, y) => {
        const arr = this.state.arr;
        arr[x][y] = Number(arr[x][y]) === 1 ? 0 : 1;
        this.setState({
            arr: arr
        });
    };

    render() {
        const makeColumns = (row, rowNum) => {
            return row.map((col, colNum) => {
                return <MatrixItem x={rowNum} y={colNum} col={col} onClick={this.updateMatrixItemState}/>
            });
        };

        const tableTemplate = this.state.arr.map((row, rowNum) => {
            return <tr key={rowNum}>{makeColumns(row, rowNum)}</tr>
        });

        return (
            <table className="table table-bordered">
                <tbody>
                    {tableTemplate}
                </tbody>
            </table>
        );
    }
}
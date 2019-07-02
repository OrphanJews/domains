import React from 'react';
import MatrixItem from "./matrix-item";

export default class Matrix extends React.Component {
    render() {
        const {arr, onClick} = this.props;

        const makeColumns = (row, rowNum) => {
            return row.map((col, colNum) => {
                return <MatrixItem x={rowNum} y={colNum} col={col} onClick={onClick}/>
            });
        };

        const tableTemplate = arr.map((row, rowNum) => {
            return <tr key={"tr" + rowNum}>{makeColumns(row, rowNum)}</tr>
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
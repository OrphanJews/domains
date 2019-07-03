import React from 'react';

export default class Statistic extends React.Component {
    render() {

        const tableTemplate = this.props.statistic.map((row, rowNum) => {
            return (
                <tr key={rowNum + Math.random()}>
                    <th key={'#'}>{rowNum + 1}</th>
                    <td key={'probability'}>{row.probability}</td>
                    <td key={'domainsCount'}>{row.domainsCount}</td>
                    <td key={'matrixSize'}>{row.matrixSize}</td>
                </tr>
            )
        });

        return (
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>#</th>
                    <th>Вероятность</th>
                    <th>Количество доменов в матрице</th>
                    <th>Количество ячеек в матрице (N*M)</th>
                </tr>
                {tableTemplate}
                </tbody>
            </table>
        );
    }
}
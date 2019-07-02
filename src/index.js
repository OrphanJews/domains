import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './components/input/input-field';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class CreateElement extends React.Component {
    state = {
        x: this.props.x,
        y: this.props.y,
    };

    render() {
        const {col = 0, onClick = ''} = this.props;

        return (
            <td>{col}</td>
        );
    }
}

class App extends React.Component {
    state = {
        arr: [
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
    };

    onClick = (x, y) => {
        const arr = this.state.arr;
        arr[x][y] = Number(arr[x][x]) === 1 ? 0 : 1;
        this.setState({
            arr: arr
        });
    };

    render() {
        function makeColumns(row, rowNum) {
            return row.map((col, colNum) => {
                return <CreateElement x={rowNum} y={colNum} col={col} onClick=''/>
            });
        }

        const tableTemplate = this.state.arr.map((row, rowNum) => {
            return <tr>{makeColumns(row, rowNum)}</tr>
        });

        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-lg-6">
                        <InputField label="Ширина" id="matrix-width"/>
                        <InputField label="Высота" id="matrix-height"/>
                        <InputField label="Вероятность" id="probability" min="0.1" max="0.9" step="0.1"
                                    defaultValue="0.5"/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <button type="button" className="btn btn-outline-secondary btn-active"
                                onClick={this.onClick}>Построение матрицы
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Подсчет доменов в
                            матрице
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Автозаполнение</button>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry the Bird</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            </tbody>
                        </table>
                        <table className="table table-bordered">
                            <tbody>
                            {tableTemplate}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
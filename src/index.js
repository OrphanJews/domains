import React from 'react';
import ReactDOM from 'react-dom';
import InputList from './components/input/input-list';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-lg-6">
                        <InputList/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <button type="button" className="btn btn-outline-secondary btn-active">Построение матрицы</button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Подсчет доменов в матрице</button>
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
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
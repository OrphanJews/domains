import React from 'react';
import InputField from "../input/input-field";
import Matrix from "../matrix/matrix";

import './app.css';

export default class App extends React.Component {
    state = {
        matrixWidth: 10,
        matrixHeight: 10,
        probability: 0.5,
    };

    updateMatrixWidth = (width) => {
        this.setState({ matrixWidth: width });
    };

    updateMatrixHeight = (height) => {
        this.setState({ matrixHeight: height });
    };

    updateProbability = (probability) => {
        this.setState({ probability: probability });
    };

    render() {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-12 col-lg-6">
                        <InputField label="Ширина" id="matrix-width" value={this.state.matrixWidth} update={this.updateMatrixWidth}/>
                        <InputField label="Высота" id="matrix-height" value={this.state.matrixHeight} update={this.updateMatrixHeight}/>
                        <InputField label="Вероятность" id="probability" min="0.1" max="0.9" step="0.1" defaultValue="0.5" value={this.state.probability} update={this.updateProbability}/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <button type="button" className="btn btn-outline-secondary btn-active">Построение матрицы</button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Подсчет доменов в матрице</button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Автозаполнение</button>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-12">
                        <Matrix width={this.state.matrixWidth} height={this.state.matrixHeight}/>
                    </div>
                </div>
            </div>
        );
    }
}
import React from 'react';
import InputField from "../input/input-field";
import Matrix from "../matrix/matrix";
import Statistic from "../statistic/statistic";
import {getArrayEmpty} from '../../utilities/get-array-empty';
import {getRandomColor} from '../../utilities/get-random-color';
import {updateStatistic} from '../../utilities/update-statistic';
import {findDomains} from '../../utilities/domains';

import './app.css';

const matrixSizeDefault = 10;

export default class App extends React.Component {
    state = {
        matrixWidth: matrixSizeDefault,
        matrixHeight: matrixSizeDefault,
        probability: 0.5,
        domains: [],
        statistic: [],
        domainsCount: 0,

        arr: getArrayEmpty(matrixSizeDefault, matrixSizeDefault)
    };

    updateMatrixItemState = (x, y) => {
        const arr = this.state.arr;
        arr[x][y].value = Number(!arr[x][y].value);
        arr[x][y].color = '#ffffff';
        this.setState({arr});
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

    coloringDomains = () => {
        const domains = this.state.domains;
        const matrix = this.state.arr;
        domains.forEach((domain) => {
            const color = getRandomColor();
            domain.forEach( (item) => {
                matrix[item.y][item.x].color = color;
            })
        });

        this.setState({arr: matrix})
    };

    createMatrix = () => {
        const arr = getArrayEmpty(this.state.matrixWidth, this.state.matrixHeight);

        this.setState({arr, domainsCount: 0})
    };



    fillMatrix = () => {
        const arr = getArrayEmpty(this.state.matrixWidth, this.state.matrixHeight);

        for (let x = 0; x < this.state.matrixHeight; x++) {
            for (let y = 0; y < this.state.matrixWidth; y++) {
                const random = Math.random();
                arr[x][y].value = (random <= this.state.probability) ? 1 : 0;
            }
        }

        this.setState({arr}, () => {this.countDomains();})
    };

    countDomains = () => {
        const domains = findDomains(this.state.arr);
        const statistic = updateStatistic(this.state.statistic, {
            probability: this.state.probability,
            domainsCount: domains.length,
            matrixSize: `${this.state.matrixWidth}*${this.state.matrixHeight}`
        });
        this.setState({domains, statistic, domainsCount: domains.length}, () => {this.coloringDomains();});
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
                        <button type="button" className="btn btn-outline-secondary btn-active" onClick={this.createMatrix}>Построение матрицы</button>
                        <button type="button" className="btn btn-outline-secondary btn-active" onClick={this.countDomains}>Подсчет доменов в матрице</button>
                        <button type="button" className="btn btn-outline-secondary btn-active" onClick={this.fillMatrix}>Автозаполнение</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12">
                        <div>Количество доменов: {this.state.domainsCount}</div>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-12">
                        <div className="table-responsive">
                            <Matrix arr={this.state.arr} onClick={this.updateMatrixItemState}/>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-12">
                        <div className="table-responsive">
                            <Statistic statistic={this.state.statistic} onClick={this.updateMatrixItemState}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
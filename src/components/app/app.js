import React from 'react';
import InputField from "../input/input-field";
import Matrix from "../matrix/matrix";

import './app.css';

export default class App extends React.Component {
    state = {
        matrixWidth: 10,
        matrixHeight: 10,
        probability: 0.5,
        domainCount: 0,

        arr: [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
        ]
    };

    updateMatrixItemState = (x, y) => {
        const arr = this.state.arr;
        arr[x][y] = Number(!arr[x][y]);
        this.setState({arr});
    };

    updateCount = (count) => {
        this.setState({ domainCount: count });
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

    fill(data, x, y) {
        let dom = [];
        const flow = function (x, y) {
            if (x >= 0 && y < data.length && y >= 0 && x < data[y].length) {
                if (Number(data[y][x]) === 1) {
                    data[y][x] = 0;
                    dom.push({x: x, y: y});
                    flow(x - 1, y);
                    flow(x + 1, y);
                    flow(x, y - 1);
                    flow(x, y + 1);
                }
            }
        };
        flow(x, y);
        if (dom.length > 0) {
            return dom
        }
    }

    // getRandomColor = () => {
    //     const num = Math.random()*(255**3);
    //     const r = Math.ceil(num % 255);
    //     const g = Math.ceil(((num-r)/255)%255);
    //     const b = Math.ceil(((((num-r)/255)-g)/255)%255);
    //     return `#${this.dec2hex(r)}${this.dec2hex(g)}${this.dec2hex(b)}`
    // };

    // dec2hex = (decNum) => {
    //     let hexNum = decNum.toString(16);
    //     if (hexNum.length === 1){
    //         hexNum = `0${hexNum}`;
    //     }
    //     return hexNum
    // };

    createMatrix =() => {
        const arr = [];

        for (let i = 0; i < this.state.matrixHeight; i++) {
            arr.push(Array(this.state.matrixWidth).fill(0));
        }

        this.setState({arr})
    };

    findDomains = () => {
        let count = 0;
        const domains = [];
        const arr = this.state.arr.map((arr) => {
            return arr.slice();
        });

        for (const rowNumber in arr) {
            for (const columnNumber in arr[rowNumber]) {
                if (Number(arr[rowNumber][columnNumber]) === 1) {
                    domains.push(this.fill(arr, parseInt(columnNumber), parseInt(rowNumber)));
                    count++;
                }
            }
        }

        this.updateCount(count);

        return domains
    };

    showDomains = () => {
        this.findDomains();
    };

    result = () => {
        this.showDomains();
    };

    render() {
        console.log(this.state.arr);
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
                        <button type="button" className="btn btn-outline-secondary btn-active" onClick={this.result}>Подсчет доменов в матрице</button>
                        <button type="button" className="btn btn-outline-secondary btn-active">Автозаполнение</button>
                    </div>
                </div>
                <div className="row mt-3 text-center">
                    <div className="col-12">
                        <Matrix arr={this.state.arr} onClick={this.updateMatrixItemState}/>
                    </div>
                </div>
            </div>
        );
    }
}
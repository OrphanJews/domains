import React, { Component } from 'react';
import InputListItem from './input-list-item';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class InputList extends Component {
    render() {
        return (
            <div>
                <InputListItem label="Ширина" id="matrix-width"/>
                <InputListItem label="Высота" id="matrix-height"/>
                <InputListItem label="Вероятность" id="probability" min="0.1" max="0.9" step="0.1" defaultValue="0.5"/>
            </div>
        );
    }
}
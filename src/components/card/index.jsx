import React, { Component } from 'react';
import { Box } from './styles';

export default class Card extends Component {
    render() {
        return <Box onClick={this.props.onClick}>{this.props.children}</Box>;
    }
}

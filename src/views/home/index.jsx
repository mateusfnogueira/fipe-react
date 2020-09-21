import React, { Component } from 'react';
import * as fipe from '../../domain/services/fipeCars';
import Text from '../../components/text';
import { Col, Container, Row } from '../../styles/grid';
import Card from '../../components/card';
import Colors, { Opacity } from '../../styles/colors';

export default class Home extends Component {
    state = {
        cars: [],
        models: [],

        marcas: true,
        modelos: false,
    };

    componentDidMount() {
        this.getCars();
    }

    render() {
        return (
            <Container>
                {this.state.marcas ? (
                    <>
                        <Text
                            align={'center'}
                            size={50}
                            weigth={700}
                            mt={32}
                            mb={50}
                            color={Colors.primary}
                        >
                            Marcas
                        </Text>

                        <Row>
                            {this.state.cars.map(car => (
                                <Col xs={12} md={6} xl={3} key={car.codigo}>
                                    <Card
                                        onClick={() =>
                                            this.getModels(car.codigo)
                                        }
                                    >
                                        <Text
                                            align={'center'}
                                            weigth={700}
                                            size={20}
                                            mt={12}
                                            uppercase
                                        >
                                            {car.nome}
                                        </Text>

                                        <Text
                                            align={'right'}
                                            weigth={700}
                                            mt={24}
                                            color={Colors.grey + Opacity.op30}
                                            size={12}
                                        >
                                            Código: {car.codigo}
                                        </Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                ) : (
                    <>
                        <Text
                            align={'center'}
                            size={35}
                            weigth={700}
                            mt={15}
                            mb={35}
                            color={Colors.primary}
                        >
                            Modelos
                        </Text>

                        <Row>
                            {this.state.models.map(modelo => (
                                <Col xs={12} md={6} xl={3} key={modelo.codigo}>
                                    <Card>
                                        <Text
                                            align={'center'}
                                            weigth={700}
                                            size={20}
                                            mt={12}
                                            uppercase
                                        >
                                            {modelo.nome}
                                        </Text>

                                        <Text
                                            align={'right'}
                                            weigth={700}
                                            mt={24}
                                            color={Colors.grey + Opacity.op30}
                                            size={12}
                                        >
                                            Código: {modelo.codigo}
                                        </Text>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                )}
            </Container>
        );
    }

    getCars() {
        fipe.loadCars()
            .then(data => {
                this.onLoadCars(data);
            })
            .catch(err => {
                this.onFailure(err);
            });
    }

    onLoadCars(cars) {
        this.setState({ cars });
    }

    getModels(model) {
        fipe.loadModels(model)
            .then(data => {
                this.onLoadModels(data.modelos);
            })
            .catch(err => {
                this.onFailure(err);
            });
    }

    onLoadModels(models) {
        this.setState(
            {
                marcas: false,
                modelos: true,
                models,
            },
            () => {
                console.log(this.state.models);
            },
        );
    }

    onFailure(err) {
        alert(err);
    }
}
import { Button, Container, Row, Text } from '@nextui-org/react';

const IntervalFilter = ({increaseInterval}) => {
    return (
        <Container>
            <Row justify="center" align="center">
                <Text h6>Interval</Text>
            </Row>
            <Row>
                <Button.Group size="sm">
                    <Button onClick={() => increaseInterval("1d")}>1D</Button>
                    <Button onClick={() => increaseInterval("1wk")}>1W</Button>
                    <Button onClick={() => increaseInterval("1mo")}>1MO</Button>
                </Button.Group>
            </Row>
        </Container>
    )
}


export default IntervalFilter
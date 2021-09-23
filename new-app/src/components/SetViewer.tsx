import {Col, Alert} from 'react-bootstrap'
import {Set} from '../interfaces/set'
export function SetViewer({set}: 
    {set: Set}): JSX.Element {
    return <Col>
    <Alert variant="primary">
        <Alert.Heading>We asked 100 people:</Alert.Heading>
        <p>
            {set.question}
        </p>
    </Alert>
    </Col>
}
import {Col} from 'react-bootstrap'
import {Set} from '../interfaces/set'
export function SetViewer({set}: {set: Set}): JSX.Element {
    return <Col>
    <div>Question: {set.Question}</div></Col>
}
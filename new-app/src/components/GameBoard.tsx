import {Table, Button} from 'react-bootstrap'
import {Set} from '../interfaces/set'
export function GameBoard({set, answerRevealed, reveal}: 
    {set: Set,answerRevealed: boolean, reveal: (r:boolean) =>void}): JSX.Element {
        return <Table bordered>
            <tbody>
                <tr>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed && set.a1}</Button></td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>8</td>
                </tr>
            </tbody>
        </Table>
    }
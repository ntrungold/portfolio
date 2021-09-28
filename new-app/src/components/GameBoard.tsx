import {Table, Button} from 'react-bootstrap'
import {Set} from '../interfaces/set'
export function GameBoard({set, answerRevealed, reveal}: 
    {set: Set,answerRevealed: boolean, reveal: (r:boolean) =>void}): JSX.Element {
        return <Table bordered>
            <tbody>
                <tr>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 1: set.a1}</Button></td>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 5: set.a5}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 2: set.a2}</Button></td>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 6: set.a6}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 3: set.a3}</Button></td>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 7: set.a7}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 4: set.a4}</Button></td>
                    <td><Button onClick={() => reveal(!answerRevealed)}>{answerRevealed ? 8: set.a8}</Button></td>
                </tr>
            </tbody>
        </Table>
    }
import {Table, Button} from 'react-bootstrap'
import {Set} from '../interfaces/set'
export function GameBoard({set, 
    answerRevealed1, reveal1,
    answerRevealed2, reveal2,
    answerRevealed3, reveal3,
    answerRevealed4, reveal4,
    answerRevealed5, reveal5,
    answerRevealed6, reveal6,
    answerRevealed7, reveal7,
    answerRevealed8, reveal8,
}: 
    {set: Set,
        answerRevealed1: boolean,  reveal1: (r:boolean) =>void,
        answerRevealed2: boolean,  reveal2: (r:boolean) =>void,
        answerRevealed3: boolean,  reveal3: (r:boolean) =>void,
        answerRevealed4: boolean,  reveal4: (r:boolean) =>void,
        answerRevealed5: boolean,  reveal5: (r:boolean) =>void,
        answerRevealed6: boolean,  reveal6: (r:boolean) =>void,
        answerRevealed7: boolean,  reveal7: (r:boolean) =>void,
        answerRevealed8: boolean,  reveal8: (r:boolean) =>void
    }): JSX.Element {
        return <Table bordered>
            <tbody>
                <tr>
                    <td><Button onClick={() => reveal1(!answerRevealed1)}>{answerRevealed1 ? 1: set.a1}</Button></td>
                    <td><Button onClick={() => reveal5(!answerRevealed5)}>{answerRevealed5 ? 5: set.a5}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal2(!answerRevealed2)}>{answerRevealed2 ? 2: set.a2}</Button></td>
                    <td><Button onClick={() => reveal6(!answerRevealed6)}>{answerRevealed6 ? 6: set.a6}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal3(!answerRevealed3)}>{answerRevealed3 ? 3: set.a3}</Button></td>
                    <td><Button onClick={() => reveal7(!answerRevealed7)}>{answerRevealed7 ? 7: set.a7}</Button></td>
                </tr>
                <tr>
                    <td><Button onClick={() => reveal4(!answerRevealed4)}>{answerRevealed4 ? 4: set.a4}</Button></td>
                    <td><Button onClick={() => reveal8(!answerRevealed8)}>{answerRevealed8 ? 8: set.a8}</Button></td>
                </tr>
            </tbody>
        </Table>
    }
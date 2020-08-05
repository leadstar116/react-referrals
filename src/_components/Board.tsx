import React from 'react'
import Square from './Square'

function Board() {

    function handleClick(id: number) {
        console.log(id)
    }
    return(
        <div>
            <div className="board-row">
                <Square id={1} handleClick={handleClick}/>
                <Square id={2} handleClick={handleClick}/>
                <Square id={3} handleClick={handleClick}/>
            </div>
            <div className="board-row">
                <Square id={4} handleClick={handleClick}/>
                <Square id={5} handleClick={handleClick}/>
                <Square id={6} handleClick={handleClick}/>
            </div>
            <div className="board-row">
                <Square id={7} handleClick={handleClick}/>
                <Square id={8} handleClick={handleClick}/>
                <Square id={9} handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default Board
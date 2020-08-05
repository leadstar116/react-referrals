import React from 'react'

type Props = {
    id: number,
    handleClick: (id: number)=>void
}
function Square(props: Props) {
    function handleClick() {
        props.handleClick(props.id)
    }
    return (
        <div onClick={handleClick}>
            <span className="square-span">
            {props.id}
            </span>
        </div>
    )
}

export default Square
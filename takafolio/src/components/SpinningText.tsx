import React from 'react'

interface SpinningTextProps {
    texto: string
}

export default function SpinningText(props: SpinningTextProps) {



    return (
        <div className='text-white'>

            <span className='rotate-45'>

                {props.texto.split('').map((letra) => (
                    `${letra}`))

                    .join(' ')}
            </span>
        </div>
    )
}

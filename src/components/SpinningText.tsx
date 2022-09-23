import React from 'react'

interface SpinningTextProps {
    texto: string
}

export default function SpinningText(props: SpinningTextProps) {



    return (
        <div className='absolute w-full h-full'>


            {props.texto.split('').map((letra, multiplier) => (
                <span className={`rotate-${multiplier * 5}  text-xs left-1/2 absolute text-red-300 origin-[0_100px]`}>{letra}</span>
            ))
            }

        </div>
    )
}

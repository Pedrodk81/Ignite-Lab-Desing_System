import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ReactNode } from 'react';


export interface TextProps{
    size?: 'sm' | 'md'| 'lg';
    children: ReactNode; // qualquer coisa valida no React
    asChild?: boolean
    className?: string

}



export function Text({size = 'md', children, asChild, className}: TextProps){
    const Comp =  asChild ? Slot : 'span'

    /* a ferramenta slot do radix-ui é utilizada para momentos que vc quiser
     mudar a tag do elemento, sem que haja modificação do estilo */

    return(
        <Comp 
            className=
            {clsx(
                'test-gray-100 font-sans',
                {
                    'text-xs': size === 'sm',
                    'text-sm': size === 'md',
                    'text-md': size === 'lg',
                },
                className,
    )}
    >
        {children}
    </Comp>
    )
}
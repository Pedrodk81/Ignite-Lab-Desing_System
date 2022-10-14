import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ReactNode } from 'react';


export interface HeadingProps{
    size?: 'sm' | 'md'| 'lg';
    children: ReactNode; // qualquer coisa valida no React
    asChild?: boolean
    className?: string

}



export function Heading({size = 'md', children, asChild, className}: HeadingProps){
    const Comp =  asChild ? Slot : 'h2'

    /* a ferramenta slot do radix-ui é utilizada para momentos que vc quiser
     mudar a tag do elemento, sem que haja modificação do estilo */

    return(
        <Comp 
            className=
            {clsx(
                'test-gray-100 font-bold font-sans',
                {
                    'text-lg': size === 'sm',
                    'text-xl': size === 'md',
                    'text-2xl': size === 'lg',
                },
                className,
    )}
    >
        {children}
    </Comp>
    )
}
import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode; // qualquer coisa valida no React
    asChild?: boolean

}



export function Button({ children, asChild, className, ...props}: ButtonProps){
    const Comp =  asChild ? Slot : 'button'

    /* a ferramenta slot do radix-ui é utilizada para momentos que vc quiser
     mudar a tag do elemento, sem que haja modificação do estilo */

    return(
        <Comp 
            className=
            {clsx(
                'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors focus:ring-2 ring-white hover:bg-cyan-300',
                className,
                )}
    {...props}
    >
        {children}
    </Comp>
    )
}
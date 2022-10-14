import { Text, TextProps } from "./Text";
import {Meta, StoryObj} from '@storybook/react'

export default{
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loren Ipsum',
        size:'md',
    },
    //forma de controlar as características desse meu component
    argTypes:{
        size: {
            options: ['sm', 'md', 'lg'],
            control:{
                type:'inline-radius'
            }
        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {
   
}

export const Small: StoryObj<TextProps> = {
    args:{
        size:'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args:{
        size:'lg'
    }
}
export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:(
            <p> testando </p>
        )
    },
    argTypes:{
        children:{
            table:{
                disable: true
            }
        },
        asChild:{
            table:{
                disable: true
            }
        }
    }
}
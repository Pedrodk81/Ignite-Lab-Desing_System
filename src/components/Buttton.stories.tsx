import { Button, ButtonProps } from "./Button";
import {Meta, StoryObj} from '@storybook/react'

export default{
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Loren Ipsum',
        size:'md',
    },
    //forma de controlar as características desse meu component
    argTypes:{}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
   
}

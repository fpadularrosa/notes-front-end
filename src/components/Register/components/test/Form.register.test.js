import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ModalRegister from '../../ModalRegister.jsx';
import Register from '../Register.jsx';
import Input from '../../../Input';
import { expect, jest, test } from '@jest/globals';
import Button from '../../../Button.jsx';

test(
    'Should onSubmit invoke when form is submitted', 
    () => 
    {
        const component = render(<Register/>);

        const mockSubmit = jest.fn();

        window.HTMLFormElement.prototype.submit = _ => mockSubmit();

        const form = component.container.querySelector('form');
        const submit = component.container.querySelector('button');

        fireEvent.click(submit);
        form.submit();

        expect(mockSubmit.mock.calls).toHaveLength(1);
        form.submit();
        expect(mockSubmit.mock.calls).toHaveLength(2);
    }
);

test(
    'The button is not disabled and its value is Register. ', 
    () => 
    {
        render(<Button>Register</Button>);

        expect(screen.getByText('Register')).toHaveTextContent('Register')
        expect(screen.getByText('Register')).not.toBeDisabled();
    }
);

test(
    'Should show Modal Register. ', 
    () => 
    {
        render(<ModalRegister/>);

        const header = screen.getByText('Register');
        const label = screen.getByText('X');
        const h3 = screen.getByText('Fast and easy.');

        expect(header).toBeInstanceOf(HTMLElement);
        expect(label).toBeInstanceOf(HTMLElement);
        expect(h3).toBeInstanceOf(HTMLElement);
    }
);

test(
    'The display value of button should be Register',
    () => 
    {
        expect(render(<Button>Register</Button>).container.textContent).toBe('Register');
    }
);

test(
    'Inputs should not be disabled and their content should be empty.',
    () => 
    {
        render(<Register/>);

        expect(screen.getByPlaceholderText('password')).not.toBeDisabled();
        expect(screen.getByPlaceholderText('password')).toHaveTextContent('');

        expect(screen.getByPlaceholderText('you@email.com')).not.toBeDisabled();
        expect(screen.getByPlaceholderText('you@email.com')).toHaveTextContent('');

        expect(screen.getByPlaceholderText('Name')).not.toBeDisabled();
        expect(screen.getByPlaceholderText('Name')).toHaveTextContent('');
    }
);

test(
    'The value of the input should change when a user types and should show the input. ',
    () => 
    {
        const { rerender } = render(<Input placeholder='Name' onChange={() =>{}} value='h'/>);

        expect(screen.getByPlaceholderText('Name').getAttribute('value')).toEqual('h');
        expect(screen.getByDisplayValue('h') instanceof HTMLElement).toBe(true);

        rerender(<Input placeholder='Name' onChange={() =>{}} value='hola'/>)
        expect(screen.getByPlaceholderText('Name').getAttribute('value')).toEqual('hola');
    }
);
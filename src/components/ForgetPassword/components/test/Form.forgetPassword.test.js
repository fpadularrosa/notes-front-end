import { prettyDOM } from '@testing-library/dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { jest, test, expect } from '@jest/globals';
import FormForgotPassword from '../Form.forgotPassword.jsx';
import RouterWrapper from '../../../../utils/RouterWrapper.jsx';
import Input from '../../../Input.jsx';
import Button from '../../../Button.jsx';


test(
    'onChange function should fires when an user writes.', 
() => 
{ 
    render(<FormForgotPassword/>, 
    { 
        wrapper: RouterWrapper 
    });

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'h' } });

    expect(screen.getByDisplayValue('h') instanceof HTMLElement).toBe(true);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'horacio' } });

    expect(screen.getByPlaceholderText('you@email.com').getAttribute('value')).toEqual('horacio');
});

test(
    'The unique Input should have type email',
    () => 
    {
        expect(render(<Input type='email' placeholder='you@email.com'/>).getByPlaceholderText('you@email.com').getAttribute('type')).toBe('email');
    }
);

test(
    'The display value of button should be Search',
    () => {
        expect(render(<Button>Search</Button>).container.textContent).toBe('Search');
    }
);

test(
    'Should onSubmit invoke when form is submitted', 
    () => 
    {
        const component = render(<FormForgotPassword/>, { wrapper: RouterWrapper });

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
    'Router href attribute will be /',
    () => 
    {
        render(<FormForgotPassword/>, { wrapper: RouterWrapper });

        expect(screen.getByTitle('link-router').getAttribute('href')).toBe('/');
    }
);
import { jest, test, expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import FormLogin from '../Form.login';
import RouterWrapper from '../../../../utils/RouterWrapper';

test(
    'Attribute type of password input should be password',
    () => {
        expect(render(<FormLogin setLogged={()=>{}}/>, { wrapper: RouterWrapper }).getByPlaceholderText('Password').getAttribute('type')).toBe('password');
    }
);



test(
    'Href link should be sends you to /identify-recover',
    () => 
    {
        const component = render(<FormLogin setLogged={false}/>, { wrapper: RouterWrapper });

        expect(component.getByRole('link').getAttribute('href')).toBe('/identify-recover');
    }
);

test(
    'Should onSubmit invoke when form is submitted and setLogged should change value',
    ()=>
    {      
        const mockLogged = jest.fn();

        const component = render(<FormLogin setLogged={()=>{}}/>, { wrapper: RouterWrapper });

        window.HTMLFormElement.prototype.submit = _ => mockLogged();

        const form = component.getByTestId('formInHome');

        const submit = component.getByTestId('buttonFormHome');
        
        fireEvent.click(submit);

        form.submit();

        expect(mockLogged.mock.calls).toHaveLength(1);
        form.submit();

        expect(mockLogged.mock.calls).toHaveLength(2);
    }
);
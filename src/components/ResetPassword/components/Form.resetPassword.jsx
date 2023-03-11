import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';
import Button from '../../Button';
import Form from '../../Form';
import Input from '../../Input';

const FormResetPassword = () => {
    const [inputsResetPassword, setInputsResetPassword] = useState({
        newPassword: '',
        repeatPassword: ''
    });

    const handleChange = (e) => {
        setInputsResetPassword({
            ...inputsResetPassword,
            [e.target.name]: e.target.value
        });
    };

    const tokenResetPassword = window.location.href.split('/').pop();
    const id = window.location.href.split('/')[4];

    const handleSubmit = async (e) => {
        e.preventDefault();
        let err;
        if(inputsResetPassword.newPassword !== inputsResetPassword.repeatPassword) err = new Error('Passwords dont match.');
        if(err){ 
            Swal.fire('Something went wrong.', err.toString().split(':')[1], 'error');
            setInputsResetPassword({
                newPassword: '',
                repeatPassword: ''
            });
            return;
        };

        try {
            const response = await axios.put(`http://localhost:3001/api/auth/reset-password/${id}/${tokenResetPassword}`, { inputsResetPassword, userId:id, tokenResetPassword });
            response.status && Swal.fire('Well done', response.data, 'success');
        } catch (error) {
          Swal.fire('Something went wrong.', error.response.data, 'error');  
        };
        
        setInputsResetPassword({
            newPassword: '',
            repeatPassword: ''
        });
        e.target.reset();
    };

  return (
    <>
        <Form className='bg-white xl:flex xl:flex-col xl:justify-center xl:items-center xl:space-y-3 xl:pt-4 border-t-[1px]' onSubmit={e => handleSubmit(e)}>
            <Input className='border border-gray-400 xl:pl-2 xl:w-[330px] xl:h-8' onChange={e => handleChange(e)} placeholder='New password' type='password' name='newPassword' value={inputsResetPassword.newPassword}></Input>
            <Input className='border border-gray-400 xl:pl-2 xl:w-[330px] xl:h-8' onChange={e => handleChange(e)} placeholder='Repeat password' type='password' name='repeatPassword' value={inputsResetPassword.repeatPassword}></Input>
            <Button className='flex items-center justify-center h-10 text-xl text-white bg-purple-500 border border-purple-500 shadow w-44 hover:bg-purple-600 place-self-center'>Continue</Button>
        </Form>
    </>
  );
};

export default FormResetPassword;
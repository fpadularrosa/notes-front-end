import { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Input from '../../Input';
import Button from '../../Button';
import axios from 'axios';
import Form from '../../Form';

const FormForgotPassword = () => {
    const [email, setEmail] = useState({email: ''});
    const handleChange = (e) => {
        setEmail({
            email: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:3001/api/auth/forgot-password', email);

        data.success && Swal.fire('Well done.', data.message, 'success');
        !data.success && Swal.fire('Something went wrong.', data.error, 'error');
        setEmail({
            email: ''
        });
        e.target.reset();
    };
  return (
    <>
        <Form className='bg-white xl:flex xl:flex-col xl:py-2' onSubmit={e => handleSubmit(e)}>
            <Input className='my-4 border border-slate-300 xl:h-10 xl:w-96 xl:pl-2 focus:outline-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='you@email.com' type='email' name='email' onChange={e => handleChange(e)} value={email.email} />
            <div className='xl:flex xl:justify-end xl:space-x-2 xl:pt-2 border-t-[1px] ' >
                <Link className='w-[75px] h-10 flex justify-center items-center place-self-center bg-slate-200 font-semibold' title='link-router' to='/'>Cancel</Link>
                <Button className='w-[75px] h-10 flex justify-center items-center place-self-center bg-purple-500 text-white font-semibold hover:bg-purple-600'>Search</Button>
            </div>
        </Form>
    </>
  );
};

export default FormForgotPassword;
import { useState } from 'react';
import { postRegister } from '../../../redux/actions';
import Button from '../../Button';
import Form from '../../Form';
import Input from '../../Input';

const Register = () => {
    const [newUser, setNewUser] = useState(
    {
        name: '',
        email: '',
        password: '',
        gender: ''
    });
    
    const handleChange = e => {
        if(e.target.name === 'gender')
        {
            setNewUser({
                ...newUser,
                gender: e.target.id
            });
        };
        if(e.target.name !== 'gender')
        {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value
            });
        };
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await postRegister(newUser);
        
        setNewUser({
            name: '',
            email: '',
            password: '',
            gender: ''
        });
        e.target.reset();
    };
  return (
    <>
      <Form className='pb-6 xl:relative xl:flex xl:flex-col ' onSubmit={e => handleSubmit(e)}>
          <div className='xl:p-4'>
              <div className='flex flex-col items-center justify-center'>
                <div>
                    <div className='space-x-2 space-y-1 '>
                        <Input className='h-8 xl:border xl:pl-2 border-slate-300 bg-slate-100' placeholder='Name' name='name' type='text' onChange={e => handleChange(e)} value={newUser.name}></Input>
                        <Input className='h-8 xl:border xl:pl-2 empty:border-slate-300 bg-slate-100 focus:outline-none disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500' placeholder='you@email.com' name='email' type='email' onChange={e => handleChange(e)} value={newUser.email}></Input>
                        <div className='flex justify-center'>
                        <Input className='h-8 xl:pl-2 xl:border xl:w-60 border-slate-300 bg-slate-100 ' type='password' name='password' placeholder='password' onChange={e => handleChange(e)} value={newUser.password}></Input>
                        </div>
                    </div>
                    <div className='items-start justify-start place-items-start xl:my-4'>
                        <div>
                            <label>Select your gender</label>
                        </div>
                        <div className='flex flex-col'>
                            <div>
                                <Input onChange={e => handleChange(e)} name='gender' type='radio' id='Male' value={newUser.gender}></Input>
                                <label>Male</label>
                            </div>
                            <div>
                                <Input onChange={e => handleChange(e)} name='gender' type='radio' id='Female' value={newUser.gender}></Input>
                                <label>Female</label>
                            </div>
                            <div>
                                <Input onChange={e => handleChange(e)} name='gender' type='radio' id='Non-Binarie' value={newUser.gender}></Input>
                                <label>Non-Binarie</label>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div className='xl:flex xl:justify-end xl:mr-3'>
            <Button id='buttform' className='text-white bg-purple-500 border border-purple-500 cursor-pointer hover:xl:bg-purple-900 xl:flex xl:items-center xl:justify-center xl:w-48 xl:h-10 xl:text-xl xl:place-self-center'>Submit</Button>
          </div>
      </Form>
    </>
  );
};

export default Register;
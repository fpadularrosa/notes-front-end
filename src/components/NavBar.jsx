import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/actions';
import Button from './Button';
import FormLogin from './Login/components/Form.login';

const NavBar = ({ logged, setLogged }) => {
  const [newNot, setNewNot] = useState(false);
  const [note, setNote] = useState('');
  
  const handleLogout = _ => {
    localStorage.removeItem('loggedUser');
    setLogged(null);
  };
  
  const dispatch = useDispatch();

  const handleAddNote = async (e) =>
  {
    e.preventDefault(); 
    dispatch(addNote({userId: JSON.parse(localStorage.getItem('loggedUser'))._id, note})); 
    setNote('');
    setNewNot(false);
    e.target.reset();
  };
  
  return (
    <nav className='shadow-md xl:pt-2 xl:pb-2 xl:bg-[#c5c5c5] xl:fixed w-[100%] top-0'>
    {
      logged ? 
      <ul className='xl:flex xl:flex-row xl:justify-around'>
        <li>
          <h1 className='text-slate-600 xl:overline xl:font-bold xl:text-4xl font-Raleway'>Notes for work</h1>
        </li>
        <li className='xl:flex xl:flex-row'>
          <button className='text-slate-100 active:xl:bg-slate-700 xl:border xl:bg-slate-500 hover:xl:bg-slate-300 hover:xl:text-slate-700 xl:p-2 xl:font-semibold xl:shadow' onClick={e => setNewNot(!newNot)}>ADD NOTE</button>
          {
            newNot && 
            <form onSubmit={e => handleAddNote(e)} className='w-[200px] flex'>
              <input onChange={e => setNote(e.target.value)} placeholder='new note here' value={note} type='text'></input>
              <button type='submit'>Add</button>
            </form>
          }
        </li>
        <li className=''>
          <Button className='text-slate-100 active:xl:bg-slate-700 xl:border xl:bg-slate-500 hover:xl:bg-slate-300 hover:xl:text-slate-700 xl:p-2 xl:font-semibold xl:shadow' onClick={e => handleLogout()}>LOG OUT</Button>
        </li>
      </ul> : 
      <ul className='xl:flex xl:flex-row xl:justify-around'>
        <li>
          <h1 className='text-red-600 xl:font-bold xl:text-4xl font-Raleway'>notes for work</h1>
        </li>
        <li>
          <FormLogin/>
        </li>
      </ul>
    }
    </nav>
  );
};

export default NavBar;
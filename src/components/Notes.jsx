import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { notesDatabase } from '../redux/actions';
import Note from './Note';
import '../App.css';

const Notes = () => {
  const notes = useSelector(store => store?.notes);

  const dispatch = useDispatch();

  useEffect(_ => {
    dispatch(notesDatabase());
  });

  const notesOfUserLogg = notes?.filter(not => not.userId === JSON.parse(localStorage.getItem('loggedUser'))._id);
  
  return (
    <>
      <div className='xl:mx-20 justify-center xl:flex xl:flex-wrap xl:max-w-[1200px]'>
        {
          notesOfUserLogg?.map(not => <Note key={not._id} id={not._id} note={not.note}/>)
        }
      </div>
    </>
  );
};

export default Notes;
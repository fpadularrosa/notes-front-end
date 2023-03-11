import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/actions';
import deleteIcon from '../deleteIcon.png';
import Swal from 'sweetalert2';

const Note = ({ id, note }) => {

  const dispatch = useDispatch();

  return (
    <div className='flex shadow flex-col xl:m-8 h-auto bg-blue-200 border min-w-[260px] border-slate-300'> 
        <div className='flex justify-end cursor-pointer' onClick={e => {
          window.confirm('Are you sure?') ? dispatch(deleteNote({ id })) : Swal.fire('The note was not deleted.', 'Good', 'success');
        }}>
          <img className='xl:max-w-[37px]' src={deleteIcon} alt='deleteIcon'></img>
        </div>
        <div className='flex justify-center h-auto break-all p-auto'>
          <strong className='flex xl:max-w-[180px] xl:pb-5 xl:pt-2'>{note}</strong> 
        </div>
    </div>
  );
};

export default Note;
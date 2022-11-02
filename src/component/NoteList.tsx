import { INote } from './Note.type';
import './NoteList.style.css';

type props = {
    list: INote[];
    onDeleteClickHnd: (data:INote)=> void
    onEdit: (data:INote)=> void;
};

const NoteList = (props: props) => {
    const { list, onDeleteClickHnd, onEdit} = props;
    
    return  (
    <div> 
        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            {list.map((note) => {
                console.log(note);
                return (
                    <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>{note.description}</td>
                        <td>
                            <div>
                                <input type='button' className='btn' value='Edit' 
                                onClick={()=> onEdit(note)}/>
                                <input type='button' className='btn-btn'  value='Delete' 
                                onClick={() => onDeleteClickHnd(note)}/>
                            </div>
                        </td>
                    </tr>

                );
            })}
        </table>
    </div>
    );
};



export default NoteList;
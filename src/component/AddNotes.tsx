import { useState } from 'react';
import { INote } from './Note.type';
import './NotesForm.style.css';



type Props = {
    onBackBtnClickHnd : () => void
    onSubmitClickHnd : (data: INote) => void 
};
const AddNotes = (props:Props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {onBackBtnClickHnd, onSubmitClickHnd} = props;

    const onTitleChangeHnd = (e:any) => {
        setTitle(e.target.value);
    };
    const onDescriptionChangeHnd = (e:any) => {
        setDescription(e.target.value);
    };

    const onsubmitBtnclickHnd = (e:any) => {
        e.preventDefault();
        const data: INote = {
            id: new Date().toJSON().toString(),
            title:title,
            description: description
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
    };



    return (
    <div className="form-container">
        <div>
            <h3>Add Notes form</h3>
        </div>
            <form onSubmit={onsubmitBtnclickHnd}>
                <div>
                    <label>Title : </label>
                    <input type='text' value={title} onChange={onTitleChangeHnd}/>
                </div>
                <div>
                    <label>Description : </label>
                    <input type='text' value={description} onChange={onDescriptionChangeHnd}/>
                </div>
                <div>
                    <input type='button' value='Back' onClick={onBackBtnClickHnd}/>
                    <input type='submit' value='Add Notes'/>
                </div>
            </form>
    </div>
    );
};

export default AddNotes;
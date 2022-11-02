import { INote } from "./Note.type";
import "./NotesForm.style.css";
import { useState } from 'react';


type Props = {
    data: INote;
    onBackBtnClickHnd : () => void;
    onUpdateClickHnd: (data: INote) => void
};

const EditNotes = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd, } = props;
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);

    const onTitleChangeHnd = (e:any) => {
        setTitle(e.target.value);
    };
    const onDescriptionChangeHnd = (e:any) => {
        setDescription(e.target.value);
    };

    const onsubmitBtnClickHnd = (e:any) => {
        e.preventDefault();
        const updateData: INote = {
            id: data.id,
            title:title,
            description: description,
        }
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();
    };
    return (
    <div className="form-container">
        <div>
            <h3>Add Notes form</h3>
        </div>
        <form onSubmit={onsubmitBtnClickHnd}>
            <div>
                <label>Title : </label>
                <input type='text' value={title} onChange={onTitleChangeHnd} />
            </div>
            <div>
                <label>Description : </label>
                <input type='text' value={description} onChange={onDescriptionChangeHnd} />
            </div>
            <div>
                <input type='button' value='Back' onClick={onBackBtnClickHnd} />
                <input type='submit' value='Update Data' />
            </div>
        </form>
    </div>
    );

};
export default EditNotes;

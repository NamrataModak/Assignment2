import { useEffect, useState } from 'react';
import AddNotes from './AddNotes';
import EditNotes from './EditNotes';
import './Home.style.css';
import { INote, PageEnum } from './Note.type';
import NoteList from './NoteList';

const Home = () => {
    const [noteList, setNoteList] = useState(
        [] as INote[]
    );

    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as INote);
    
    useEffect(() => {
        const listInString = window.localStorage.getItem('NoteList');
        if (listInString) {
            _setNoteList(JSON.parse(listInString));
        }
    }, []);



    const onAddNotesClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list);
    };

    const _setNoteList = (list: INote[]) => {
        setNoteList(list);
        window.localStorage.setItem('NoteList', JSON.stringify(list));
    }

    const addNotes = (data:INote) => {
       _setNoteList([...noteList, data]);
    };

    const deleteNotes = (data: INote) => {
        const indexToDelete = noteList.indexOf(data);
        const tempList = [...noteList];

        tempList.splice(indexToDelete, 1);
        _setNoteList(tempList);
    };

    const editNotesData = (data: INote) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };
    
    const updateData = (data: INote) => {
        const filterData = noteList.filter(x => x.id === data.id)[0];
        const indexOfRecord = noteList.indexOf(filterData);
        const tempData = [...noteList];
        tempData[indexOfRecord] = data;
        _setNoteList(tempData);
    }

    return (
        <>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input type='button' value='Add' 
                        onClick={onAddNotesClickHnd}
                        className='add-notes-btn'/>
                        <NoteList list={noteList} 
                        onDeleteClickHnd={deleteNotes}
                        onEdit={editNotesData} />
                    </>
                )}

                {shownPage === PageEnum.add && 
                <AddNotes onBackBtnClickHnd={showListPage} onSubmitClickHnd={addNotes}/>}

                {shownPage === PageEnum.edit && <EditNotes data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />}

            </section>


        </>
    );
};

export default Home;
import { AiOutlineDelete } from 'react-icons/ai';
const Note = ({ id, text, date, handleDelNote }) => {

    return (
        <div className="note__item" id={id}>
            <h3 className="note__title">{text}</h3>
            <div className='note__info'>
                <span className="note__date">{date}</span>
                <AiOutlineDelete onClick={()=>handleDelNote(id)} className="icon_del"/>
            </div>
        </div >
    )
}

export default Note
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option>{item}</option>)}               
            </select>
        </div>
    )
}

export default ListaSuspensa
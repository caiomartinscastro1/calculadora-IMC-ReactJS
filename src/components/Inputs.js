import '../css/Inputs.css';

function Inputs({name , id , value , placeholder , type , handleChange}){
    return(
        <>
            <input name={name} id={id} placeholder={placeholder} type={type} onChange={handleChange}/>
        </>
    );
}

export default Inputs;
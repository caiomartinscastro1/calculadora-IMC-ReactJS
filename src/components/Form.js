import Inputs from "./Inputs";
import '../css/Form.css';
import { useState , useEffect } from "react";

function Form(){

    const [dados , setDados] = useState({
        peso: 0,
        altura: 0
    });

    const [imc , setImc] = useState();
    const [message , setMessage] = useState('');

    const handleChange = (e) => {
        setDados({...dados , [e.target.name]: e.target.value});
    }

    useEffect(() => {
        let resultado = (dados.peso / (dados.altura * 2));
        setImc(resultado.toFixed(2))
        console.log(dados);
        if(dados.altura == 0 && dados.altura == 0){
            setMessage('Preencha os dados para prosseguir');
        }else if(imc < 18.5){
            setMessage('Abaixo do peso');
        }else if(imc >= 18.5 && imc <= 24.9){
            setMessage('Peso normal');
        }else if(imc >= 25 && imc <= 29.9){
            setMessage('Acima do peso');
        }else if(imc >= 30 && imc <= 34.9){
            setMessage('Obesidade I');
        }else if(imc >= 35 && imc <= 39.9){
            setMessage('Obesidade II');
        }else if(imc >= 40){
            setMessage('Obesidade III');
        }
    } , [dados]);


    return(
        <form className="AppForm">
            <h2>Calculadora de IMC</h2>

            <div>
                <Inputs
                    name={'peso'}
                    type={'number'}
                    id={'peso'}
                    placeholder={'Qual o seu peso atual...'}
                    handleChange={handleChange}
                />
            </div>
            <div>
                <Inputs
                    name={'altura'}
                    type={'number'}
                    id={'altura'}
                    placeholder={'Qual a sua altura atual...'}
                    handleChange={handleChange}
                />
            </div>
            <div>
                <h2>Seu imc: {imc}</h2>
                <h3>{message}</h3>
            </div>
        </form>
    );
}

export default Form;
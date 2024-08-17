import { useEffect } from "react";
import API_TELAS from '../../services/feedbatch';
import axios from "axios"; 
import imgAdd from '../../assets/add.png';

function Register(){
    const mockData = {
        key:"luisteste",
        type:"string",
        required: true,
        min:0, max:0
    }

    // Criar telas
    /*useEffect(() => {
        axios.post(API_TELAS, mockData)
            .then((res) => {
                console.log('resposta: ', res);
            })
            .catch((err) => {
                console.log('erro: ', err);
            });
    }, []);*/


    return(
        <section className="w-full h-[500px]">
            <div className="w-full h-[80px] flex justify-center items-center">
                <h4 className="text-2xl font-bold text-[#1ED760]">Cadastrar Campos e seus Parâmetros</h4>
            </div>

            <div className="w-full h-[350px] flex flex-row">
                <div className="w-[50%] h-full bg-[green]">
                    <div className="w-full h-[50px] bg-[red] flex justify-center items-center flex-row gap-[15px]">
                        <label>Key:</label>
                        <input type="text" placeholder="Digite o nome" />
                    </div>


                </div>

                <div className="w-[50%] h-full flex justify-center">
                    <img src={imgAdd} alt="login" className='h-full' />
                </div>
            </div>
        </section>
    )
}

export default Register;

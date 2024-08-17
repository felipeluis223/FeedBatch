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

                    <div className="w-full h-[50px] bg-[red] flex justify-center items-center flex-row gap-[15px]">
                        <label>Type:</label>
                        <select>
                            <option value='string'>String</option>
                            <option value='integer'>Integer</option>
                            <option value='boolean'>Boolean</option>
                        </select>
                    </div>

                    <div className="w-full h-[50px] bg-[red] flex justify-center items-center flex-row gap-[15px]">
                        <label>Required:</label>

                        <input type="radio" id="true" name="required" value="true" />
                        <label for="required">Sim</label>

                        <input type="radio" id="false" name="required" value="true" />
                        <label for="required">Não</label>
                    </div>

                    <div className="w-full h-[50px] bg-[red] flex justify-center items-center flex-row gap-[15px]">
                        <label>Min:</label>
                        <input type="text" placeholder="Digite o valor minimo" />

                        <label>Max:</label>
                        <input type="text" placeholder="Digite o valor maximo" />
                    </div>

                    <div className="w-full h-[50px] bg-[red] flex justify-center items-center flex-row gap-[15px]">
                        <button>Limpar</button>
                        <button>Cadastrar</button>
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

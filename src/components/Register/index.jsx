import { useEffect } from "react";
import API_TELAS from '../../services/feedbatch';
import axios from "axios"; 
import { BsFillPersonPlusFill, BsListUl, BsSortDownAlt, BsSortUp  } from "react-icons/bs";

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

            <div className="w-full flex flex-row">
                <div className="w-[40%] ml-[5%] h-full flex justify-center items-center flex-col bg-[#1f1f1f] py-[20px] rounded-md gap-[10px]">
                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px] ">
                        <label className="text-[#ffffff]">Key:</label>
                        <input type="text" placeholder="Digite o nome" className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#242424] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" />
                        <BsFillPersonPlusFill className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Type:</label>
                        <select className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#242424] text-[#1ED760] border-b-[1px] border-b-[#ffffff]">
                            <option value='string'>String</option>
                            <option value='integer'>Integer</option>
                            <option value='float'>Float</option>
                            <option value='boolean'>Boolean</option>
                        </select>
                        <BsListUl  className="text-lg text-[#ffffff]" />
                    </div>

                    
                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Min:</label>
                        <input type="text" placeholder="Digite o valor minimo" className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#242424] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" />
                        <BsSortUp  className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Max:</label>
                        <input type="text" placeholder="Digite o valor maximo" className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#242424] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" />
                        <BsSortDownAlt  className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Required:</label>

                        <input type="radio" id="true" name="required" value="true" />
                        <label for="required" className="text-[#1ED760] text-sm">Sim</label>

                        <input type="radio" id="false" name="required" value="true" />
                        <label for="required" className="text-[#1ED760] text-sm">Não</label>
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <button className="w-[150px] h-[40px] bg-[#242424] rounded-md text-[#1ED760] hover:bg-[#1ED760] hover:text-[#ffffff]">Limpar</button>
                        <button className="w-[150px] h-[40px] bg-[#242424] rounded-md text-[#1ED760] hover:bg-[#1ED760] hover:text-[#ffffff]">Cadatrar</button>
                    </div>

                </div>

                <div className="w-[50%] h-full flex justify-center">
                    <img src={imgAdd} alt="login" className='h-[400px]' />
                </div>
            </div>
        </section>
    )
}

export default Register;

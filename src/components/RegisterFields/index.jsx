import { useState, useEffect } from "react";
import FEEDBATCH from '../../services/feedbatch';
import axios from "axios"; 

import { BsFillPersonPlusFill, BsListUl, BsSortDownAlt, BsSortUp  } from "react-icons/bs";

import imgAdd from '../../assets/add.png';
import Title from "../Title";

function RegisterFields(){
    const [data, setData] = useState({
        key:'',
        type:'string',
        required: false,
        min:0, max:0
    });

    const handleOnChangeRegister = (event, key)=>{
        setData({ ...data, [key]: event.target.value });
    }

    // Função responsável por verificar e cadastrar os campos. Após o cadastro dos dados resetamos o input:
    const register = ()=>{
        if(data.key != ''){
            axios.post(`${FEEDBATCH}/telas`, data)
            .then((res) => {
                alert("Informações cadastradas com sucesso!");
                setData({
                    key:'',
                    type:'string',
                    required: false,
                    min:0, max:0
                }); 
            })
            .catch((err) => {
                alert("Ops! Tivemos um problema. Tente novamente mais tarde");
            });
        }else{
            alert('Por favor preencha todos os campos...')
        }
        
    }

    return(
        <section className="w-full h-[500px]">
            <Title description="Cadastrar Campos e seus Parâmetros" />

            <div className="w-full flex flex-row">
                <div className="w-full md:w-[40%] md:ml-[5%] h-full flex justify-center items-center flex-col bg-[#1f1f1f] py-[20px] rounded-md gap-[10px]">
                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px] ">
                        <label className="text-[#ffffff]">Titulo:</label>
                        <input 
                            type="text" 
                            value={data.key}
                            placeholder="Digite o nome" 
                            className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#1f1f1f] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" 
                            onChange={(e)=>{handleOnChangeRegister(e, 'key')}}
                        />
                        <BsFillPersonPlusFill className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Tipo:</label>
                        <select 
                            onChange={(e)=>handleOnChangeRegister(e, 'type')}
                            value={data.type}
                            className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#1f1f1f] text-[#1ED760] border-b-[1px] border-b-[#ffffff]"
                        >
                            <option value='string'>Texto</option>
                            <option value='date'>Data</option>
                            <option value='integer'>Inteiro</option>
                            <option value='float'>Decimal</option>
                            <option value='boolean'>Verdadeiro ou Falso</option>
                        </select>
                        <BsListUl  className="text-lg text-[#ffffff]" />
                    </div>

                    
                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Min:</label>
                        <input 
                            type="number" 
                            value={data.min}
                            onChange={(e)=>handleOnChangeRegister(e, 'min')}
                            placeholder="Digite o valor minimo" 
                            className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#1f1f1f] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" 
                        />
                        <BsSortUp  className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Max:</label>
                        <input 
                            type="number" 
                            value={data.max}
                            onChange={(e)=>handleOnChangeRegister(e, 'max')}
                            placeholder="Digite o valor maximo" 
                            className="w-[300px] h-[30px] pl-[5px] outline-none bg-[#1f1f1f] text-[#1ED760] border-b-[1px] border-b-[#ffffff]" 
                        />
                        <BsSortDownAlt  className="text-lg text-[#ffffff]" />
                    </div>

                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <label className="text-[#ffffff]">Obrigatório:</label>

                        <input type="radio" id="required-true" name="required" value="true" onChange={(e)=>handleOnChangeRegister(e,'required')} />
                        <label htmlFor="required-true" className="text-[#1ED760] text-sm">Sim</label>

                        <input type="radio" id="required-false" name="required" value="false" checked onChange={(e)=>handleOnChangeRegister(e,'required')} />
                        <label htmlFor="required-false" className="text-[#1ED760] text-sm">Não</label>
                    </div>


                    <div className="w-full h-[50px] flex justify-center items-center flex-row gap-[15px]">
                        <button className="w-[150px] h-[40px] bg-[#242424] rounded-md duration-150 text-[#1ED760] hover:bg-[#1ED760] hover:text-[#ffffff]">Limpar</button>
                        <button 
                            onClick={register}
                            className="w-[150px] h-[40px] bg-[#242424] rounded-md duration-150 text-[#1ED760] hover:bg-[#1ED760] hover:text-[#ffffff]">
                            Cadatrar
                        </button>
                    </div>

                </div>

                <div className="md:flex hidden md:w-[50%] h-full justify-center ">
                    <img src={imgAdd} alt="login" className='h-[400px]' />
                </div>
            </div>
        </section>
    )
}

export default RegisterFields;

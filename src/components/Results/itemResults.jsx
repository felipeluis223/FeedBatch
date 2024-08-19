import { FaPenToSquare, FaRegTrashCan  } from "react-icons/fa6";
import axios from 'axios';
import FEEDBATCH from '../../services/feedbatch';
import { useNavigate } from 'react-router-dom'

export default function ItemResult({payload}){

    const date = new Date(payload?.created_at);
    const formatDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    
    const navigate = useNavigate();

    const deleteData = ()=>{
        axios.delete(`${FEEDBATCH}/valores/${payload.id}`).then().catch();
        
    }



    return (
        <section className="w-full md:h-[80px] h-[130px] py-[20px] flex md:flex-row flex-col">
            <div className="w-full md:w-[20%] h-full flex justify-center items-center text-center gap-[5px]">
                <span className="text-[#1ED760]">GERADO: </span><span className="text-[#ffffff]"> {formatDate}</span>
            </div>

            <div className="w-full md:w-[40%] h-full flex flex-row justify-center items-center gap-[5px]">
                <span className="text-[#1ED760]">{payload?.key_id}: </span> <span className="text-[#ffffff]"> {payload?.value}</span>
            </div>
            
            <div  className="w-full md:w-[40%] mt-[20px] md:mt-[0px] h-full flex flex-row gap-[40px] justify-center items-center md:border-none border-b-[1px] pb-[15px] md:pb-[0px]">
                <button className="w-[90px] h-[40px] bg-[#ff9600] flex justify-center items-center rounded-md gap-[5px]">
                    <FaPenToSquare /> Editar
                </button>

                <button onClick={deleteData} className="w-[90px] md:w-[80px] h-[40px] bg-[#f11212] flex justify-center items-center rounded-md gap-[5px]">
                    <FaRegTrashCan /> Excluir
                </button>                
            </div>


        </section>
    );
}
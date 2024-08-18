import { FaPenToSquare, FaRegTrashCan  } from "react-icons/fa6";

export default function ItemResult({payload}){
    console.log(payload)
    const formatDate = () =>{
        const date = new Date(data.created_at);
        return`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    return (
        <section className="w-full h-[80px] flex flex-row">
            <div className="w-[20%] h-full flex justify-center items-center text-center gap-[5px]">
                <span className="text-[#1ED760]">GERADO: </span><span className="text-[#ffffff]"> {formatDate}</span>
            </div>

            <div className="w-[40%] h-full flex flex-row justify-center items-center gap-[5px]">
                <span className="text-[#1ED760]">{payload?.key_id}: </span> <span className="text-[#ffffff]"> {payload?.value}</span>
            </div>
            
            <div  className="w-[40%] h-full flex flex-row gap-[40px] justify-center items-center">
                <button className="w-[80px] h-[40px] bg-[#ff9600] flex justify-center items-center rounded-md gap-[5px]">
                    <FaPenToSquare /> Editar
                </button>

                <button className="w-[80px] h-[40px] bg-[#f11212] flex justify-center items-center rounded-md gap-[5px]">
                    <FaRegTrashCan /> Excluir
                </button>                
            </div>


        </section>
    );
}
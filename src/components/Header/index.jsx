import { IoLogOutOutline } from "react-icons/io5";
import { BsClipboardPlus, BsFileDiff, BsClipboard2Check } from "react-icons/bs";

import { useNavigate } from "react-router-dom";


function Header({ onLogout }){
    const navigate = useNavigate()
    
    return (
        <div className="w-full h-[80px] bg-[#1f1f1f]">
            <ul className="w-full h-full flex justify-evenly items-center text-[#ffffff] text-md">
                <li><h2 className="text-[#1ED760] text-xl italic font-bold">FeedBatch</h2></li>
                <li><button className="hover:text-[#1ED760] cursor-pointer flex flex-row items-center gap-[5px]" onClick={()=>navigate("")}><BsClipboardPlus /><span>Adicionar Campos</span></button></li>
                <li><button className="hover:text-[#1ED760] cursor-pointer flex flex-row items-center gap-[5px]" onClick={()=>navigate("values")}><BsFileDiff  /><span>Adicionar Dados</span></button></li>
                <li><button className="hover:text-[#1ED760] cursor-pointer flex flex-row items-center gap-[5px]" onClick={()=>navigate("results")}><BsClipboard2Check  /><span>Exibir Resultados</span></button></li>
                <li><button className="hover:text-[#1ED760] cursor-pointer flex flex-row items-center gap-[5px]" onClick={onLogout}><IoLogOutOutline  /><span>Logout</span></button></li>
            </ul>
        </div>
    )
}

export default Header;
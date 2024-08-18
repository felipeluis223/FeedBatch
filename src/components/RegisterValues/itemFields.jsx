export default function ItemFields({payload}){
    const typeMask = ()=>{
        switch(payload.type){
            case "string":
                return "text";

            case "integer":
            case "float":
                return "number";

            case "boolean":
                return "boolean";
            
            case "date":
                return "date";
        }
    }

    console.log(payload)

    return (
        <div className="w-[920px] h-[50px] flex flex-row gap-[10px]">
            <div className="w-[200px] h-full bg-[#1f1f1f] flex pl-[15px] items-center rounded-md">
                <h4 className="text-[#ffffff] font-bold">{payload.key.toUpperCase()}</h4>
            </div>
            <div className="w-[400px] h-full flex flex-row items-center">
                <input 
                    type={typeMask()} 
                    placeholder="Preencher aqui..."
                    className="w-[400px] h-full outline-none px-[10px] bg-[#1f1f1f] border-b-[1px] border-b-[#ffffff] text-[#1ED760]" 
                />
                
            </div>

            <button className="w-[200px] h-full bg-[#1f1f1f] text-[#1ED760] rounded-md hover:bg-[#1ED760] duration-150 hover:text-[#ffffff] font-bold">
                Enviar
            </button>
        </div>
    )
}
import { useEffect, useState } from 'react';
import FEEDBATCH from '../../services/feedbatch';
import Title from '../Title';
import ItemFields from './itemFields';
import axios from 'axios';
import img from '../../assets/load.png'

function RegisterValues(){
    const [ dataAPI, setDataAPI ] = useState({});
    
    const getScreens = ()=> {
        axios.get(`${FEEDBATCH}/telas`).then((res)=>{
            setDataAPI(res?.data)            
        }).catch((error)=>{
            console.log("ERROR: ", error)
        })
    }

    useEffect(()=>{
        getScreens()
    },[])
    
    return (
        <section className="w-full]">
            <Title description="Adicionar valores aos Campos" />
            <div className="w-full h-full mt-[15px] gap-[15px] flex flex-col justify-center items-center">
                {dataAPI?.length != undefined && dataAPI != 0 ? 
                    dataAPI.map((payload, index)=>(
                        <ItemFields payload={payload} key={index}/>
                    )) : 
                    <section className="w-full h-[400px] flex justify-center items-center">
                        <img src={img} className="h-full" />
                        <h5 className="text-2xl text-[#ffffff]"><strong>Ops!</strong> <br /> Não há campos a preencher...</h5>
                    </section>}
                
            </div>
        </section>
    )
}

export default RegisterValues;
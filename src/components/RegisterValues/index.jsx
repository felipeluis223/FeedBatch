import { useEffect, useState } from 'react';
import API_TELAS from '../../services/feedbatch';
import Title from '../Title';
import ItemFields from './itemFields';
import axios from 'axios';


function RegisterValues(){
    const [ dataAPI, setDataAPI ] = useState({});

    const getScreens = ()=> {
        axios.get(API_TELAS).then((res)=>{
            console.log('RESPOSTA: ', res?.data)
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
                <ItemFields />
            </div>
        </section>
    )
}

export default RegisterValues;
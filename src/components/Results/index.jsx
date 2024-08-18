import { useState, useEffect } from "react";
import FEEDBATCH from "../../services/feedbatch";
import Title from "../Title";
import ItemResult from "./itemResults";
import axios from 'axios';

export default function Result(){
    const [ data, setData ] = useState({})
    
    const getData = ()=>{
        axios.get(`${FEEDBATCH}/valores`).then((res)=>{
            setData(res?.data)
        }).catch((error)=>{

        })
    }
    console.log(data)
    useEffect(()=>{
        getData()
    },[])

    return (
        <section className="w-full h-[500px] flex flex-col justify-center items-center">
            <Title description="Informações Cadastradas e valores" />
            <div className="w-[80%] h-full bg-[#1f1f1f] rounded-md">
                {
                    data != 0  && data.length != undefined ? data.map((item, index)=>(<ItemResult payload={item} key={index} />)) : <p>vazio</p>
                    
                }
            </div>
        </section>
    )
}
import { useState, useEffect } from "react";
import FEEDBATCH from "../../services/feedbatch";
import Title from "../Title";
import ItemResult from "./itemResults";
import axios from 'axios';
import img from '../../assets/load.png'

export default function Result(){
    const [ data, setData ] = useState({})
    
    const getData = ()=>{
        axios.get(`${FEEDBATCH}/valores`).then((res)=>{
            setData(res?.data)
        }).catch()
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <section className="w-full bg-[#242424] pb-[100px] flex flex-col justify-center items-center">
            <Title description="Informações Cadastradas e valores" />
            <div className="w-[80%] h-full bg-[#1f1f1f] flex flex-col rounded-md">
                {
                    data != 0  && data.length != undefined ? data.map((item, index)=>(<ItemResult payload={item} key={index} />)) : 
                    <section className="w-full h-[400px] flex justify-center items-center">
                        <img src={img} className="md:h-full h-[200px]" />
                        <h5 className="text-2xl text-[#ffffff]"><strong>Ops!</strong> <br /> Não há informações.</h5>
                    </section>
                    
                }
            </div>
        </section>
    )
}
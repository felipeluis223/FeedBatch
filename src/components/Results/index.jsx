import { useState, useEffect } from "react";
import FEEDBATCH from "../../services/feedbatch";
import Title from "../Title";
import ItemResult from "./itemResults";
import axios from 'axios';
import img from '../../assets/load.png';

export default function Result() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Obter os valores - API:
    const getData = () => {
        axios.get(`${FEEDBATCH}/valores`)
            .then((res) => {
                setData(res?.data || []);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    // Função para filtrar os dados com base no termo de pesquisa
    const filteredData = data.filter(item => {
        const keyIdMatch = item.key_id ? item.key_id.toLowerCase().includes(searchTerm.toLowerCase()) : false;
        const valueMatch = item.value ? item.value.toLowerCase().includes(searchTerm.toLowerCase()) : false;
        return keyIdMatch || valueMatch;
    });

    return (
        <section className="w-full bg-[#242424] pb-[100px] flex flex-col justify-center items-center">
            <Title description="Informações Cadastradas e valores" />
            <div className="w-[80%] h-full bg-[#1f1f1f] flex flex-col rounded-md">
                {/* Barra de pesquisa */}
                <div className="w-full flex justify-center items-center py-4">
                    <input
                        type="text"
                        placeholder="Pesquisar por campo ou valor"
                        className="p-2 rounded-md border border-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {
                    filteredData.length > 0 ? 
                        filteredData.map((item, index) => (
                            <ItemResult payload={item} refreshData={getData} key={index} />
                        )) : 
                        <section className="w-full h-[400px] flex justify-center items-center">
                            <img src={img} className="md:h-full h-[200px]" alt="Nenhum dado disponível" />
                            <h5 className="text-2xl text-[#ffffff]"><strong>Ops!</strong> <br /> Não há informações.</h5>
                        </section>
                }
            </div>
        </section>
    );
}

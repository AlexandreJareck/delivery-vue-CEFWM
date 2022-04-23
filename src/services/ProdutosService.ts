import API from './API';

import { Produto } from '../models/Produto';

const getProdutos = async () : Promise<Produto[]> => {
    return (await API().get("/produtos")).data; 
}

const postProduto = async (produto: Produto): Promise<Produto> => {
    return (await API().post("/produtos", produto)).data;
}

export default {
    getProdutos,
    postProduto
}
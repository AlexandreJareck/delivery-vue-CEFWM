import { defineStore } from "pinia";
import { Produto } from "../models/Produto";
import ProdutosService from "../services/ProdutosService";

export const useProdutoStore = defineStore("produto", {
  state: () => {
    return {
      products: [] as unknown as Produto[],
    };
  },
  actions: {
    async getAll(): Promise<Produto[]> {
      this.products = await ProdutosService.getProdutos();

      return this.products
    },
    adicionar(produto: Produto) {
      this.products.push(produto)
    }
  },
});

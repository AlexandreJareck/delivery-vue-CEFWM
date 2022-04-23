<template>
    <form @submit.prevent="onSubmit">
        <div class="form-group">
            <label for="name">Nome</label>
            <input type="text" class="form-control" id="name" aria-describedby="name" v-model="produto.nome"
                placeholder="Informe o nome do produto">
            <label for="preco">Preço</label>
            <input type="number" step="0.01" class="form-control" id="preco" aria-describedby="preco"
                v-model="produto.preco" placeholder="Informe o preço do produto">
            <label for="description">Descrição</label>
            <input type="text" class="form-control" id="description" aria-describedby="description"
                v-model="produto.descricao" placeholder="Informe a descrição do produto">

        </div>
        <div class="text-center">
            <button type="submit" class="col-md-12 btn btn-outline-info mt-3">Salvar</button>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue';
import { Produto } from '../../../models/Produto';
import ProdutosService from '../../../services/ProdutosService';
import { useProdutoStore } from '../../../stores/ProdutoStore';



export default defineComponent({
    setup() {
        const store = useProdutoStore()
        let produto = ref<Produto>({} as Produto);
        return { produto, store }
    },
    methods: {
        async onSubmit() {
            if (!this.produto) return;
            const produto = await ProdutosService.postProduto(this.produto)
            this.store.adicionar(produto)
            this.produto = {} as Produto
        }
    }
})
</script>

<style scoped>
</style>
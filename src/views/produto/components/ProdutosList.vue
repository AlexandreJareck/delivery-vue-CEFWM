<template>
    <div v-if="props.isOrder">
        <div class="list-group-item" v-for="produto in produtos" :key="produto.uuid">
            <div class="row">
                <div class="col-md-6">
                    <h5>{{ produto.nome }}</h5>
                </div>
                <div class="col-md-3 text-end">
                    <h5>R$ {{ produto.preco }}</h5>
                </div>

                <div class="col-md-3 text-end">
                    <button class="btn btn-outline-info btn-sm" @click="adicionar(produto)">
                        <span class="fa fa-plus"></span>
                    </button>
                    <button class="btn btn-outline-info btn-sm" @click="remover(produto)" style="margin-left: 5px;">
                        <span class="fa fa-minus"></span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="list-group-item" v-for="produto in produtos" :key="produto.nome">
        <div class="row">
            <div class="col-md-7">
                <h5>{{ produto.nome }}</h5>
            </div>
            <div class="col-md-4 text-end">
                <h5>R$ {{ produto.preco }}</h5>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "ProdutosList"
}

</script>

<script setup lang="ts">
import { Produto } from '../../../models/Produto';

import { usePedidoStore } from '../../../stores/PedidoStore';
import { useProdutoStore } from '../../../stores/ProdutoStore';

const props = defineProps<{
    isOrder: boolean
}>()

const store = usePedidoStore();
const storeProduto = useProdutoStore();
const produtos = await storeProduto.getAll()

const adicionar = (produto: Produto) => {
    store.adicionarItem(produto);
}

const remover = (produto: Produto) => {
    store.removerItem(produto);
}

defineExpose({
    produtos,
    adicionar,
    remover,
    props
});

</script> 
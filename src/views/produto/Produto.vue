<template>
    <div class="container mt-2">
        <div class="row">
            <div class="itens col-md-7">
                <ProdutosList :is-order="false" />
            </div>
            <div class="itens col-md-5">
                <ProdutoForm />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import ProdutosList from './components/ProdutosList.vue';
import { useProdutoStore } from '../../stores/ProdutoStore';
import ProdutoForm from './components/ProdutoForm.vue';

const storeProduto = useProdutoStore();
const produtos = storeProduto.products;

defineExpose({
    ProdutosList,
    produtos,
    ProdutoForm,
})

</script>

<style scoped>
.itens {
    padding: 30px;
}
</style>
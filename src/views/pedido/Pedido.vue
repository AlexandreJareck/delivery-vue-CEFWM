<template>
    <div class="container">
        <div class="row">
            <div class="itens col-md-7">
                <ProdutosList :is-order="true" />
            </div>
            <div class="pedido col-md-5">
                <PedidoList />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import ProdutosList from '../produto/components/ProdutosList.vue';
import PedidoList from '../pedido/components/PedidoList.vue'

defineExpose({
    ProdutosList,
    PedidoList
})

</script>

<style scoped>
.itens {
    padding: 30px;
}

.pedido {
    padding: 30px;
    background-color: lightcyan;
    height: 100vh;
}
</style>
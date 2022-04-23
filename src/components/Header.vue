<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand">Delivery</router-link>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/produtos">Produtos</router-link>
                    <router-link class="nav-link" to="/pedido">Pedidos</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Header"
    }
</script>

<script setup lang="ts">

</script>

<style scoped>

    .bg-light {
        background-color: lightskyblue !important;
    }
    

</style>
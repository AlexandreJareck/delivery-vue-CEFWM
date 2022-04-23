<script setup lang="ts">

import Header from './components/Header.vue';

defineExpose({
    Header
});

</script>

<template>
    <Header />
    <Suspense>
        <template #default>
            <router-view></router-view>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

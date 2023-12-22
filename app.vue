<template>
    <RouterView />
</template>
<script setup>
const { $bootstrap } = useNuxtApp();
onMounted(()=>{
    const collapseElementList = document.querySelectorAll('.collapse')
    const collapseList = [...collapseElementList].map(collapseEl => new $bootstrap.Collapse(collapseEl, {
        toggle: false
    }).hide());
});
</script>
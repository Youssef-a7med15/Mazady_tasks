<template>
    <Navbar />
    <div id="padding_page">
        <slot />
    </div>
</template>
<script setup>

let methods = reactive({
    check_page_padding() {
        // check page padding
        let padding_page = document.getElementById(`padding_page`);
        let navbar = document.querySelector(`.header_navbar`);
        padding_page.style.paddingTop = `${navbar.offsetHeight}px`;
    },
});

onMounted(() => {
    // check page padding
    methods.check_page_padding();

    window.addEventListener(`resize`, () => {
        // check page padding
        methods.check_page_padding();
    });
});
onUpdated(() => {
    // check page padding
    methods.check_page_padding();
});
</script>
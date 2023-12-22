<template>
    <div class="header_navbar">
        <div class="container-xxl container-fluid">
            <div class="row align-items-center">
                <div class="col-sm-1 col-2 d-md-none d-block">
                    <button type="button" class="bars_btn" @click="methods.bars_btn_fun">
                        <div class="bar"></div>
                    </button>
                </div>
                <div class="bars_list d-md-none d-block">
                    <div class="accordion accordion_links" id="accordion_links">
                        <NuxtLink to="/" class="nav_link" active-class="active">Home</NuxtLink>
                        <NuxtLink class="nav_link">Blog</NuxtLink>
                        <NuxtLink class="nav_link">Gifts</NuxtLink>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#langs_collapse" aria-expanded="true" aria-controls="langs_collapse">
                                    <i class="icon bi bi-globe"></i> languages
                                </button>
                            </h2>
                            <div id="langs_collapse" class="accordion-collapse collapse" data-bs-parent="#accordion_links">
                                <div class="accordion-body">
                                    <ul class="options list-unstyled">
                                        <li class="option">arabic</li>
                                        <li class="option">english</li>
                                        <li class="option">french</li>
                                        <li class="option">german</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <NuxtLink class="nav_link add_product">
                            <i class="icon bi bi-plus-circle"></i>
                            Add new product
                        </NuxtLink>
                    </div>
                </div>
                <div class="nav_brand col-md-1 col-sm-2 col-3">
                    <img src="/imgs/logo.png" alt="Mazaady" class="col-12">
                </div>
                <div class="links col-md-4 d-md-flex d-none">
                    <NuxtLink to="/" class="nav_link" active-class="active">Home</NuxtLink>
                    <NuxtLink class="nav_link">Blog</NuxtLink>
                    <NuxtLink class="nav_link">Gifts</NuxtLink>
                </div>
                <div class="other col-md-7 col-sm-9 col-7">
                    <div class="float-end d-flex">
                        <button type="button" class="search_btn nav_btn">
                            <i class="bi bi-search"></i>
                        </button>
                        <button type="button" class="notification_btn nav_btn">
                            <i class="bi bi-bell"></i>
                        </button>
                        <a href="#" class="profile_btn">
                            <img src="~/assets/imgs/user.png" alt="user profile">
                        </a>
                        <button type="button" class="add_product btn d-md-block d-none">
                            <i class="icon bi bi-plus-circle"></i>
                            Add new product
                        </button>
                        <button type="button" class="lang_btn d-md-block d-none" @click="methods.lang_btn_fun">
                            <div class="icon d-inline-block">
                                <i class="bi bi-globe"></i>
                            </div>
                            <div class="lang d-inline-block">en</div>
                            <ul class="options list-unstyled">
                                <li class="option">arabic</li>
                                <li class="option">english</li>
                                <li class="option">french</li>
                                <li class="option">german</li>
                            </ul>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import "~/assets/scss/components/navbar.scss";
</style>
<script setup>
const { $bootstrap } = useNuxtApp();

let methods = reactive({
    close_all_active() {
        let lang_btn = document.querySelector(`.header_navbar .other .lang_btn`);
        let bars_list = document.querySelector(`.header_navbar .bars_list`);
        let bars_btn = document.querySelector(`.header_navbar .bars_btn`);

        lang_btn.classList.remove(`active`);
        bars_list.classList.remove(`active`);
        bars_btn.classList.remove(`active`);

        const collapseElementList = document.querySelectorAll('.collapse');
        const collapseList = [...collapseElementList].map(collapseEl => new $bootstrap.Collapse(collapseEl, {
            toggle: false
        }).hide());
    },
    bars_btn_fun() {
        let bars_list = document.querySelector(`.header_navbar .bars_list`);
        let bars_btn = document.querySelector(`.header_navbar .bars_btn`);

        if (bars_list.classList.contains(`active`)) {
            methods.close_all_active();
            return;
        }

        methods.close_all_active();
        bars_list.classList.add(`active`);
        bars_btn.classList.add(`active`);


    },
    lang_btn_fun() {
        let lang_btn = document.querySelector(`.header_navbar .other .lang_btn`);

        if (lang_btn.classList.contains(`active`)) {
            methods.close_all_active();
            return;
        }

        methods.close_all_active();
        lang_btn.classList.add(`active`);
    },
});
onMounted(() => {
    let navbar = document.querySelector(".header_navbar");
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 200) {
            if (navbar.classList.contains("active")) {
                return
            }
            navbar.classList.add("active");
            return
        }
        navbar.classList.remove("active");
    });
});

</script>
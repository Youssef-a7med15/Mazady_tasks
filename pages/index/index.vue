<template>
    <NuxtLayout name="main">
        <div class="home_page">
            <div class="container-xxl container-fluid">
                <div class="row">
                    <div class="col-lg-5 col-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="profile_box">
                                    <img src="~/assets/imgs/user.png" alt="User Image" class="user_image">
                                    <h1 class="user_name">
                                        Hala Ahmed
                                    </h1>
                                    <p class="user_about">
                                        I am Hala Ahmed, I am the owner of the local brand called Beauty which is for Mackeup and Skin Care.
                                    </p>
                                    <div class="details row">
                                        <div class="col-sm-4 col-12">
                                            <div class="detail detail_following">
                                                <div class="icon"><i class="bi bi-person-check"></i></div>
                                                <div class="content">
                                                    <div class="number">5</div>
                                                    <div class="name">following</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-12">
                                            <div class="detail detail_followers">
                                                <div class="icon"><i class="bi bi-people"></i></div>
                                                <div class="content">
                                                    <div class="number">20</div>
                                                    <div class="name">followers</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-12">
                                            <div class="detail detail_rate">
                                                <div class="icon"><i class="bi bi-star"></i></div>
                                                <div class="content">
                                                    <div class="number">4.2 <span>(15)</span></div>
                                                    <div class="name">rate</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="button" class="follow_btn d-flex col-12 justify-content-center">follow</button>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="QR_code_box">
                                    <div class="head">
                                        <div class="controlls float-end">
                                            <button type="button" class="controll"><i class="bi bi-eye"></i></button>
                                            <button type="button" class="controll"><i class="bi bi-share"></i></button>
                                            <button type="button" class="controll"><i class="bi bi-file-earmark-arrow-down"></i></button>
                                            <button type="button" class="open_btn d-lg-none d-inline-block" @click="methods.open_QR_btn_fun" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                                <i class="icon bi bi-chevron-down"></i>
                                            </button>
                                        </div>
                                        <h1 class="title">
                                            QR Code
                                        </h1>
                                        <p class="box_message">
                                            <i class="icon bi bi-file-earmark-arrow-down"></i>
                                            Download the QR code or share it with your friends.
                                        </p>
                                    </div>
                                    <div class="body d-lg-block d-none">
                                        <div class="padding">
                                            <div class="box">
                                                <div class="d-flex justify-content-center">
                                                    <img src="/imgs/logo.png" alt="Mazaady" class="logo">
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <h1 class="user_name">
                                                        Hala Ahmed
                                                    </h1>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <img src="~/assets/imgs/QR_code.png" alt="User QR Code" class="user_QR_code">
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <p class="message">
                                                        Follow Us on Mazaady
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="body d-lg-none collapse" id="collapseExample">
                                        <div class="padding">
                                            <div class="box">
                                                <div class="d-flex justify-content-center">
                                                    <img src="/imgs/logo.png" alt="Mazaady" class="logo">
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <h1 class="user_name">
                                                        Hala Ahmed
                                                    </h1>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <img src="~/assets/imgs/QR_code.png" alt="User QR Code" class="user_QR_code">
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <p class="message">
                                                        Follow Us on Mazaady
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-12">
                        <section class="products_articles_reviews_section">
                            <div class="head">
                                <div class="float-sm-end">
                                    <button type="button" class="add_review btn">
                                        <i class="icon bi bi-plus-circle"></i>
                                        Add Review
                                    </button>
                                </div>
                                <div class="filters">
                                    <button type="button" class="filter active">Products</button>
                                    <button type="button" class="filter">Articles</button>
                                    <button type="button" class="filter">Reviews</button>
                                </div>
                            </div>
                            <div class="body">
                                <h1 class="title">Products <span>(12)</span></h1>
                                <div class="products">
                                    <div class="product" style="--product_color: var(--mainColor1)">
                                        <div class="product_like">
                                            <button type="button" class="like_btn float-md-end float-start"><i class="icon bi bi-heart"></i></button>
                                        </div>
                                        <div class="product_cover">
                                            <img src="~/assets/imgs/products/product1.png" alt="product">
                                            <div class="type">
                                                Live auction
                                            </div>
                                        </div>
                                        <div class="product_details">
                                            <h2 class="title">{{ `Six-piece clothing set (blouse - pants - hat and ...` }}</h2>
                                            <div class="detail price">
                                                starting price <span>1000 EGP</span>
                                            </div>
                                            <div class="detail start">
                                                Lot starts in
                                                <div class="d-sm-inline-block">
                                                    <div class="time_item d-inline-block">2 <span>days</span></div>
                                                    <div class="time_item d-inline-block">10 <span>hours</span></div>
                                                    <div class="time_item d-inline-block">50 <span>minutes</span></div>
                                                </div>
                      
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product" style="--product_color: var(--mainColor1)">
                                        <div class="product_like">
                                            <button type="button" class="like_btn float-md-end float-start"><i class="icon bi bi-heart"></i></button>
                                        </div>
                                        <div class="product_cover">
                                            <img src="~/assets/imgs/products/product2.png" alt="product">
                                            <div class="type">
                                                Live auction
                                            </div>
                                        </div>
                                        <div class="product_details">
                                            <h2 class="title">{{ `Six-piece clothing set (blouse - pants - hat and ...` }}</h2>
                                            <div class="detail price">
                                                starting price <span>1000 EGP</span>
                                            </div>
                                            <div class="detail start">
                                                Lot starts in
                                                <div class="d-sm-inline-block">
                                                    <div class="time_item d-inline-block">2 <span>days</span></div>
                                                    <div class="time_item d-inline-block">10 <span>hours</span></div>
                                                    <div class="time_item d-inline-block">50 <span>minutes</span></div>
                                                </div>
                      
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product" style="--product_color: var(--mainColor2)">
                                        <div class="product_like">
                                            <button type="button" class="like_btn active float-md-end float-start"><i class="icon bi bi-heart-fill"></i></button>
                                        </div>
                                        <div class="product_cover">
                                            <img src="~/assets/imgs/products/product3.png" alt="product">
                                            <div class="type">
                                                hot sale
                                            </div>
                                        </div>
                                        <div class="product_details">
                                            <h2 class="title">{{ `Six-piece clothing set (blouse - pants - hat and ...` }}</h2>
                                            <div class="detail price">
                                                starting price <span>1000 EGP</span>
                                            </div>
                                            <div class="detail start">
                                                Lot starts in
                                                <div class="d-sm-inline-block">
                                                    <div class="time_item d-inline-block">2 <span>days</span></div>
                                                    <div class="time_item d-inline-block">10 <span>hours</span></div>
                                                    <div class="time_item d-inline-block">50 <span>minutes</span></div>
                                                </div>
                      
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product" style="--product_color: var(--mainColor1)">
                                        <div class="product_like">
                                            <button type="button" class="like_btn float-md-end float-start"><i class="icon bi bi-heart"></i></button>
                                        </div>
                                        <div class="product_cover">
                                            <img src="~/assets/imgs/products/product4.png" alt="product">
                                            <div class="type">
                                                Live auction
                                            </div>
                                        </div>
                                        <div class="product_details">
                                            <h2 class="title">{{ `Six-piece clothing set (blouse - pants - hat and ...` }}</h2>
                                            <div class="detail price">
                                                starting price <span>1000 EGP</span>
                                            </div>
                                            <div class="detail start">
                                                Lot starts in
                                                <div class="d-sm-inline-block">
                                                    <div class="time_item d-inline-block">2 <span>days</span></div>
                                                    <div class="time_item d-inline-block">10 <span>hours</span></div>
                                                    <div class="time_item d-inline-block">50 <span>minutes</span></div>
                                                </div>
                      
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product" style="--product_color: var(--mainColor2)">
                                        <div class="product_like">
                                            <button type="button" class="like_btn active float-md-end float-start"><i class="icon bi bi-heart-fill"></i></button>
                                        </div>
                                        <div class="product_cover">
                                            <img src="~/assets/imgs/products/product5.png" alt="product">
                                            <div class="type">
                                                hot sale
                                            </div>
                                        </div>
                                        <div class="product_details">
                                            <h2 class="title">{{ `Six-piece clothing set (blouse - pants - hat and ...` }}</h2>
                                            <div class="detail price">
                                                starting price <span>1000 EGP</span>
                                            </div>
                                            <div class="detail start">
                                                Lot starts in
                                                <div class="d-sm-inline-block">
                                                    <div class="time_item d-inline-block">2 <span>days</span></div>
                                                    <div class="time_item d-inline-block">10 <span>hours</span></div>
                                                    <div class="time_item d-inline-block">50 <span>minutes</span></div>
                                                </div>
                      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
<style lang="scss">
@import "~/assets/scss/main/index/_index.scss";
</style>
<script setup>

let methods = reactive({
    open_QR_btn_fun() {
        let open_btn = document.querySelector(`.QR_code_box .open_btn`);
        open_btn.classList.toggle(`active`)
    }
});
</script>
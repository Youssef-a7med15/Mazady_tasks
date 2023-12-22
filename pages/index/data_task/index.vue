<template>
    <form @submit.prevent="methods.show_data" v-if="pageData.submited === false">
        <div class="item_field">
            <label for="main_category" class="d-block">Main category</label>
            <select id="main_category" v-model="pageData.form.main_category">
                <option value="">Select</option>
                <option v-for="(category,index) in pageData.main_categories" :key="index" :value="`${index}`">{{ category.name }}</option>
            </select>
        </div>
        <div class="item_field">
            <label for="sub_category" class="d-block">Sub category</label>
            <select id="sub_category" class="d-block" v-if="!pageData.form.main_category" v-model="pageData.form.sub_category" @change="methods.sub_category_change">
                <option value="" selected>Select</option>
            </select>
            <select id="sub_category" class="d-block" v-if="pageData.form.main_category" v-model="pageData.form.sub_category" @change="methods.sub_category_change">
                <option value="">Select</option>
                <option v-for="(category,index) in pageData.main_categories[pageData.form.main_category].children" :key="index" :value="category.id">{{ category.name }}</option>
            </select>
        </div>
        <div class="item_field">
            <label for="process_type" class="d-block">Process Type</label>
            <select id="process_type" class="d-block" v-if="!pageData.form.sub_category" v-model="pageData.form.process_type">
                <option value="" selected>Select</option>
            </select>
            <select id="process_type" class="d-block" v-if="pageData.form.sub_category" v-model="pageData.form.process_type">
                <option value="">Select</option>
                <option v-for="(category,index) in pageData.process_types" :key="index" :value="category.slug">{{ category.name }}</option>
                <option value="other">other</option>
            </select>
            <input type="text" v-if="pageData.form.process_type === `other`" v-model="pageData.form.process_message" placeholder="Write the other type">
        </div>
        <div class="item_field">
            <label for="brand" class="d-block">Brand</label>
            <select id="brand" class="d-block" v-if="!pageData.form.sub_category" v-model="pageData.form.brand">
                <option value="" selected>Select</option>
            </select>
            <select id="brand" class="d-block" v-if="pageData.form.sub_category" v-model="pageData.form.brand">
                <option value="">Select</option>
                <option v-for="(category,index) in pageData.brands" :key="index" :value="category.slug">{{ category.name }}</option>
            </select>
        </div>
        <div class="item_field">
            <label for="transmission_type" class="d-block">Transmission Type</label>
            <select id="transmission_type" class="d-block" v-if="!pageData.form.sub_category" v-model="pageData.form.transmission_type">
                <option value="" selected>Select</option>
            </select>
            <select id="transmission_type" class="d-block" v-if="pageData.form.sub_category" v-model="pageData.form.transmission_type">
                <option value="">Select</option>
                <option v-for="(category,index) in pageData.transmission_types" :key="index" :value="category.slug">{{ category.name }}</option>
            </select>
        </div>
        <br>
        <button type="submit" :disabled="!pageData.form.main_category || !pageData.form.main_category || !pageData.form.process_type || (pageData.form.process_type === `other` && !pageData.form.process_message) || !pageData.form.brand || !pageData.form.transmission_type ? true : false">submit</button>
    </form>

    <br><br>

    <table class="col-12" v-if="pageData.submited === true">
        <thead>
            <th class=" border-1">Main category</th>
            <th class=" border-1">Sub category</th>
            <th class=" border-1">Process Type</th>
            <th class=" border-1">Brand</th>
            <th class=" border-1">Transmission Type</th>
        </thead>
        <tbody>
            <tr>
                <td class=" border-1">{{pageData.main_categories[pageData.form.main_category].name }}</td>
                <td class=" border-1">{{ pageData.form.sub_category_name }}</td>
                <td class=" border-1">{{ pageData.form.process_type_name }}</td>
                <td class=" border-1">{{ pageData.form.brand_name }}</td>
                <td class=" border-1">{{ pageData.form.transmission_type_name }}</td>
            </tr>
        </tbody>
    </table>
</template>
<script setup>
import axios from 'axios';
let pageData = reactive({
    submited: false,
    main_categories: ``,
    process_types: ``,
    brands: ``,
    transmission_types: ``,
    form: {
        main_category: ``,
        sub_category: ``,
        process_type: ``,
        process_message: ``,
        brand: ``,
        transmission_type: ``,
    },
});
let methods = reactive({
    sub_category_change(e) {
        let input = e.target;
        if (input) {
            axios.get(`https://staging.mazaady.com/api/v1/properties?cat=${parseInt(input.value)}`, {
                headers: {
                    "private-key": useRuntimeConfig().public.private_key,
                }
            }).then(res => {
                pageData.process_types = res.data.data[0].options;
                pageData.brands = res.data.data[1].options;
                pageData.transmission_types = res.data.data[2].options;
            })
        }
    },
    show_data() {
        pageData.main_categories[pageData.form.main_category].children.forEach(item => {
            if (item.id === pageData.form.sub_category) {
                pageData.form.sub_category_name = item.name;
            }
        });
        pageData.process_types.forEach(item => {
            if (item.slug === pageData.form.process_type) {
                pageData.form.process_type_name = item.name;
            }
        });
        pageData.brands.forEach(item => {
            if (item.slug === pageData.form.brand) {
                pageData.form.brand_name = item.name;
            }
        });
        pageData.transmission_types.forEach(item => {
            if (item.slug === pageData.form.transmission_type) {
                pageData.form.transmission_type_name = item.name;
            }
        });
        pageData.submited = true;
    }
});

onMounted(() => {
    axios.get("https://staging.mazaady.com/api/v1/get_all_cats", {
        headers: {
            "private-key": useRuntimeConfig().public.private_key,
        }
    }).then(res => {
        pageData.main_categories = res.data.data[`categories`];
    })
});
</script>
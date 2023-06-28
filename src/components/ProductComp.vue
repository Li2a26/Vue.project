<template>
    <div class="mb-3">
        <div class="items">
            <router-link :to="{name:'product', params:{id: product.id}}">
                <img :src="product.img" :alt="product.title">
                <div>
                    <h3>{{ product.title }}</h3>
                    <p>Description:{{product.desc }}</p>
                    <p>Price: R {{ product.price }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props: ["product"]
}
</script>
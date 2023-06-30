<template>
    <div v-if="products" class="products">
        <ProductComp v-for="product of products" :key="product.id" :product="product"/>
    </div>
    <div v-else>loading</div>
</template>
<script>
    import ProductComp from '@/components/ProductComp.vue'
    export default {
        computed: {
            products() {
                return this.$store.state.products
            }
        },
        mounted() {
            this.$store.dispatch("getProducts")  
        },
        components:{ProductComp}
    }
    
</script>
<style scoped>
  .products {
    display: flex;
    flex-wrap: wrap;
  }
</style>
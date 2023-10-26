<script lang="ts" setup>
import { useRoute } from "nuxt/dist/app/composables";
import { ref } from "vue";
import { products } from "../../composables/constants/products";
import { Products } from "../../types/products";

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) :
null;
const product = ref(products.find((item: Products) => item.id === id));
</script>

<template>
    <DetailProduct :product="product"/>
</template>
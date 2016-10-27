<script>
import Block from './block';

export default {
    components: { Block }
};
</script>

<template>
<div>
    <h3>No lazy</h3>
    <div class="block">a div element</div>
    <h3>Lazy load element 2s </h3>
    <div class="block" v-lazy="2000">a div element [v-lazy="2000"]</div>
    <h3>Lazy load component 3 second</h3>
    <block v-lazy.no-animation="3000">a component [v-lazy="3000"]</block>
</div>
</template>

<style scoped>
.block {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    border: solid 1px #ddd;
}
</style>
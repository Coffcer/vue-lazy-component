<script>
export default {
    created () {
        console.log('block.vue is created');
    }
};
</script>

<template>
<div class="block">
    <slot></slot>
</div>
</template>
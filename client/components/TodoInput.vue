<template>
    <input
            v-model="item"
            placeholder="Edit here!"
            @keyup.enter="onEnter"
    >
</template>

<script>

    export default {
        name: 'TodoInput',
        methods: {
            onEnter(){
                this.$emit('addTodo', this.item);
                this.item = '';
            }
        },
        data() {
            return {
                item: ''
            }
        }
    }
</script>

<style></style>
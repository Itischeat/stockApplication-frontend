<script>
export default {
    
}
</script>

<template>
    <form @submit.prevent class="form">
        <slot></slot>
    </form>
</template>

<style>
.form {
    border-radius: 25px;
    text-align: center;
    background: #202E44;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
}
</style>
<script>
import fullHeaderAdmin from '../UI/fullHeaderAdmin.vue';
import search from "../UI/search.vue"

export default {
    components: {
        fullHeaderAdmin,
        search,
    },
    mounted() {
        if (this.$store.state.isAdmin === false) {
            this.$router.push('/auth')
        }
    }
}
</script>

<template>
    <fullHeaderAdmin />
    <search />
</template>

<style></style>
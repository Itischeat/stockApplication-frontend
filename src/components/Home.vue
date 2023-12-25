<script>
import nonAdminNav from "../UI/headernavigationnonadmin.vue";
import headerLogo from "../UI/headerLogo.vue";
import centralBlock from "../UI/centralBlock.vue";
export default {
    components: {
        nonAdminNav,
        headerLogo,
        centralBlock,
    },
    name: "Home"
}
</script>

<template>
    <central-block>
        <header-logo/>
        <nonAdminNav/>
    </central-block>
</template>

<style>
body {
    background: rgba(0, 0, 0, 0.1);
}
</style>
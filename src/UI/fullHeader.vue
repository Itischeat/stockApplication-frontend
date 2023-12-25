<script>
import nonAdminNav from "./headernavigationnonadmin.vue";
import headerLogo from "./headerLogo.vue";
import centralBlock from "./centralBlock.vue";
export default {
    components: {
        nonAdminNav,
        headerLogo,
        centralBlock
    }
}

</script>

<template>
    <central-block style=" margin-top: 0;">
        <header-logo/>
        <nonAdminNav style="width: 100%;"/>
    </central-block>
</template>

<style>

</style>
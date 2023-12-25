<script>
import adminNav from "./headernavigationadmin.vue";
import headerLogo from "./headerLogo.vue";
import centralBlock from "./centralBlock.vue";
export default {
    components: {
        adminNav,
        headerLogo,
        centralBlock
    }
}

</script>

<template>
    <central-block style=" margin-top: 0;">
        <header-logo />
        <adminNav style="width: 100%;" />
    </central-block>
</template>

<style></style>
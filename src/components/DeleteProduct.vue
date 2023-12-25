<script>
import fullHeaderAdmin from "../UI/fullHeaderAdmin.vue"
import customForm from "../UI/customForm.vue"
import centralBlock from "../UI/centralBlock.vue"
import customInputText from "../UI/customInputText.vue"
import formLabel from "../UI/formLabel.vue"
import customSumbit from "../UI/customSumbit.vue"

export default {
    components: {
        fullHeaderAdmin,
        customForm,
        centralBlock,
        customInputText,
        formLabel,
        customSumbit
    },
    data() {
        return {
            stockEnum: {
                stock: '',
                product: '',
            }
        }
    },
    methods: {
        async deleteProduct() {
            const responce = await fetch("http://localhost:8080/api/deleteProduct", {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.stockEnum)
            })
            const result = await responce.json()
            if (result?.rowCount === 0) {
                alert("Товар или склад не существует")
            } else {
                this.stockEnum.stock = ''
                this.stockEnum.product = ''
                alert("Товар удалён")
            }
        }
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
    <centralBlock style="margin-top: 10vh;">
        <customForm>
            <formLabel>Удалить товар</formLabel>
            <customInputText :value="stockEnum.stock" @input="stockEnum.stock = $event.target.value" placeholder="Склад" />
            <customInputText :value="stockEnum.product" @input="stockEnum.product = $event.target.value"
                placeholder="Товар" />
            <customSumbit @click="deleteProduct" value="Удалить" />
        </customForm>
    </centralBlock>
</template>

<style>
.wrapper {
    flex-direction: row;
    gap: 200px;
}

.left {
    display: flex;
    flex-direction: column;
    gap: 25px;
}

.right {
    display: flex;
    flex-direction: column;
    gap: 25px;
}
</style>
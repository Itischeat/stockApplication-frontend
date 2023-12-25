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
                stockMan: '',
                product: '',
                quantity: '',
                weight: '',
                price: '',
            }
        }
    },
    methods: {
        async SendInfo() {
            let responce = await fetch(`http://localhost:8080/api/creat_product`, {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Headers": "*",
                    "Access-Control-Allow-Origin": "*",
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.stockEnum)
            })
            let result = await responce.json()
            if (result?.code === '22P02') {
                alert('Не правильно введены данные')
            } else if (result === '200') {
                for (let key in this.stockEnum) {
                    this.stockEnum[key] = ''
                }
                alert("Товар успешно создан")
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
            <formLabel>Создание товара</formLabel>
            <div class="wrapper">
                <div class="left">
                    <customInputText :value="stockEnum.stock" @input="stockEnum.stock = $event.target.value"
                        placeholder="Склад" />
                    <customInputText :value="stockEnum.stockMan" @input="stockEnum.stockMan = $event.target.value"
                        placeholder="Кладовщик" />
                    <customInputText :value="stockEnum.product" @input="stockEnum.product = $event.target.value"
                        placeholder="Товар" />
                </div>
                <div class="right">
                    <customInputText :value="stockEnum.quantity" @input="stockEnum.quantity = $event.target.value"
                        placeholder="Кол-во товаров" />
                    <customInputText :value="stockEnum.weight" @input="stockEnum.weight = $event.target.value"
                        placeholder="Вес 1 штуки" />
                    <customInputText :value="stockEnum.price" @input="stockEnum.price = $event.target.value"
                        placeholder="Цена 1 штуки" />
                </div>
            </div>
            <customSumbit @click="SendInfo" value="Создать" />
        </customForm>
    </centralBlock>
</template>

<style>
.wrapper {
    display: flex;
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
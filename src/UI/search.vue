<script>
import centralBlock from "../UI/centralBlock.vue"
import customInputText from "../UI/customInputText.vue"
import customSumbit from "../UI/customSumbit.vue"
import customForm from "../UI/customForm.vue"


export default {
    components: {
        customSumbit,
        customInputText,
        centralBlock,
        customForm
    },
    data() {
        return {
            stock: '',
            product: '',
            blockInfo: [

            ]
        }
    },
    methods: {
        async findInfo() {
            const responce = await fetch('http://localhost:8080/api/findProduct?' + new URLSearchParams({
                stock: this.stock,
                product: this.product
            }).toString())
            const result = await responce.json()
            if (result?.rowCount === 0) {
                alert('Такого товара не существует')
            } else {
                const row = result.rows[0]
                console.log(row, result)
                delete row.stockid
                this.blockInfo.push(result.rows[0])
            }
        }
    }
}
</script>

<template>
    <div class="wrapper-form">
        <aside class="aside">
            <centralBlock style="margin-top: 0;">
                <customForm style="padding: 0 25px; top: 220px; position: fixed;">
                    <customInputText :value="stock" @input="stock = $event.target.value" placeholder="Склад"
                        style="margin-top: 40px;" />
                    <customInputText :value="product" @input="product = $event.target.value" placeholder="Товар" />
                    <customSumbit @click="findInfo" value="Поиск" />
                </customForm>
            </centralBlock>
        </aside>
    </div>
    <div class="wrapper-search">
        <div v-if="blockInfo[0]" class="block">
            <div class="container" v-for="block in blockInfo">
                <ul class="container__list">
                    <li class="container-list-item" v-for="(item, index) of block">
                        <h3 class="label">{{ index }}</h3>
                        <div class="list__info">
                            <p class="list-text">{{ item }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.aside {
    padding: 10px;
}

body {
    overflow-y: auto;
}

.label {
    font-size: 24px;
}

.wrapper-form {
    display: inline-flex;
    width: 30%;
    align-items: center;
    justify-content: center;
}

.wrapper-search {
    display: inline-block;
    width: 69%;
}

.block {
    padding: 5px;
    background: rgba(0, 0, 0, 0.1);
}

.container {
    margin: 20px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.15);
    height: 160px;
}

.container-list-item {
    color: white;
    text-align: center;
    width: 150px;
    height: 135px;
    padding: 10px;
    background: #1A283E;
}

.list-text {
    font-size: 22px;
}

.list__info {
    height: inherit;
    margin-top: 35%;
}

.container__list {
    display: flex;
    flex-direction: row;
    gap: 10px;
}
</style>
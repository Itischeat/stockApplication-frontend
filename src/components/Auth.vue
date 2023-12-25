<script>
import centralBlock from "../UI/centralBlock.vue";
import customInputText from "../UI/customInputText.vue";
import customForm from "../UI/customForm.vue"
import customSumbit from "../UI/customSumbit.vue"
import formLabel from "../UI/formLabel.vue"
export default {
    components: {
        centralBlock,
        customInputText,
        customForm,
        customSumbit,
        formLabel
    },
    data() {
        return {
            requestAccess: {
                name: '',
                password: '',
            },
        }
    },
    methods: {
        async Auth() {
            const responce = await fetch('http://localhost:8080/api/access_admin', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(this.requestAccess),
            })
            let result = await responce.json()
            if (result === 'isAdmin') {
                this.$store.commit('access')
                this.$router.push("/auth/searchAdmin")
            } else {
                alert("Доступ запрещён, неправильно введены данные")
            }
        }
    },
}
</script>

<template>
    <centralBlock>
        <customForm>
            <formLabel>Авторизация</formLabel>
            <customInputText :value="requestAccess.name" @input="requestAccess.name = $event.target.value"
                placeholder="Имя" />
            <customInputText :value="requestAccess.password" @input="requestAccess.password = $event.target.value"
                placeholder="Пароль" />
            <customSumbit @click="Auth()" value="Войти" />
        </customForm>
    </centralBlock>
</template>

<style></style>
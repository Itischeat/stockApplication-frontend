<script>
</script>

<template>
    <nav class="nav">
        <ul class="nav__list">
            <router-link class="nav__list-link" to="/auth/creatProduct">
                <li class="nav__list-item">
                    Создать товар
                </li>
            </router-link>
            <router-link class="nav__list-link" to="/auth/updateProduct">
                <li class="nav__list-item">
                    Обновить товар
                </li>
            </router-link>
            <router-link class="nav__list-link" to="/auth/searchAdmin">
                <li class="nav__list-item">
                    Найти товар
                </li>
            </router-link>
            <router-link class="nav__list-link" to="/auth/deleteProduct">
                <li class="nav__list-item">
                    Удалить товар
                </li>
            </router-link>
        </ul>
    </nav>
</template>

<style>
.nav {
    background: rgba(255, 255, 255, 0.85);

}

.nav__list {
    height: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
    padding: 0 150px
}

.nav__list-item {
    padding-top: 25px;
    border-radius: 2px;
    width: 250px;
    height: 55px;
    background: #1A283E;
}

.nav__list-link {
    text-align: center;
    font-size: 24px;
    text-decoration: none;
}
</style>
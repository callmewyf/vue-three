<template>
    <dv-full-screen-container>
        <dv-loading v-if="loading">Loading...</dv-loading>
        <dv-border-box-10 title="dv-border-box-10">
            
        </dv-border-box-10>
    </dv-full-screen-container>    
</template>

<script>
export default {
    data() {
        return {
            loading: false,
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
}
</style>
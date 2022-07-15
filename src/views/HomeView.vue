<template>
    <div class="about" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    created() {
        // check if authenticated using store

        if (!this.$store.state.isLoggedIn) {
            this.$router.push({ name: 'about' })
        }
    },
}
</script>

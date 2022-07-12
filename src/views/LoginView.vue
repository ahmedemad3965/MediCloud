<template>
    <div class="row">
        <div class="col-5">
            <div class="login-page">
                <button class="btn btn-primary">EN</button> 
                <div class="container">
                    <div v-if="!registerActive" class="login" v-bind:class="{ error: emptyFields }">
                        <button @click="registerActive = !registerActive, emptyFields = false"
                            class="btn btn-secondary">Sign up</button>
                        <h1>Sign In</h1>
                        <form class="form-group">
                            <input v-model="emailLogin" type="email" class="form-control" placeholder="Email" required>
                            <input v-model="passwordLogin" type="password" class="form-control" placeholder="Password"
                                required>
                            <input type="submit" class="btn btn-primary" @click="doLogin">
                            <div class="social-icons">
                                <ul>
                                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>

                    <div v-else class="register" v-bind:class="{ error: emptyFields }">
                        <button @click="registerActive = !registerActive, emptyFields = false" class="btn btn-secondary">Sign in</button>
                        <h1>Sign Up</h1>
                        <form class="form-group">
                            <input v-model="emailReg" type="email" class="form-control" placeholder="Email" required>
                            <input v-model="passwordReg" type="password" class="form-control" placeholder="Password"
                                required>
                            <input v-model="confirmReg" type="password" class="form-control"
                                placeholder="Confirm Password" required>
                            <input type="submit" class="btn btn-primary" @click="doRegister">
                            <div class="social-icons">
                                <ul>
                                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-7 about">
            <AboutComponent />
        </div>
    </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
    name: 'LoginView',
    components: {
        AboutComponent,
    },
    data() {
        return {
            registerActive: false,
            emailLogin: "",
            passwordLogin: "",
            emailReg: "",
            passwordReg: "",
            confirmReg: "",
            emptyFields: false
        }
    },

    methods: {
        doLogin() {
            if (this.emailLogin === "" || this.passwordLogin === "") {
                this.emptyFields = true;
            } else {
                alert("You are now logged in");
            }
        },

        doRegister() {
            if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
                this.emptyFields = true;
            } else {
                alert("You are now registered");
            }
        }
    }
};
</script>

<style lang="scss">
.row {
    height: 100vh;
}

.login-page {
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 75%;
    height: 100%;

    h1 {
        margin-bottom: 1.5rem;
    }

    .card {
        padding: 20px;
    }

    .form-group {
        input {
            margin-bottom: 20px;
        }
    }

    .social-icons {
        text-align: center;
        font-family: "Open Sans";
        font-weight: 300;
        font-size: 1.5em;
        color: #222222;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                display: inline-block;
                zoom: 1;
                width: 65px;
                vertical-align: middle;
                border: 1px solid #e3e8f9;
                font-size: 15px;
                height: 40px;
                line-height: 40px;
                margin-right: 5px;
                background: #f4f6ff;

                a {
                    display: block;
                    font-size: 1.4em;
                    margin: 0 5px;
                    text-decoration: none;

                    i {
                        -webkit-transition: all 0.2s ease-in;
                        -moz-transition: all 0.2s ease-in;
                        -o-transition: all 0.2s ease-in;
                        -ms-transition: all 0.2s ease-in;
                        transition: all 0.2s ease-in;
                    }

                    &:focus {
                        i {
                            transition: none;
                            color: #222222;
                        }
                    }

                    &:active {
                        i {
                            transition: none;
                            color: #222222;
                        }
                    }
                }
            }
        }
    }
}

.about {
    background-color: #00A9F7;
}
</style>
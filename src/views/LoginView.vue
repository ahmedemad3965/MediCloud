<template>
    <div class="row">
        <div class="col-5">
            <div class="login-page">
                <div class="container">
                    <div v-if="!registerActive" class="login" v-bind:class="{ error: emptyFields }">
                        <h1>Log in</h1>
                        <form class="form-group">
                            <div class="p-float-label input-group">
                                <InputText id="email" type="email" v-model="emailLogin" required />
                                <label for="email">Email</label>
                            </div>

                            <div class="p-float-label input-group">
                                <InputText id="password" type="password" v-model="passwordLogin" required />
                                <label for="password">Password</label>
                            </div>

                            <div>
                                Don't have an account?
                                <a href="#" @click="(registerActive = !registerActive), (emptyFields = false)">
                                    Sign up
                                </a>
                            </div>
                            <button type="submit" class="btn btn-primary submit" @click="doLogin">Submit</button>
                            <div class="btn-google">
                                <button><img height="16" width="16"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />Login
                                    with Google</button>
                            </div>
                        </form>
                    </div>

                    <div v-else class="register" v-bind:class="{ error: emptyFields }">
                        <h1>Sign Up</h1>
                        <form class="form-group">
                            <div class="p-float-label input-group">
                                <InputText id="name" type="text" v-model="name" required />
                                <label for="name">Name</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="email" type="email" v-model="email" required />
                                <label for="email">Email</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="password" type="password" v-model="password" required />
                                <label for="password">Password</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="confirmPassword" type="password" v-model="confirmPassword" required />
                                <label for="confirmPassword">Confirm Password</label>
                            </div>
                            <div>
                                Already have an account?
                                <a href="#" @click="(registerActive = !registerActive), (emptyFields = false)">
                                    Log in
                                </a>
                            </div>
                            <button type="submit" class="btn btn-primary submit" @click="doRegister">Submit</button>
                            <div class="btn-google">
                                <button><img height="16" width="16"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />Sign
                                    up with Google</button>
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
    name: "LoginView",
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
            emptyFields: false,
        };
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
            if (
                this.emailReg === "" ||
                this.passwordReg === "" ||
                this.confirmReg === ""
            ) {
                this.emptyFields = true;
            } else {
                alert("You are now registered");
            }
        },
    },
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

    .submit {
        margin-top: 20px;
        width: 100%;
        border-radius: 25px;
    }

    h1 {
        margin-bottom: 1.5rem;
    }

    .card {
        padding: 20px;
    }

    .form-group {
        .input-group {
            margin-bottom: 25px;

            label {
                margin-left: 15px;
            }
        }

        input {
            padding: 8px 12px;
            border-radius: 25px;
            width: 100%;
        }
    }

    .btn-google {
        color: #0068f9;
        background-color: #ffffff;
        border: #0068f9 solid 1px;
        border-radius: 25px;
        margin-top: 10px;
        padding: 2px 12px;

        button {
            color: #0068f9;
            background-color: transparent;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            overflow: hidden;
            outline: none;
        }

        img {
            margin-right: 5px;
        }

        &:hover {
            background-color: #f7f7f7;
        }

        &:active {
            background-color: #f7f7f7;
        }
    }
}

.about {
    background-color: #00a9f7;
}
</style>

<template>
    <div class="row">
        <div class="col-md-5 col-12">
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
                        </form>
                        <div class="btn-google">
                            <button><img height="16" width="16"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />Login
                                with Google</button>
                        </div>
                    </div>

                    <div v-else class="register" v-bind:class="{ error: emptyFields }">
                        <h1>Sign Up</h1>
                        <form class="form-group">
                            <div class="p-float-label input-group">
                                <InputText id="name" type="text" v-model="name" required />
                                <label for="name">Name</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="email" type="email" v-model="emailReg" required />
                                <label for="email">Email</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="password" type="password" v-model="passwordReg" required />
                                <label for="password">Password</label>
                            </div>
                            <div class="p-float-label input-group">
                                <InputText id="confirmPassword" type="password" v-model="confirmReg" required />
                                <label for="confirmPassword">Confirm Password</label>
                            </div>
                            <div>
                                Already have an account?
                                <a href="#" @click="(registerActive = !registerActive), (emptyFields = false)">
                                    Log in
                                </a>
                            </div>
                            <button type="submit" class="btn btn-primary submit" @click="doRegister">Submit</button>
                        </form>
                        <div class="btn-google">
                            <button><img height="16" width="16"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" />Sign
                                up with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="about col-md-7 col-12">
            <AdsComponent :ads="ads" />
        </div>
    </div>
</template>

<script>
import AdsComponent from "@/components/AdsComponent.vue";

export default {
    name: "PatientsAuthView",
    components: {
        AdsComponent,
    },
    data() {
        return {
            registerActive: false,
            name: "",
            emailLogin: "",
            passwordLogin: "",
            emailReg: "",
            passwordReg: "",
            confirmReg: "",
            emptyFields: false,
            ads: [],
        };
    },

    mounted() {
        this.getAds();
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

        getAds() {
            return [
                {
                    title: '100% Secure and Trusted Cloud',
                    details: 'We use the most secure and trusted cloud technologies to store your data.',
                    image: '1.jpg',
                },
                {
                    title: 'Data Insights and future predections',
                    details: 'We enable you to see the data insights and future predictions of your patients records.',
                    image: '2.png',
                },
                {
                    title: 'Get increased flow and revenue',
                    details: 'We help you to get increased flow and revenue by providing you with the best solutions.',
                    image: '3.jpg',
                },
            ]
        },
    }
};
</script>

<style scoped lang="scss">
.row {
    height: 100vh;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
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
        }

        button {
            padding: 8px 0px;
        }

        input {
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
        padding: 6px 12px;

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
            background-color: #f3f3f3;
        }

        &:active {
            background-color: #f3f3f3;
        }
    }
}

.about {
    background-color: #00a9f7;

    @media (max-width: 768px) {
        margin-top: 50px;
    }
}
</style>

<template>
    <MainLayout>
        <div class="registration-form">
            <div class="image-container">
                <h3 class="text-center" style="color: #E9E0CE">Registration Info</h3>
                <img src="https://picsum.photos/200" alt="Random Image from Lorem Picsum">
            </div>
            <div class="form-container">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input id="firstname" v-model="user.firstname" type="text" required>
                    </div>
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input id="lastname" v-model="user.lastname" type="text" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" v-model="user.email" type="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" v-model="user.password" type="password" required>
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation">Confirm Password</label>
                        <input id="password_confirmation" v-model="user.password_confirmation" type="password" required>
                    </div>
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select id="country" v-model="user.country" required>
                            <option value="" disabled>Select a country</option>
                            <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name
                            }}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="city">City</label>
                        <select id="city" v-model="user.city" required>
                            <option value="" disabled>Select a city</option>
                            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <button type="submit" class="submit-button">Register</button>
                        <div class="already-have-account">
                            <!-- <a href="#">Already have an account?</a> -->
                            <router-link :to="{ path: '/login' }" class="btn start-button">Already have an
                                account?</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </MainLayout>
</template>



<script>
import axios from 'axios';
import MainLayout from '@/components/layouts/MainLayout.vue';

export default {
    components: {
        MainLayout,
    },
    data() {
        return {
            user: { firstname: '', lastname: '', email: '', password: '', password_confirmation: '', country: '', city: '' },
            countries: [],
            cities: [],
        };
    },
    async mounted() {
        await this.fetchCountries();
    },
    methods: {
        async fetchCountries() {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
            this.countries = response.data.data.map(country => ({ name: country.country, code: country.iso3 }));
        },
        async fetchCities() {
            const selectedCountry = this.countries.find(country => country.code === this.user.country).name;
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', { country: selectedCountry });
            this.cities = response.data.data;
        },
        async register() {
            await axios.post('http://127.0.0.1:8000/api/register', this.user);
            // Redirect or handle success
        },
    },
    watch: {
        'user.country'(newVal) {
            if (newVal) {
                this.fetchCities();
            }
        },
    },
};
</script>


<style scoped>
.already-have-account {
    text-align: center;
    margin-top: 20px;
}

.already-have-account a {
    color: #E25444;
    text-decoration: none;
}

.already-have-account a:hover {
    text-decoration: underline;
}

.registration-form {
    display: flex;
    flex-wrap: wrap;
    padding: 5vw;
    gap: 20px;
    /* Creates space between image and form */
}

.image-container {
    flex: 1;
    /* Equal width for both containers */
    background-color: #122b22;
    padding: 20px;
    /* Padding around the image to create a frame */
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    /* Use flexbox */
    flex-direction: column;
    /* Stack items vertically */
    justify-content: center;
    /* Center items vertically */
    align-items: center;
    /* Center items horizontally */
}

.image-container img {
    width: 100%;
    /* Makes the image responsive */
    height: auto;
    border-radius: 5px;
}

.form-container {
    flex: 1;
    /* Equal width for both containers */
    background-color: #122b22;
    padding: 3vw;
    border-radius: 5px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    color: #E9E0CE;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    background-color: #231A00;
    border: 1px solid #000;
    color: #E9E0CE;
    border-radius: 4px;
    /* Slight radius for the inputs */
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #E25444;
}

.submit-button {
    background-color: #E25444;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    /* Slight radius for the button */
}

.submit-button:hover,
.submit-button:focus {
    border: 1px solid #231A00;
    color: #231A00;
}

@media (max-width: 768px) {
    .registration-form {
        flex-direction: column;
    }

    .image-container,
    .form-container {
        flex: none;
        /* Allows the image and form to stack on small screens */
        width: 100%;
    }
}
</style>

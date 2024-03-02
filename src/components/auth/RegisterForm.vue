
  
<template>
    <MainLayout>
        <div class="registration-form">
            <div class="image-container">
                <h3 class="text-center" style="color: #E9E0CE">Registration Info</h3>
                <img src="https://picsum.photos/200" alt="Random Image from Lorem Picsum">
            </div>
            <div class="form-container">
                <form @submit.prevent="register">
                    <!-- First Name -->
                    <div class="form-group">
                        <label for="firstname">First Name</label>
                        <input id="firstname" v-model="user.firstname" type="text" @blur="validateFirstName">
                        <span v-if="validationErrors.firstname" class="error-message">{{ validationErrors.firstname
                        }}</span>
                    </div>

                    <!-- Last Name -->
                    <div class="form-group">
                        <label for="lastname">Last Name</label>
                        <input id="lastname" v-model="user.lastname" type="text" @blur="validateLastName">
                        <span v-if="validationErrors.lastname" class="error-message">{{ validationErrors.lastname }}</span>
                    </div>

                    <!-- Email -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" v-model="user.email" type="email" @blur="validateEmail">
                        <span v-if="validationErrors.email" class="error-message">{{ validationErrors.email }}</span>
                    </div>

                    <!-- Password -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" v-model="user.password" type="password" @blur="validatePassword">
                        <span v-if="validationErrors.password" class="error-message">{{ validationErrors.password }}</span>
                    </div>

                    <!-- Password Confirmation -->
                    <div class="form-group">
                        <label for="password_confirmation">Confirm Password</label>
                        <input id="password_confirmation" v-model="user.password_confirmation" type="password"
                            @blur="validatePasswordConfirmation">
                        <span v-if="validationErrors.password_confirmation" class="error-message">{{
                            validationErrors.password_confirmation }}</span>
                    </div>

                    <!-- Country -->
                    <div class="form-group">
                        <label for="country">Country</label>
                        <select id="country" v-model="user.country">
                            <option value="" disabled>Select a country</option>
                            <option v-for="country in countries" :key="country.code" :value="country.code">{{ country.name
                            }}</option>
                        </select>
                        <span v-if="validationErrors.country" class="error-message">{{ validationErrors.country }}</span>
                      <div v-if="isLoadingCountries">Loading countries...</div>
                      <div v-else-if="loadCountriesError" class="error-message">Failed to load countries. Please try again.</div>
                    </div>

                    <!-- City -->
                    <div class="form-group">
                        <label for="city">City</label>
                        <select id="city" v-model="user.city">
                            <option value="" disabled>Select a city</option>
                            <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                        </select>
                        <span v-if="validationErrors.city" class="error-message">{{ validationErrors.city }}</span>
                      <div v-if="isLoadingCities">Loading cities...</div>
                      <div v-else-if="loadCitiesError" class="error-message">Failed to load cities. Please try again.</div>
                    </div>

                    <div class="d-flex justify-content-between mt-4">
                        <button type="submit" class="submit-button">Register</button>
                        <div class="already-have-account">
                            <router-link :to="{ path: '/login' }" class="btn start-button">Already have an account?
                            </router-link>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    </MainLayout>
</template>
  
<script>
import axios from 'axios';
import MainLayout from '@/components/layouts/usersLayout/MainLayout.vue';

export default {
    components: {
        MainLayout,
    },
    data() {
        return {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: '',
                country: '',
                city: '',
            },
            countries: [],
            cities: [],
            isLoadingCountries: false,
            isLoadingCities: false,
            // validationMessages: {
            //     firstname: '',
            //     lastname: '',
            //     email: '',
            //     password: '',
            //     country: '',
            //     city: '',
            // },
            validationErrors: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                password_confirmation: '',
                country: '',
                city: '',
            },
          loadCountriesError: '',
          loadCitiesError: '',
        };
    },
    async mounted() {
        await this.fetchCountries();
    },
    methods: {
      async fetchCountries() {
        this.isLoadingCountries = true;
        const cachedCountries = localStorage.getItem('countries');
        if (cachedCountries) {
          this.countries = JSON.parse(cachedCountries);
          this.isLoadingCountries = false;
        } else {
          try {
            const response = await axios.get('https://countriesnow.space/api/v0.1/countries/');
            this.countries = response.data.data.map(country => ({
              name: country.country,
              code: country.iso3
            }));
            localStorage.setItem('countries', JSON.stringify(this.countries));
          } catch (error) {
            console.error('Error fetching countries:', error);
            this.loadCountriesError = 'Failed to load countries.';
          } finally {
            this.isLoadingCountries = false;
          }
        }
      },
      async fetchCities() {
            if (!this.user.country) return;
            this.isLoadingCities = true;
            const selectedCountryName = this.countries.find(country => country.code === this.user.country).name;
            try {
                const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
                    country: selectedCountryName
                });
                this.cities = response.data.data;
            } catch (error) {
                console.error('Error fetching cities:', error);
            } finally {
                this.isLoadingCities = false;
            }
        },
        async register() {
            // Find the full country name based on the selected ISO code
            const selectedCountryName = this.countries.find(country => country.code === this.user.country).name;
            // Create a new user object to include the full country name
            const userWithFullCountryName = {
                ...this.user,
                country: selectedCountryName,
            };
            try {
              await axios.post('/register', userWithFullCountryName);
                this.$router.push('/login');
            } catch (error) {
                console.error('Registration error:', error);
            }
        },
        validateFirstName() {
            this.validationErrors.firstname = this.user.firstname && /\d/.test(this.user.firstname) ? 'First name cannot contain numbers.' : '';
        },
        validateLastName() {
            this.validationErrors.lastname = this.user.lastname && /\d/.test(this.user.lastname) ? 'Last name cannot contain numbers.' : '';
        },
        validateEmail() {

            // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.validationErrors.email = this.user.email && !emailRegex.test(this.user.email) ? 'Invalid email.' : '';
        },
        validatePassword() {
            this.validationErrors.password = this.user.password.length < 8 ? 'Password must be at least 8 characters long.' : '';
        },
        validatePasswordConfirmation() {
            if (this.user.password !== this.user.password_confirmation) {
                this.validationErrors.password_confirmation = 'Password does not match.';
            } else {
                this.validationErrors.password_confirmation = '';
            }
        },
        /*validateCountry() {
            this.validationErrors.country = !this.user.country ? 'Please select a country.' : '';
        },
        validateCity() {
            this.validationErrors.city = !this.user.city ? 'Please select a city.' : '';
        },*/
    },
    watch: {
        'user.country'(newVal) {
            if (newVal) {
                this.fetchCities();
            }
        },
        'user.firstname'(value) {
            this.validationErrors.firstname = value && /\d/.test(value) ? 'First name cannot contain numbers.' : '';
        },
        'user.lastname'(value) {
            this.validationErrors.lastname = value && /\d/.test(value) ? 'Last name cannot contain numbers.' : '';
        },
        'user.email'(value) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.validationErrors.email = value && !emailRegex.test(value) ? 'Invalid email.' : '';
        },
        'user.password'(value) {
            this.validationErrors.password = value.length < 8 ? 'Password must be at least 8 characters long.' : '';
        },
        'user.city'(value) {
            this.validationErrors.city = !value ? 'Please select a city.' : '';
        },
    },


};
</script>
 
 


<style scoped>
/* .validation-message {
    color: red;
} */
.error-message {
    color: red;
    font-size: 0.8em;
}

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

<template>
    <MainLayout>
        <div class="registration-form">
            <div class="form-container">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" v-model="user.email" type="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input id="password" v-model="user.password" type="password" required>
                    </div>
                    <div class="form-group ">
                        <input id="remember_me" v-model="user.remember_me" type="checkbox">
                        <label for="remember_me" class="label-agree-term"><span><span></span></span>Remember me</label>
                    </div>
                    <!-- <div class="form-group">
                        <input type="checkbox" name="remember" id="remember" class="agree-term" />
                        <label for="remember" class="label-agree-term"><span><span></span></span>Remember me</label>
                    </div> -->
                    <!-- <input type="checkbox" value="lsRememberMe" id="rememberMe"> 
                    <label for="rememberMe">Remember me</label> -->
                    <div class="d-flex justify-content-between mt-4">
                        <button type="submit" class="submit-button">Login</button>
                        <div class="create-account">
                            <router-link :to="{ path: '/register' }" class="btn start-button">Don't have an account?
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
            <div class="image-container">
                <h3 class="text-center" style="color: #E9E0CE">Login</h3>
                <img src="https://picsum.photos/200" alt="Random Image from Lorem Picsum">
            </div>
        </div>
    </MainLayout>
</template>

<script>
import MainLayout from '@/components/layouts/usersLayout/MainLayout.vue';

export default {
  components: {
    MainLayout,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        remember_me: false,
      },
      errorMessage: '', // To display login errors
    };
  },
  methods: {
    async login() {
      try {
        // Directly await the dispatch without assigning its result to a variable
        await this.$store.dispatch('login', this.user);
        this.redirectBasedOnRoleId();
      } catch (error) {
        console.error('Login failed:', error);
        this.errorMessage = 'Failed to login. Please check your credentials.';
      }
    },
    redirectBasedOnRoleId() {
      const roleId = this.$store.state.user.roles[0]?.pivot?.role_id;
      switch (roleId) {
        case 1: // Admin
          this.$router.push('/admin/DashBoard');
          break;
        case 2: // Owner
          this.$router.push('/owner/profile');
          break;
        case 3: // Bidder
          this.$router.push('/bidder/profile');
          break;
        default:
          this.$router.push('/');
          break;
      }
    }
  }
};
</script>





<style scoped>
.registration-form {
    display: flex;
    flex-wrap: wrap;
    padding: 5vw;
    gap: 20px;
}

.image-container {
    flex: 1;
    background-color: #122b22;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image-container img {
    width: 100%;
    height: auto;
    border-radius: 5px;
}

.form-container {
    flex: 1;
    background-color: #122b22;
    padding: 3vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* Center form vertically */
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    color: #E9E0CE;
    display: inline-block;
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 10px;
    background-color: #231A00;
    border: 1px solid #000;
    color: #E9E0CE;
    border-radius: 4px;
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
}

.submit-button:hover,
.submit-button:focus {
    border: 1px solid #231A00;
    color: #231A00;
}

.create-account {
    text-align: center;
    margin-top: 20px;
}

.create-account a {
    color: #E25444;
    text-decoration: none;
}

.create-account a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .registration-form {
        flex-direction: column-reverse;
        /* Reverse the order of flex items on phone-width screens */
    }

    .image-container,
    .form-container {
        flex: none;
        width: 100%;
    }
}
</style>

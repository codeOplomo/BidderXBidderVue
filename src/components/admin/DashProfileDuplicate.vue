<template>
  <DashMainLayout>
    <div class="container mt-5">
      <h2 class="mb-4">Profile Settings</h2>
      <div class="row">
        <!-- Display Section -->
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-header">
              Admin Details
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">First Name: {{ user?.firstname }}</li>

              <li class="list-group-item">Last Name: {{ user?.lastname }}</li>
              <li class="list-group-item">Email: {{ user?.email }}</li>
            </ul>
          </div>
        </div>
        <!-- Update Form Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="updateProfile">
                <div class="mb-3">
                  <label for="firstName" class="form-label">First Name</label>
                  <input type="text" class="form-control" id="firstName" v-model="formData.firstname">
                </div>
                <div class="mb-3">
                  <label for="lastName" class="form-label">Last Name</label>
                  <input type="text" class="form-control" id="lastName" v-model="formData.lastname">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <!-- Add more fields as needed -->
                <button type="submit" class="btn btn-primary">Update Profile</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  </DashMainLayout>
</template>


<script>
import DashMainLayout from '@/components/layouts/dashminLayout/DashMainLayout.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    DashMainLayout,
  },
  data() {
    return {
      loading: true,
      formData: {
        firstname: '',
        lastname: '',
        email: '',
      },
    };
  },
  computed: {
    ...mapGetters(['fullName', 'userRole']),
    user() {
      return this.$store.state.user; // Fetches user data from Vuex state for display
    }
  },
  methods: {
    ...mapActions(['fetchAdminData', 'updateAdminData']),
    async updateProfile() {
      try {
        await this.updateAdminData(this.formData); // Uses formData for update operation
        await this.fetchAdminData(); // Optionally refetch the admin data to update the display
        // Clear formData after successful update if needed
        this.formData.firstname = '';
        this.formData.lastname = '';
        this.formData.email = '';
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    },
  },
  async mounted() {
    try {
      await this.fetchAdminData();
      this.loading = false; // Data has been fetched
    } catch (error) {
      console.error('Error during mounted:', error);
      this.loading = false;
    }
  },

}
</script>






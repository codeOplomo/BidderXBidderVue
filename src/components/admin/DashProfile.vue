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
              <li class="list-group-item">First Name: {{ user.firstname }}</li>
              <li class="list-group-item">Last Name: {{ user.lastname }}</li>
              <li class="list-group-item">Email: {{ user.email }}</li>
            </ul>
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

  },
  computed: {
    computed: {
      ...mapGetters(['fullName', 'userRole', 'hasRole']),
    },

    user() {
      return this.$store.state.user; // Fetches user data from Vuex state for display
    }
  },
  methods: {
    ...mapActions(['fetchAdminData']),

  },
  async mounted() {
    await this.fetchAdminData(); // Fetches admin data for display but does not populate formData
  },
}
</script>






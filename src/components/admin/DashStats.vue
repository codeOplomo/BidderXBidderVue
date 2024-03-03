<template>
    <div class="container-fluid pt-4 px-4" id="content-container">
      <div class="row g-4">
        <div class="col-sm-6 col-xl-3" v-for="(stat, index) in stats" :key="index">
          <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i :class="`fa ${stat.icon} fa-3x text-primary`"></i>
            <div class="ms-3">
              <p class="mb-2">{{ stat.title }}</p>
              <h5 class="mb-0">{{ stat.value }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashStats',
    data() {
      return {
        // Example stats data structure
        stats: [
          { title: 'Total Requests', value: '123', icon: 'fa-inbox' },
          { title: 'Total Partners', value: '456', icon: 'fa-users' },
          { title: 'Total Users', value: '789', icon: 'fa-user' },
          { title: 'Total Projects', value: '101', icon: 'fa-briefcase' },
        ],
      };
    },
    // You can fetch real data using a method or lifecycle hook like mounted()
    mounted() {
      // Fetch data here and update `stats`
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  
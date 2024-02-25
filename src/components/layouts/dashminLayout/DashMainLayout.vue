<template>
    <div>
      <DashBars></DashBars>
    </div>
  </template>
  
  <script>
  import DashBars from '@/components/layouts/dashminLayout/DashBars.vue';
  import '@/assets/css/dashboard.css';
  import '@/assets/css/bootstrap/bootstrap.min.css';
  import '@/assets/js/lib/owlcarousel/assets/owl.carousel.min.css';
  import '@/assets/js/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';
  import '@/assets/js/chart.min.js';
  import '@/assets/js/lib/easing/easing.min.js';
  
  export default {
    components: {
      DashBars,
    },
    async mounted() {
      // Dynamically import the JavaScript files
      await Promise.all([
        import('@/assets/js/lib/waypoints/waypoints.min.js'),
        import('@/assets/js/lib/owlcarousel/owl.carousel.min.js'),
        import('@/assets/js/lib/tempusdominus/js/moment.min.js'),
        import('@/assets/js/lib/tempusdominus/js/moment-timezone.min.js'),
        import('@/assets/js/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js'),
        import('@/assets/js/dashboard.js'),
      ]).then(() => {
        console.log('All dynamic scripts loaded');
        // Initialization code here (if needed)
      }).catch((error) => {
        console.error('Error loading scripts:', error);
      });
    },
  };
  </script>
  
  <style scoped>
  </style>
  
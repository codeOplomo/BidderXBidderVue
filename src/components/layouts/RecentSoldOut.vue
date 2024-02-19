<template>
    <div class="card-body">
      <div class="d-flex flex-start">
        <!-- Creator's Picture -->
        <img class="rounded-circle shadow-1-strong me-3" :src="creatorPicture" alt="avatar" width="60" height="60" />
  
        <div>
          <!-- Auction Information -->
          <h6 class="fw-bold mb-1" style="color: #E9E0CE;">{{ auctionTitle }}</h6>
          <p class="mb-0" style="color: #bfb8aa;">{{ auctionCategory }}</p>
          <p class="mb-0" style="color: #E25444; font-weight: bold;">${{ auctionPrice }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        creatorPicture: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp",
        auctionTitle: "Auction Title",
        auctionCategory: "Auction Category",
        auctionPrice: 100.0,
        auctionDate: "2021-03-15",
        auctionStatus: "Sold Out",
      };
    },
    methods: {
      formatDate(date) {
        // Implement a date formatting function if needed
        return date;
      }
    },
    computed: {
      statusClass() {
        // Add logic to determine the appropriate class based on auctionStatus
        return this.auctionStatus === "Sold Out" ? "bg-success" : "bg-info";
      }
    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  /* You can style the badge background colors in the statusClass computed property */
  </style>
  
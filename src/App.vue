<template>
  <div id="app">
    <MainLayout>
      <!-- Your main content goes here -->
      <div style="padding: 0 3vw;">
        <!-- <h1>HelloWorld</h1> -->
        <AuctionOverviewCard :auction="sampleAuction" />
        <AuctionCardElements />
        <router-view></router-view>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/components/layouts/MainLayout.vue';
import AuctionOverviewCard from '@/components/AuctionOverviewCard.vue';
import AuctionCardElements from '@/components/AuctionCardElements.vue';

export default {
  components: {
    MainLayout,
    AuctionOverviewCard,
    AuctionCardElements,
  },
  data() {
    return {
      sampleAuction: {
  name: 'Sample Auction',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  startingBid: 10.99,
  price: 19.99,
  image: 'https://example.com/sample-image.jpg',
  tags: ['Electronics', 'Gadgets', 'New'],
  category: 'Technology',
  // Add other properties as needed
},


    };
  },
};
</script>

<style>
body {
  background-color: #002d2d;
  margin: 0;
}
</style>

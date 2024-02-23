<template>
<MainLayout>
      <!-- Your main content goes here -->
      <div style="padding: 0 3vw;">
        <!-- <h1>HelloWorld</h1> -->
        <AuctionOverviewCard :auction="sampleAuction" />
        <AuctionCardElements />
        
      </div>
    </MainLayout>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

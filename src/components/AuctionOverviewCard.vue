<template>
  <div class="auction-overview-card">
    <div class="image-container">
      <img :src="auction.image" :alt="auction.name" class="product-image" />
    </div>
    <div class="auction-details">
      <h3 class="auction-overview-name">{{ auction.name }}</h3>
      <p class="auction-overview-price">{{ formatPrice(auction.startingBid) }}</p>
      <div class="description-section">
        <div class="border-top"></div>
        <p class="auction-overview-description">{{ auction.description }}</p>
        <div class="border-bottom"></div>
      </div>
      <p class="item-condition">Item Condition: {{ auction.itemCondition }}</p>
      <div>
      <button @click="placeBid">Place Bid</button></div>
      <div>
      <button @click="addToWishlist">Add to Wishlist</button>
      <button @click="askQuestion">Ask a Question</button>
     </div>
      <div class="tags-categories">
        <p>Tags: {{ auction.tags.join(', ') }}</p>
        <p>Category: {{ auction.category }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    auction: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatPrice(price) {
      if (typeof price === 'number') {
        return `$${price.toFixed(2)}`;
      } else {
        return 'Price not available';
      }
    },
    addToWishlist() {
      // Add your logic for adding the product to the cart
      console.log(`Added ${this.auction.name} to the Wishlist`);
    },
  },
};
</script>
<style scoped>
.auction-overview-card {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.auction-overview-card:hover {
  transform: scale(1.05);
}

.image-container {
  background-color: #231A00;
  padding: 10px;
  flex: 1;
}

.product-image {
  width: 100%;
  height: auto;
}

.auction-details {
  padding: 16px;
  flex: 1;
}

.auction-overview-name {
  font-size: 18px;
  margin-bottom: 8px;
  color: #bfb8aa; /* Beige color for the title */
}

.auction-overview-description {
  color: #bfb8aa; /* Beige color for the description */
  margin-bottom: 12px;
}

.auction-overview-price {
  font-size: 16px;
  margin-bottom: 12px;
  color: #E25444; /* Orange color for the starting bid */
}

button {
  background-color: #231A00;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  color: #E25444;
  border: solid 1px;
  border-color: #E25444;
}


.item-condition {
  margin-bottom: 12px;
  color: #bfb8aa; /* Beige color for the condition */
}

.tags-categories {
  margin-top: 12px;
  color: #555;
}

/* Media query for phone width */
@media (max-width: 768px) {
  .auction-overview-card {
    flex-direction: column;
  }

  .image-container,
  .auction-details {
    flex: none;
    width: 100%;
  }
}
</style>


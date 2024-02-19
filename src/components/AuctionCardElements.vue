<template>
  <!-- Nav pills container -->
  <div class="nav-pills">
    <ul>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: selectedTab === 'description' }" @click="selectTab('description')" href="#">
          Description
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: selectedTab === 'bids' }" @click="selectTab('bids')" href="#">
          Bids
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{ active: selectedTab === 'message' }" @click="selectTab('message')" href="#">
          Private Message
        </a>
      </li>
    </ul>
  </div>

  <!-- Display selected content -->
  <div v-if="selectedTab === 'description'">
    <!-- Description content goes here -->
    <p>Description content goes here...</p>
  </div>
  <div v-else-if="selectedTab === 'bids'">
    <!-- Bids content goes here -->
    <p>Bids content goes here...</p>
  </div>
  <div v-else-if="selectedTab === 'message'">
    <!-- Private message content goes here -->
    <p>Private message content goes here...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'description' // Default to description tab
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style>
/* Add your styles here */
.nav-pills {
  display: flex;
  justify-content: space-between; /* or use space-around, space-evenly, etc. based on your preference */
  align-items: center; /* Align items vertically in the center */
  background-color: #122b22;
  border: 2px solid #E25444;
  border-radius: 8px;
  padding: 5px;
}

.nav-pills ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-pills .nav-item {
  border: 2px dashed #E25444;
  border-radius: 8px;
  margin-right: 10px;
}

.nav-pills .nav-item a {
  color: #E9E0CE;
  text-decoration: none;
  padding: 8px 12px; /* Adjust padding as needed */
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

.nav-pills .nav-item a.active,
.nav-pills .nav-item a:hover {
  background-color: #231A00;
  color: #E25444;
}
</style>

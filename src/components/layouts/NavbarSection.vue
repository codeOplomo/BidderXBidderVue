<!-- Navbar.vue -->

<template>
  <nav :class="{ sticky: isSticky }">
    <!-- Your navigation content goes here -->
    <div class="divmain-page-LqZ">
      <div class="before-TfH"></div>
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent" id="navbar">
        <div class="container">
          <div class="d-flex flex-lg-row justify-content-between align-items-center w-100 nav-section">
            <!-- Left section for the logo -->
            <div class="logo-section d-flex align-items-center justify-content-center mb-2 mb-lg-0 text-center">
              <a class="navbar-brand" href="#">
                <img class="logo" src="#" alt="BidderxBidder Logo" />
              </a>
            </div>

            <!-- Right section for other elements -->
            <div class="d-flex align-items-center">
              <!--  navigation links  -->
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                      <li><a class="dropdown-item" href="#">Service 1</a></li>
                      <li><a class="dropdown-item" href="#">Service 2</a></li>
                      <li><a class="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="exploreDropdown" role="button"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      Explore
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="exploreDropdown">
                      <li><a class="dropdown-item" href="#">Service 1</a></li>
                      <li><a class="dropdown-item" href="#">Service 2</a></li>
                      <li><a class="dropdown-item" href="#">Service 3</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <!-- Spacer between sections -->
              <div class="mx-2"></div>

              <!-- Section for icons, button, and search bar -->
              <div class="d-flex align-items-center me-3">
                <!--  search input  -->
                <div class="ms-3 d-none d-md-block">
                  <div class="input-group">
                    <input type="text" class="form-control search-input" placeholder="Search for products..."
                      onfocus="this.style.color='#E9E0CE';" onblur="this.style.color='#ACACAC';" />
                    <button class="btn btn-outline-secondary input-group-text" type="button">
                      <lord-icon src="https://cdn.lordicon.com/kkvxgpti.json" trigger="hover" colors="primary:#ddd8c4"
                        style="
                          width: 20px;
                          height: 20px;
                          max-width: 40px;
                          max-height: 40px;
                        ">
                      </lord-icon>
                    </button>
                  </div>
                </div>

                <!-- Add the login button with responsive classes -->
                <div class="ms-3">
                  <button class="btn login-button">Login</button>
                </div>

                <!-- Add the menu icon for small screens -->
                <div class="ms-3 d-lg-none d-xl-none">
                  <a href="#" class="icon-link" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
                    <!-- Your Existing Menu Icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      class="main-grid-item-icon" fill="none" stroke="#E9E0CE" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" onmouseover="this.style.stroke='#766161';"
                      onmouseout="this.style.stroke='#E9E0CE';">
                      <line x1="3" x2="21" y1="12" y2="12" />
                      <line x1="3" x2="21" y1="6" y2="6" />
                      <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                  </a>
                </div>

                <!-- Add the sun and moon icons with responsive classes -->
                <div class="ms-3">
                  <!-- Sun Icon -->
                  <a href="#" class="icon-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      class="main-grid-item-icon" fill="none" stroke="#E9E0CE" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" onmouseover="this.style.stroke='#766161';"
                      onmouseout="this.style.stroke='#E9E0CE';">
                      <circle cx="12" cy="12" r="5" />
                      <line x1="12" x2="12" y1="1" y2="3" />
                      <line x1="12" x2="12" y1="21" y2="23" />
                      <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
                      <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
                      <line x1="1" x2="3" y1="12" y2="12" />
                      <line x1="21" x2="23" y1="12" y2="12" />
                      <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
                      <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
                    </svg>
                  </a>

                  <!-- Moon Icon -->
                  <a href="#" class="icon-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                      class="main-grid-item-icon" fill="none" stroke="#766161" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2" onmouseover="this.style.stroke='#E9E0CE';"
                      onmouseout="this.style.stroke='#766161';">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <!-- Offcanvas sidebar menu -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="sidebarLabel">Menu</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body d-flex justify-content-center">
        <!-- Add your navigation links here -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Services
            </a>
            <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
              <li><a class="dropdown-item" href="#">Service 1</a></li>
              <li><a class="dropdown-item" href="#">Service 2</a></li>
              <li><a class="dropdown-item" href="#">Service 3</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="exploreDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Explore
            </a>
            <ul class="dropdown-menu" aria-labelledby="exploreDropdown">
              <li><a class="dropdown-item" href="#">Service 1</a></li>
              <li><a class="dropdown-item" href="#">Service 2</a></li>
              <li><a class="dropdown-item" href="#">Service 3</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var navbar = document.getElementById("navbar");
      var offset = navbar.offsetTop;

      if (window.pageYOffset > offset) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};


</script>


<style scoped>
.navbar {
  background-color: transparent;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  backdrop-filter: blur(0);
  justify-content: center;
  align-items: center;
  padding: 5px 0;
}

.navbar.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.navbar-inner {
  display: flex;
  gap: 20%;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  max-height: 40px;
  margin-right: 20px;
}

.nav-link {
  text-decoration: none;
  font-weight: bold;
  color: #E9E0CE;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ACACAC;
}

.nav-symbol {
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  right: -8px;
  transform: translateY(-50%);
  color: #E9E0CE;
}

.search-input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ACACAC;
  border-radius: 5px;
  background-color: transparent;
  color: #E9E0CE;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #E25444;
  box-shadow: none;
  background-color: transparent !important;
}

.input-group-text {
  border: 1px solid #ACACAC;
  border-radius: 0 5px 5px 0;
  background-color: transparent;
  color: #ACACAC;
}

.search-input:focus+.input-group-text {
  border-color: #E25444;
}

.dropdown-menu {
  background-color: #237676;
}

.dropdown-item {
  color: #E9E0CE !important;
}

.login-button {
  background-color: #231A00;
  color: #E9E0CE;
  border: 1px solid #231A00;
  border-radius: 5px;
  padding: 8px 15px;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.login-button:hover {
  background-color: #231A00;
  border-color: #E25444;
  color: #E25444;
}

.icon-link {
  cursor: pointer;
  transition: color 0.3s ease;
  margin-right: 10px; /* Add margin between icons */
}

.icon-link:last-child {
  margin-right: 0; /* Remove margin from the last icon */
}
.icon-link:hover {
  color: #766161;
}



/* Common styles for the sun and moon icons */
.icon-link svg {
  border-radius: 50%; /* Add circular border */
  border: 1px solid #ACACAC;
 /* Optional: Add border color */
  box-sizing: content-box; /* Keep content-box sizing */
  padding: 8px; /* Add padding for spacing */
}

.direct-teams-for-your-dedicated-dreams-EtK {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

.divbgimage-22-Y8K {
  width: 100%;
  height: auto;
  display: block;
}

.divrow-qt7 {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.divrn-about-card-yjR,
.divrn-about-card-dDd {
  flex: 0 0 48%;
}

.why-we-do-this-eKm,
.helping-you-grow-in-every-stage-vCj {
  font-weight: bold;
  margin-bottom: 10px;
}

.link-HGF {
  color: #E25444;
  cursor: pointer;
}

.divrow-C3m {
  padding: 20px;
  text-align: center;
}

.create-sell-well-collect-your-wonderful-nfts-at-nuron-very-fast-iH1 {
  font-size: 24px;
  font-weight: bold;
  color: #E9E0CE;
  margin-bottom: 20px;
}

.user-actions,
.cart {
  margin-left: auto;
}

.search-input::placeholder {
  color: #ACACAC;
}

.container {
  max-width: 95%;
  margin: 0 auto;
  padding: 20px;
}

.divrn-about-wrapper-NsM {
  max-width: 800px;
  margin: 0 auto;
  color: #E9E0CE;
}


/* Styles for the main navbar */
.offcanvas-body .navbar-nav {
  text-align: center;
  width: 100%;
}

.offcanvas-body .nav-item {
  display: inline-block;
}

.offcanvas-body .nav-link {
  padding: 0.5rem 1rem;
}

/* Styles for the dropdown menu */
.offcanvas-body .dropdown-menu {
  background-color: #002d2d;
  /* Adjust background color as needed */
  border: none;
  width: auto;
}

.offcanvas-body .dropdown-item {
  color: #E9E0CE !important;
}

.offcanvas-body .dropdown-item:hover {
  background-color: #237676;
  /* Adjust background color on hover as needed */
}

.offcanvas-body .nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

/* Common styles for all screen sizes */
.nav-section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .logo-section {
      width: auto;
      /* Adjust width as needed */
    }

    .d-flex.align-items-center {
      display: flex;
      align-items: center;
    }

    /* Responsive styles for screen sizes up to 425px */
    @media (max-width: 425px) {
      .nav-section {
        flex-direction: column !important;
      }

      .logo-section {
        width: 100%;
        order: 1;
        justify-content: center;
      }

      .d-flex.align-items-center {
        order: 2;
      }
    }

    /* Responsive styles for screens 768px to 1024px */
    @media (min-width: 768px) and (max-width: 1024px) {
      .navbar-nav {
        display: none;
      }

      .icon-link {
        display: block;
      }
    }
</style>

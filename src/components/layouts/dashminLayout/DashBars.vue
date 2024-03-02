<template>
    <div class="d-flex">
        <!-- Sidebar -->
        <div :class="['sidebar', { 'is-collapsed': isSidebarCollapsed }]">
            <nav class="navbar bg-light navbar-light">
                <div class="navbar-brand mx-4 mb-3">
                    <router-link to="/" class="d-flex align-items-center">
                        <img class="rounded-circle" src="/img/user.png" alt="" style="width: 40px; height: 40px;">
                        <h3 class="text-primary ms-2">DASHMIN</h3>
                    </router-link>
                </div>

              <div class="navbar-nav w-100">
                <router-link to="/DashProfile" class="nav-item nav-link"><i class="fa fa-user-circle me-2"></i>Profile</router-link>
                <router-link to="/admin/DashBoard" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</router-link>
                <router-link to="/categories" class="nav-item nav-link"><i class="fa fa-list me-2"></i>Categories</router-link>
                <!-- New sidebar links -->
                <router-link to="/auctions" class="nav-item nav-link"><i class="fa fa-gavel me-2"></i>Auctions</router-link>
                <router-link to="/bids" class="nav-item nav-link"><i class="fa fa-hand-paper me-2"></i>Bids</router-link>
                <router-link to="/categories" class="nav-item nav-link"><i class="fa fa-tags me-2"></i>Category</router-link>
                <router-link to="/product" class="nav-item nav-link"><i class="fa fa-box-open me-2"></i>Product</router-link>
                <router-link to="/users" class="nav-item nav-link"><i class="fa fa-users me-2"></i>Users</router-link>
              </div>

            </nav>
        </div>

        <!-- Main content including navbar -->
        <div class="flex-grow-1">
            <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <div class="container-fluid">
                    <!-- Toggler for sidebar -->

                    <button class="btn" type="button" @click="toggleSidebar">
                        <span class="navbar-toggler-icon"></span>
                    </button>




                    <!-- Right-aligned navbar content -->
                    <div class="collapse navbar-collapse justify-content-end">

                        <div class="nav-item search-form-container">
                            <form class="d-flex" @submit.prevent="search">
                                <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search"
                                    aria-label="Search">
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>

                        <!-- Messages Dropdown -->
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i class="fa fa-envelope me-lg-2"></i>
                                <span class="d-none d-lg-inline-flex">Messages</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <!-- Messages content here -->
                            </div>
                        </div>

                        <!-- Notifications Dropdown -->
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i class="fa fa-bell me-lg-2"></i>
                                <span class="d-none d-lg-inline-flex">Notifications</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <!-- Notifications content here -->
                            </div>
                        </div>
                        <!-- Profile dropdown -->
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img class="rounded-circle me-lg-2" src="img/user.png" alt=""
                                    style="width: 40px; height: 40px;">
                                <span class="d-none d-lg-inline-flex">{{ userName }}</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <router-link to="/" class="dropdown-item">My Profile</router-link>
                                <a href="#" class="dropdown-item" @click.prevent="logout">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Placeholder for main content -->
            <div class="main-content p-4">
                <main>
                    <slot></slot>
                </main>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashBars',
  computed: {
    userName() {
      return this.$store.getters.fullName; // Use the fullName getter from Vuex store
    }
  },
    data() {
        return {
            isSidebarCollapsed: false,
            searchQuery: ''
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarCollapsed = !this.isSidebarCollapsed;
            // No need to manipulate DOM directly, Vue will handle class toggling
        },
        search() {
            // Implement search functionality
            console.log("Searching for:", this.searchQuery);
        },
      logout() {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/login');
        }).catch(error => {
          console.error('Error during logout:', error);
        });
      }
    }
}
</script>

<style scoped>
:root {
    --primary: #C9BE9B;
    --light: #28323A;
    --dark: #001524;
    --sidebar-width: 250px;
    --sidebar-transition: 0.3s ease;
}


.d-flex {
    display: flex;
}

.sidebar .nav-item {
  transition: all 0.3s ease-in-out; /* This applies to all properties, adjust as needed */
}

.sidebar .nav-item:hover {
  transform: translateX(10px); /* Moves the item 10px to the right */
  background-color: #f0f0f0; /* Example hover background color, adjust as needed */
}

.sidebar {
    /* transition: width 0.3s ease;
  width: var(--sidebar-width, 250px);
  overflow: hidden; */
    width: 250px;
    /* Initial width */
    transition: width var(--sidebar-transition);
}

.sidebar.is-collapsed {
    width: 0;
    /* Collapse the sidebar */
}

.is-collapsed .sidebar {
    width: 0;
    /* Hide sidebar */
    margin-left: -250px;
    /* Completely hide off-screen */
}

.flex-grow-1 {
    transition: margin 0.3s ease;
    margin-left: var(--sidebar-width, 250px);
}

.is-collapsed+.flex-grow-1 {
    margin-left: 0;
}

@media (min-width: 992px) {
    .main-content-area {
        margin-left: 250px;
        /* Adjust as needed */
    }
}

.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: -1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    border: 0 !important;
}





@media (min-width: 992px) {
    .sidebar {
        transform: none;
    }
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>");
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  align-items: start; /* Align items to the start of the flex container */
}


@media (max-width: 992px) {
    .navbar-expand .navbar-collapse {
        flex-basis: auto;
    }
}

@media (max-width: 992px) {
    .navbar-expand .navbar-collapse {
        display: flex !important;
        flex-basis: auto;
    }
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
        margin-left: 250px;
        /* Match your sidebar width */
    }

    .is-collapsed+.navbar-expand-lg .navbar-collapse {
        margin-left: 0;
    }
}


.content-cell {
    max-width: 300px;
    /* Adjust the value as needed */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.back-to-top {
    position: fixed;
    display: none;
    right: 45px;
    bottom: 45px;
    z-index: 99;
}

a {
    text-decoration: none;
}

p,
h3,
a,
h6 {
    color: var(--primary);
}

h5,
span,
small {
    color: aliceblue;
}

.bg-light {
    background-color: #28323A !important;
}

.text-primary {
    font-weight: bold;
    color: #C9BE9B !important;
}

.text-primary {
    color: var(--primary);
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    height: 100vh;
    overflow-y: auto;
    background: var(--light);
    transition: 0.5s;
    z-index: 999;
}

.content {
    margin-left: 250px;
    min-height: 100vh;
    background: var(--dark);
    transition: 0.5s;
}

.labell {
    display: none;
}

.crud-icons:hover {
    cursor: pointer;
}

@media (min-width: 992px) {
    .sidebar {
        margin-left: 0;
    }

    .sidebar.open {
        margin-left: -250px;
    }

    .content {
        width: calc(100% - 250px);
    }

    .content.open {
        width: 100%;
        margin-left: 0;
    }
}

@media (max-width: 991.98px) {
    .sidebar {
        margin-left: -250px;
    }

    .sidebar.open {
        margin-left: 0;
    }

    .content {
        width: 100%;
        margin-left: 0;
    }
}


.sidebar .navbar .navbar-nav .nav-link {
    padding: 7px 20px;
    color: var(--dark);
    font-weight: 500;
    border-left: 3px solid var(--light);
    border-radius: 0 30px 30px 0;
    outline: none;
}

.sidebar .navbar .navbar-nav .nav-link:hover,
.sidebar .navbar .navbar-nav .nav-link.active {
    color: var(--primary);
    background: var(--dark);
    border-color: var(--primary);
}

.sidebar .navbar .navbar-nav .nav-link i {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--light);
    ;
    border-radius: 40px;
    color: var(--primary);
}

.sidebar .navbar .navbar-nav .nav-link:hover i,
.sidebar .navbar .navbar-nav .nav-link.active i {
    background: var(--light);
}

.sidebar .navbar .dropdown-toggle::after {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: .5s;
}

.sidebar .navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

.sidebar .navbar .dropdown-item {
    padding-left: 25px;
    border-radius: 0 30px 30px 0;
}

.content .navbar .navbar-nav .nav-link {
    margin-left: 25px;
    padding: 12px 0;
    color: var(--dark);
    outline: none;
}

.content .navbar .navbar-nav .nav-link:hover,
.content .navbar .navbar-nav .nav-link.active {
    color: var(--primary);
}

.content .navbar .sidebar-toggler,
.content .navbar .navbar-nav .nav-link i {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: var(--dark);
    ;
    border-radius: 40px;
    color: var(--primary);
}

.content .navbar .dropdown-toggle::after {
    margin-left: 6px;
    vertical-align: middle;
    border: none;
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    transition: .5s;
}

.content .navbar .dropdown-toggle[aria-expanded=true]::after {
    transform: rotate(-180deg);
}

@media (max-width: 575.98px) {
    .content .navbar .navbar-nav .nav-link {
        margin-left: 15px;
    }
}

#revenue-section,
#sales-section {
    display: none;
}
</style>
  
<!-- Footer.vue -->

<template>
  <!-- <h1>HelloWorld</h1> -->

  <footer class="container-fluid p-5" style="background-color: #122b22;">
    <!-- First Row -->
    <div class="row" style="display: flex; align-items: baseline;">
      <div class="col-md-3 col-sm-6"
        style="display: flex; flex-direction: column; align-items: center; justify-content: baseline;">
        <!-- Column 1 -->
        <div style="border-bottom: 1px solid #ccc; padding-bottom: 5vh; margin-bottom: 20px;">
          <div class="logo-whitepng-1YF" style="margin-bottom: 10px;">test</div>
          <div class="created-with-the-collaboration-of-over-60-of-the-worlds-best-nuron-artists-WV1"
            style="color: #bfb8aa; margin-top: 10px;">
            Created with the collaboration of over 60 of the world's best Nuron Artists.
          </div>
        </div>

        <div class="form-Q4b" style="padding-top: 5vh; padding-bottom: 10px;">
          <form action="/subscribe" method="post">
            <div style="color: #E9E0CE; margin-bottom: 10px;">Get The Latest Nuron
              Updates</div>
            <div class="input-group mb-3" style="margin-bottom: 10px;">
              <input type="email" class="form-control email-input" placeholder="Your email address" aria-label="Recipient's username"
                aria-describedby="basic-addon2" style="background-color: #002d2d; color: #E9E0CE; " onfocus="this.style.color='#E9E0CE';" onblur="this.style.color='#ACACAC';" />
              <button class="btn btn-outline-secondary btn-subscribe" type="submit">Subscribe</button>
            </div>
            <div class="email-is-safe-we-dont-spam-hjq" style="color: #bfb8aa; margin-top: 10px;">Email is safe. We don't
              spam.</div>
          </form>
        </div>

      </div>


      <div class="col-md-3 col-sm-6"
        style="display: flex; flex-direction: column; align-items: center; justify-content: baseline;">
        <!-- Column 2 -->
        <div class="resources-KmD" style="color: #E9E0CE; font-weight: bold; margin-top: 1em;">Resources</div>
        <!-- Your resource links go here -->
        <ul style="list-style-type: none; padding: 0; margin: 0;">
          <li style="margin-top: 1.2em; margin-bottom: 0.5em;"><a href="#"
              style="color: #bfb8aa; text-decoration: none;">Resource 1</a></li>
          <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Resource 2</a></li>
          <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Resource 3</a></li>
          <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Resource 2</a></li>
          <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Resource 3</a></li>
          <!-- Add more links as needed -->
        </ul>
      </div>

      <div class="col-md-3 col-sm-6"
        style="display: flex; flex-direction: column; align-items: center; justify-content: baseline;">
        <!-- Column 3 -->
        <div>
          <div class="marketplace-wi3" style="color: #E9E0CE; font-weight: bold; margin-top: 1em;">Marketplace</div>
          <!-- Your marketplace links go here -->
          <ul style="list-style-type: none; padding: 0; margin: 0;">
            <li style="margin-top: 1.2em; margin-bottom: 0.5em;"><a href="#"
                style="color: #bfb8aa; text-decoration: none;">Item 1</a></li>
            <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Item 2</a></li>
            <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Item 3</a></li>
            <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Item 2</a></li>
            <li style="margin-bottom: 0.5em;"><a href="#" style="color: #bfb8aa; text-decoration: none;">Item 3</a></li>
            <!-- Add more links as needed -->
          </ul>
        </div>
      </div>



      <div class="col-md-3 col-sm-6"
        style="display: flex; flex-direction: column; align-items: center; justify-content: baseline;">
        <div class="recent-sold-out-bCF" style="color: #E9E0CE; font-weight: bold; margin-top: 1em;">Recent Sold Out
        </div>
        <RecentSoldOut style="margin-top: 1.2em; margin-bottom: 0.5em;" />
      </div>
    </div>





    <!-- Second Row -->
    <div class="row mt-4">
      <div class="col-md-6">
        <!-- Right Column -->
        <div class="divcopyright-left-cTM">
          <div class="all-rights-reserved-by-bidderxbidder-YM1">© 2024. All rights reserved by BidderXBidder</div>
          <div class="list-EzX">
            <div class="before-PsR"></div>
            <div class="link-terms-7oR">Terms</div>
            <div class="link-dWs">
              <div class="before-NjM"></div>
              <div class="privacy-policy-JN7">Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
  
<script>
import RecentSoldOut from './RecentSoldOut.vue';


export default {
  // Footer-specific logic goes here
  components: {
    RecentSoldOut,
  },
};
</script>
  
<style scoped>
/* Footer-specific styles go here *
/* Style the subscribe button */
.btn-subscribe {
  background-color: #231A00;
  color: #E9E0CE;
  border-color: #231A00;
}

/* Hover styles for the subscribe button */
.btn-subscribe:hover {
  color: #E25444;
  /* Orange color */
  border-color: #E25444;
}

.email-input::placeholder {
  color: #ACACAC;
}

.email-input:focus{
  border-color: #E25444;
}
</style>
  
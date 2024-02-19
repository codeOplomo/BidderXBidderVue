<!-- MainLayout.vue -->

<template>
  <div class="main-layout">
    <NavbarSection />
    <main>
      <slot>

      </slot>
    </main>
  </div>
    <FooterSection />
</template>

<script>
import NavbarSection from '@/components/layouts/NavbarSection.vue';
import FooterSection from '@/components/layouts/FooterSection.vue';

export default {
  components: {
    NavbarSection,
    FooterSection,
  },
  // MainLayout-specific logic goes here
};
</script>

<style scoped></style>

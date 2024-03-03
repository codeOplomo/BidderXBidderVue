<template>
  <DashMainLayout>
  <div>
    <h1>Admin Dashboard</h1>
    <h2>Products</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category.name }}</td>
          <td>{{ product.created_at }}</td>
          <td>{{ product.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </DashMainLayout>
</template>


<script>
import DashMainLayout from '@/components/layouts/dashminLayout/DashMainLayout.vue';
import DashStats from '@/components/admin/DashStats.vue'

export default {
  components: {
    DashMainLayout,
    DashStats,
  },
};
</script>
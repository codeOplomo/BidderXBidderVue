<template>
  <h2>Categories</h2>
  <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Created At</th>
        <th>Updated At</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="category in categories" :key="category.id">
        <td>{{ category.id }}</td>
        <td>{{ category.name }}</td>
        <td>{{ category.created_at }}</td>
        <td>{{ category.updated_at }}</td>
      </tr>
    </tbody>
  </table>
</template>
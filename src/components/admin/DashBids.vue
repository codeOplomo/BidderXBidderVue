<template>
  <div>
    <h1>Admin Dashboard</h1>
    <h2>Bids</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Amount</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bid in bids" :key="bid.id">
          <td>{{ bid.id }}</td>
          <td>{{ bid.amount }}</td>
          <td>{{ bid.created_at }}</td>
          <td>{{ bid.updated_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
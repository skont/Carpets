<template>
  <ul class="demo-list-item mdl-list" v-if="customers && customers.length">
  <li class="mdl-list__item" v-for="customer of customers" :key="customer.id">
    <i class="material-icons mdl-list__item-icon">person</i>
    <span class="mdl-list__item-primary-content">
            {{customer.custName}}
    </span>
  </li>
 </ul>

  <ul v-else-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CustomersList',
  data() {
    return {
      customers: [],
      errors: []
    }
  },
  created() {
    this.getCustomers();
  },
  methods: {
    getCustomers() {
    this.axios.get(`http://192.168.33.14:3030/Customers`)
    .then(response => {
      this.customers = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }}
}
</script>

<template>
<!-- FORM does not Need the method="POST" -->
    <form class="">
        <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="Name" v-model="customer.custName"/>
    <label class="mdl-textfield__label" for="Name">UCustomer Name</label>
  </div>
    <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="address" v-model="customer.custAddress"/>
    <label class="mdl-textfield__label" for="address">Customer address</label>
  </div>
    <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="city" v-model="customer.custCity"/>
    <label class="mdl-textfield__label" for="city">City</label>
  </div>
    <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="phone" v-model="customer.custPhone"/>
    <label class="mdl-textfield__label" for="phone">Phone</label>
  </div>
  <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" type="submit" @click="postCustomer">
  Save
</button>
<!--   <input type="text" v-model="customer.custName"/>
  <input type="text" v-model="customer.custAddress"/>
  <input type="text" v-model="customer.custCity"/>
  <input type="text" v-model="customer.custPhone"/> 
  <button type="submit" @click="postCustomer">Save</button>-->

   <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>

</form>

</template>

<script>

import axios from 'axios';

export default {
  name: 'AddCustomer',
  data() {
    return {
      customer:[],
      errors: []
    }
  },
methods: {
  // Pushes posts to the server when called.
  postCustomer() {

    let newCustomer={
      custName:this.customer.custName,
      custAddress: this.customer.custAddress,
      custCity: this.customer.custCity,
      custPhone: this.customer.custPhone
    };

    console.log(newCustomer);

    let uri = 'http://192.168.33.14:3030/Customers';

    axios.post(uri,newCustomer)
    .then((response) => {
      console.log(response);  
      }).catch(e => {
      this.errors.push(e);
      console.log(e);
    });
  }
}};
</script>


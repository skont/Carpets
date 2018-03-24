<template>
<!-- FORM does not Need the method="POST" -->
    <form class="">
  <input type="text" v-model="customer.custName"/>
  <input type="text" v-model="customer.custAddress"/>
  <input type="text" v-model="customer.custCity"/>
  <input type="text" v-model="customer.custPhone"/>
  <button type="submit" @click="postCustomer">Save</button>

   <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
      {{customer}}
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
    // customer:{
    //   custName:'',
    //   custAddress:'',
    //   custCity:'',
    //   custPhone:''
    // },
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

    // console.log(this.customer);
    // let uri = 'http://192.168.33.14:3030/Customers';
    // axios.post(uri,this.customer,
    //     {
    //     headers: {
    //       'Content-type': 'application/x-www-form-urlencoded'
    //     }}
    //   ).then((response) => {
    //   console.log(response.data);
    //   }).catch(e => {
    //   this.errors.push(e)
    // });
        
    // axios.post(`http://192.168.33.14:3030/Customers`, {
    //   this.customer,
    //   headers: {
    //     'Content-type': 'application/json',
    // }
    // }).then(function(response) {
    //   console.log(response.data);
    // }).catch(e => {
    //   this.errors.push(e)
    // })

  }
}};
</script>


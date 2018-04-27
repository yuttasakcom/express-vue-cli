<template>
  <div>
    <h1>Home Page</h1>
    <p>connect : {{ apiVersion }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("http://localhost:3000/api")
      .then(res => res.data)
      .then(data => (this.apiVersion = data.message))
      .catch(err => console.log(err));
  },
  data: () => ({
    apiVersion: ""
  })
};
</script>

<template>
  <div class="container">
    <div>{{ msg }}</div>
    <div>{{ propData }}</div>
  </div>
</template>

<script>
export default {
  name: "zk-npm-practice",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  props: {
    propData: {
      type: String,
      default: "我是默认值",
    },
  },
};
</script>

<style>
.container {
  text-align: center;
}
</style>

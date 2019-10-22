<template>
  <div class="test">
     {{msg}}
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: '我是测试'
    }
  },
  created(){
    console.log("成功")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

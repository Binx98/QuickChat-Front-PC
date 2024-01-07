<template>
  <span>
    <el-col :span="5" class="col">
      <el-image :src="require('@/assets/logo/logo2_transparent.png')" class="logo"/>
    </el-col>
    <el-col :span="15" class="col">
      <el-input style="width: 50%"/>
    </el-col>
    <el-col :span="1" style=" height: 10%;">
      搞几个icon：喇叭、换主题、音乐
    </el-col>
    <el-col :span="2" class="col">
      <el-avatar :size="58" style="cursor: pointer"/>
    </el-col>
  </span>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.col {
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  height: 16vh;
  object-fit: cover;
  cursor: pointer;
}
</style>

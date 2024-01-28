<template>
  <span>
    <el-col :span="3" style="height: 90%;overflow: auto;width: 12vw">
      <!--  会话概览、视频通话  -->
      <div class="div-cls" style="height: 32%">
        会话概览、视频通话
      </div>
      <!--  联系方式  -->
      <div class="div-cls" style="border-radius: 10px;height: 32%;margin-top: 2%">
        联系方式
      </div>
      <!--  动态  -->
      <div class="div-cls" style="border-radius: 10px;height: 34%;margin-top: 2%">
        动态信息
      </div>
    </el-col>
  </span>
</template>

<script>
export default {
  name: "Right"
}
</script>

<style lang="scss" scoped>
.div-cls {
  background-color: $window-item-color;
  border-radius: 10px;
}
</style>

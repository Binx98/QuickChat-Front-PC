<template>
  <div>
    <el-col :span="4" style="height: 90%">
      <div class="session-cls" v-for="item in sessionList">
        <div>
          <el-avatar shape="square" :size="48"/>
        </div>
        <div style="width: 50%">
          <div style="font-size: 12px;margin-bottom: 2%;color: antiquewhite">{{ item.name }}</div>
          <div style="font-size: 12px;color: antiquewhite">你好啊！</div>
        </div>
        <div>
          <div style="font-size: 12px;color: antiquewhite">{{ item.lastReadTime }}</div>
        </div>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Session",
  props: ['sessionList']
}
</script>

<style lang="scss" scoped>
.session-cls {
  background-color: $window-item-color;
  border-radius: 6px;
  margin-bottom: 2px;
  display: flex;
  cursor: pointer;
}
</style>

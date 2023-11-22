<template>
  <div style="border: 1px solid red;width: 18%;float: left;height: 100%">
    <!--  会话列表（每页最多展示8个）  -->
    <div style="border: 1px solid pink;height: 10%">
      <!--   头像、小绿豆   -->
      <div style="width: 33%;height: 100%;border: 1px solid red;float: left">
        <el-avatar style="width: 100%;height: 100%"/>
      </div>
      <!--   昵称、时间   -->
      <div style="width: 100%;height: 40%;border: 1px solid yellow;">

      </div>
      <!--   聊天信息、未读数   -->
      <div style="width: 100%;height: 60%;border: 1px solid yellow;">

      </div>
    </div>

    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>
    <div style="border: 1px solid pink;height: 10%"></div>

    <!--  底部菜单  -->
    <div style="border: 1px solid blue;height: 100%">
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.el-row {
  margin-bottom: 20px;

&
:last-child {
  margin-bottom: 0;
}

}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

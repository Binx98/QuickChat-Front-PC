<template>
  <div>
    <video src="@/assets/video/background.mp4" autoplay muted loop
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;object-fit: cover;"/>
    <router-view/>
  </div>
</template>

<script>
/* 禁用浏览器默认右键菜单目录 */
document.oncontextmenu = function (event) {
  event.preventDefault();
};
</script>

<style>
/* 清除浏览器默认间距 */
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: inherit;
}
</style>

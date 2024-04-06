<template>
  <div>
    <!--  背景视频  -->
    <video src="@/assets/video/background.mp4" autoplay muted loop
           style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;object-fit: cover;"/>
    <!--  路由页面  -->
    <router-view/>
  </div>
</template>

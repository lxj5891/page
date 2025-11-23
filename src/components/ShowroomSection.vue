<template>
  <section class="showroom section">
    <div class="container">
      <h2 class="section-title">部分国内外直播数据</h2>
      <p class="section-subtitle">Some Domestic And International Live Streaming Data</p>
      
      <div class="showroom-image">
        <img src="../image/live.png" alt="Showroom">
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowroomSection'
}
</script>

<style scoped>
.showroom {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.showroom-image {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.showroom-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>

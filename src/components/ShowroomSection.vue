<template>
  <section class="showroom section">
    <div class="container">
      <h2 class="section-title">智能展厅</h2>
      <p class="section-subtitle">INTELLIGENT SHOWROOM</p>
      
      <div class="showroom-image">
        <img src="https://via.placeholder.com/1200x500/F0F4F8/4A90E2?text=Intelligent+Showroom" alt="Showroom">
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
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.showroom-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s;
}

.showroom-image:hover img {
  transform: scale(1.05);
}
</style>

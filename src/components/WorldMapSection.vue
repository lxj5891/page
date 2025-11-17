<template>
  <section class="world-map section">
    <div class="container">
      <h2 class="section-title">一站式解决方案 助力一键营销</h2>
      <p class="section-subtitle">ONE-STOP SOLUTION HELPS ONE-CLICK MARKETING</p>
      <p class="description">一站式综合营销平台</p>
      
      <div class="map-container">
        <div class="world-map-bg">
          <img src="https://via.placeholder.com/1000x500/E8F4FF/4A90E2?text=World+Map" alt="World Map">
          <div class="map-point" v-for="point in mapPoints" :key="point.id" 
               :style="{ left: point.x + '%', top: point.y + '%' }">
            <div class="point-pulse"></div>
            <div class="point-marker">
              <img :src="point.image" :alt="point.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WorldMapSection',
  data() {
    return {
      mapPoints: [
        { id: 1, name: 'North America', x: 20, y: 30, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=NA' },
        { id: 2, name: 'Europe', x: 50, y: 25, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=EU' },
        { id: 3, name: 'Asia', x: 70, y: 35, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=AS' },
        { id: 4, name: 'South America', x: 30, y: 65, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=SA' },
        { id: 5, name: 'Africa', x: 52, y: 55, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=AF' },
        { id: 6, name: 'Australia', x: 80, y: 70, image: 'https://via.placeholder.com/100x80/4A90E2/ffffff?text=AU' }
      ]
    }
  }
}
</script>

<style scoped>
.world-map {
  background: linear-gradient(to bottom, #f8fbff 0%, #ffffff 100%);
}

.description {
  text-align: center;
  color: #4A90E2;
  font-size: 18px;
  margin-bottom: 50px;
}

.map-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.world-map-bg {
  position: relative;
  width: 100%;
}

.world-map-bg img {
  width: 100%;
  height: auto;
  display: block;
}

.map-point {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.point-pulse {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(74, 144, 226, 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(2.5);
    opacity: 0;
  }
}

.point-marker {
  position: relative;
  z-index: 10;
  transition: transform 0.3s;
}

.point-marker img {
  width: 100px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  border: 3px solid white;
}

.map-point:hover .point-marker {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .point-marker img {
    width: 60px;
    height: 48px;
  }
}
</style>

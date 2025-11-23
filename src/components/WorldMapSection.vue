<template>
  <section class="world-map section">
    <div class="container">
      <h2 class="section-title">一站式解决方案 助力一键营销</h2>
      <p class="section-subtitle">ONE-STOP SOLUTION HELPS ONE-CLICK MARKETING</p>
      <p class="description">一站式综合营销平台</p>
      
      <div class="map-container">
        <div class="world-map-bg">
          <img src="../image/map_full.png" alt="World Map">
          <!-- <div class="map-point" v-for="point in mapPoints" :key="point.id" 
               :style="{ left: point.x + '%', top: point.y + '%' }">
            <div class="point-pulse"></div>
            <div class="point-marker">
              <img :src="point.image" :alt="point.name">
            </div>
          </div> -->
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
        { id: 1, name: 'North America', x: 20, y: 30, image: '../src/image/wz-1.png' },
        { id: 2, name: 'Europe', x: 50, y: 25, image: '../src/image/wz-2.png' },
        { id: 4, name: 'South America', x: 30, y: 65, image: '../src/image/wz-4.png' },
        { id: 5, name: 'Africa', x: 52, y: 55, image: '../src/image/wz-5.png' },
        { id: 6, name: 'Australia', x: 80, y: 70, image: '../src/image/wz-6.png' }
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
  font-size: var(--font-size-lg);
  margin-bottom: 50px;
}

.map-container {
  position: relative;
  max-width: var(--map-container-width);
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
  width: var(--pulse-size);
  height: var(--pulse-size);
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
  width: var(--map-point-size);
  height: var(--map-point-height);
  border-radius: 8px;
}

.map-point:hover .point-marker {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .point-marker img {
    width: calc(var(--map-point-size) * 0.6);
    height: calc(var(--map-point-height) * 0.6);
  }
  
  .point-pulse {
    width: calc(var(--pulse-size) * 0.7);
    height: calc(var(--pulse-size) * 0.7);
  }
}
</style>

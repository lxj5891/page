<template>
  <section class="expert section">
    <div class="container">
      <h2 class="section-title">建联助力明星达人</h2>
      <p class="section-subtitle">STAR SUPPORT</p>
      
      <div class="expert-grid">
        <div class="expert-card" v-for="expert in experts" :key="expert.id">
          <div class="expert-image">
            <img :src="expert.image" :alt="expert.name">
           
          </div>
          <div class="expert-info">
            <h3>{{ expert.name }}</h3>
          </div>
        </div>
      </div>

      <div class="expert-map-bg">
        <img src="../image/star-map.png" alt="Star Map">
        <div class="expert-map-txt">
          <p>淘宝、快手、小红书、拼多多、视频号、</p>
          <p>抖音、美团、百度、本地同城等</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExpertSection',
  data() {
    return {
      experts: [
        {
          id: 1,
          name: '钟丽缇',
          image: '../src/image/start-1.png'
        },
        {
          id: 2,
          name: '薛之谦',
          image: '../src/image/start-2.png'
        },
        {
          id: 3,
          name: '郝劭文',
          image: '../src/image/start-3.png'
        },
        {
          id: 4,
          name: '张大奕',
          image: '../src/image/start-4.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

.expert-map-bg {
  position: relative;
  width: 100%;
  margin: -150px auto 0;
  z-index: 0;
}

.expert-map-bg img {
  width: 100%;
  height: auto;
  display: block;
}

.expert-map-txt {
  position: absolute;
  bottom: 50px;
  left: 100px;
  z-index: 88;
  color: #fff;
  background: rgba(21, 57, 150, 0.9);
  padding: 15px 20px;
  border-radius: 8px;
}

.expert-map-txt p {
  margin: 0;
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.expert {
  background: #ffffff;
}

.expert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 88;
}

.expert-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 88;
}

.expert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.expert-image {
  position: relative;
  overflow: hidden;
  height: 182px;
}

.expert-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.expert-card:hover .expert-image img {
  transform: scale(1.1);
}

.expert-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 144, 226, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.expert-card:hover .expert-overlay {
  opacity: 1;
}

.view-profile {
  padding: 12px 30px;
  background: white;
  color: #4A90E2;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.view-profile:hover {
  background: #f0f0f0;
  transform: scale(1.05);
}

.expert-info {
  padding: 20px;
  text-align: center;
}

.expert-info h3 {
  font-size: 20px;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.expert-info p {
  color: #666;
  font-size: 14px;
}

@media (max-width: 768px) {
  .expert-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .expert-image {
    height: 250px;
  }
}
</style>

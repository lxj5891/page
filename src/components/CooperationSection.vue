<template>
  <section class="cooperation section">
    <div class="container">
      <h2 class="section-title">全球合作平台</h2>
      <p class="section-subtitle">GLOBAL COOPERATION PLATFORM</p>
      
      <div class="cooperation-grid">
        <div class="cooperation-item" v-for="item in cooperationItems" :key="item.id">
          <img :src="item.image" :alt="item.title">
          <div class="cooperation-overlay">
            <h3>{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CooperationSection',
  data() {
    return {
      cooperationItems: [
        { id: 1, title: '智能办公', image: 'https://via.placeholder.com/400x300/4A90E2/ffffff?text=Smart+Office' },
        { id: 2, title: '云端服务', image: 'https://via.placeholder.com/400x300/5B9BD5/ffffff?text=Cloud+Service' },
        { id: 3, title: '数据分析', image: 'https://via.placeholder.com/400x300/70AD47/ffffff?text=Data+Analysis' },
        { id: 4, title: 'AI应用', image: 'https://via.placeholder.com/400x300/FFC000/ffffff?text=AI+Application' },
        { id: 5, title: '物联网', image: 'https://via.placeholder.com/400x300/C55A11/ffffff?text=IoT' },
        { id: 6, title: '区块链', image: 'https://via.placeholder.com/400x300/E74C3C/ffffff?text=Blockchain' }
      ]
    }
  }
}
</script>

<style scoped>
.cooperation {
  background: white;
}

.cooperation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.cooperation-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.cooperation-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.cooperation-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.cooperation-item:hover .cooperation-overlay {
  transform: translateY(0);
}

.cooperation-item:hover img {
  transform: scale(1.1);
}

.cooperation-overlay h3 {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .cooperation-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .cooperation-item {
    height: 250px;
  }
}
</style>

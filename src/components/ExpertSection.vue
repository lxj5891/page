<template>
  <section class="expert section">
    <div class="container">
      <h2 class="section-title">世界级讲师专人</h2>
      <p class="section-subtitle">WORLD-CLASS LECTURER</p>
      
      <div class="expert-grid">
        <div class="expert-card" v-for="expert in experts" :key="expert.id">
          <div class="expert-image">
            <img :src="expert.image" :alt="expert.name">
            <div class="expert-overlay">
              <button class="view-profile">查看详情</button>
            </div>
          </div>
          <div class="expert-info">
            <h3>{{ expert.name }}</h3>
            <p>{{ expert.title }}</p>
          </div>
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
          name: '张教授',
          title: '人工智能专家',
          image: 'https://via.placeholder.com/300x350/4A90E2/ffffff?text=Expert+1'
        },
        {
          id: 2,
          name: '李博士',
          title: '大数据分析师',
          image: 'https://via.placeholder.com/300x350/5B9BD5/ffffff?text=Expert+2'
        },
        {
          id: 3,
          name: '王总监',
          title: '技术架构师',
          image: 'https://via.placeholder.com/300x350/70AD47/ffffff?text=Expert+3'
        },
        {
          id: 4,
          name: '刘经理',
          title: '产品运营专家',
          image: 'https://via.placeholder.com/300x350/FFC000/ffffff?text=Expert+4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.expert {
  background: #ffffff;
}

.expert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.expert-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.expert-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.expert-image {
  position: relative;
  overflow: hidden;
  height: 350px;
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

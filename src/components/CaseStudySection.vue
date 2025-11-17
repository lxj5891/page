<template>
  <section class="case-study section">
    <div class="container">
      <h2 class="section-title">成功案例</h2>
      <p class="section-subtitle">SUCCESS CASES</p>
      
      <div class="case-grid">
        <div class="case-item" v-for="item in cases" :key="item.id">
          <img :src="item.image" :alt="item.title">
          <div class="case-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button class="learn-more">了解更多 <i class="fas fa-arrow-right"></i></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CaseStudySection',
  data() {
    return {
      cases: [
        {
          id: 1,
          title: '智慧城市解决方案',
          description: '为某一线城市提供全方位智慧城市建设方案',
          image: 'https://via.placeholder.com/600x400/4A90E2/ffffff?text=Smart+City'
        },
        {
          id: 2,
          title: '企业数字化转型',
          description: '助力传统企业实现数字化转型升级',
          image: 'https://via.placeholder.com/600x400/5B9BD5/ffffff?text=Digital+Transform'
        },
        {
          id: 3,
          title: '教育信息化平台',
          description: '打造全国领先的在线教育平台',
          image: 'https://via.placeholder.com/600x400/70AD47/ffffff?text=Education'
        },
        {
          id: 4,
          title: '医疗健康系统',
          description: '构建智能化医疗健康管理系统',
          image: 'https://via.placeholder.com/600x400/FFC000/ffffff?text=Healthcare'
        },
        {
          id: 5,
          title: '金融科技创新',
          description: '推动金融行业科技创新发展',
          image: 'https://via.placeholder.com/600x400/C55A11/ffffff?text=FinTech'
        },
        {
          id: 6,
          title: '智能制造升级',
          description: '帮助制造业实现智能化升级改造',
          image: 'https://via.placeholder.com/600x400/E74C3C/ffffff?text=Smart+Manufacturing'
        }
      ]
    }
  }
}
</script>

<style scoped>
.case-study {
  background: white;
}

.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.case-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.case-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.case-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s;
}

.case-item:hover img {
  transform: scale(1.1);
}

.case-info {
  padding: 25px;
}

.case-info h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.case-info p {
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.learn-more {
  padding: 10px 25px;
  background: #4A90E2;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.learn-more:hover {
  background: #357ABD;
  transform: translateX(5px);
}

.learn-more i {
  transition: transform 0.3s;
}

.learn-more:hover i {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .case-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>

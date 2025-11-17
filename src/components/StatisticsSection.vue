<template>
  <section class="statistics section">
    <div class="container">
      <h2 class="section-title">核心数据展示</h2>
      <p class="section-subtitle">CORE DATA DISPLAY</p>
      
      <div class="stats-grid">
        <div class="stat-card" v-for="stat in statistics" :key="stat.id" 
             :style="{ background: stat.color }">
          <div class="stat-icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
          <div class="stat-sublabel">{{ stat.sublabel }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StatisticsSection',
  data() {
    return {
      statistics: [
        {
          id: 1,
          icon: 'fas fa-users',
          number: '1,234,567',
          label: '注册用户',
          sublabel: 'Registered Users',
          color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
          id: 2,
          icon: 'fas fa-globe',
          number: '89',
          label: '覆盖国家',
          sublabel: 'Countries Covered',
          color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
        },
        {
          id: 3,
          icon: 'fas fa-chart-line',
          number: '$23.7M',
          label: '交易额',
          sublabel: 'Transaction Volume',
          color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        {
          id: 4,
          icon: 'fas fa-award',
          number: '156',
          label: '获奖数量',
          sublabel: 'Awards Won',
          color: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
        },
        {
          id: 5,
          icon: 'fas fa-building',
          number: '2,345',
          label: '合作企业',
          sublabel: 'Partner Companies',
          color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        {
          id: 6,
          icon: 'fas fa-star',
          number: '98%',
          label: '客户满意度',
          sublabel: 'Customer Satisfaction',
          color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
        }
      ]
    }
  }
}
</script>

<style scoped>
.statistics {
  background: #f8f9fa;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  padding: 40px 30px;
  border-radius: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(45deg);
  transition: all 0.5s;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.stat-card:hover::before {
  top: -100%;
  right: -100%;
}

.stat-icon {
  font-size: 48px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.stat-number {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
}

.stat-sublabel {
  font-size: 14px;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .stat-number {
    font-size: 32px;
  }
}
</style>

<template>
  <div class="project-intro">
    <!-- Hero Banner -->
    <section class="intro-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1 class="hero-title fade-in-up">为业绩增长提供全方位资源和服务</h1>
      </div>
    </section>

    <!-- Project Introduction Section -->
    <section class="section intro-section">
      <div class="container">
        <h2 class="section-title">项目介绍</h2>
        <p class="section-subtitle">Project Introduction</p>
        
        <div class="intro-content">
          <h3 class="intro-heading">2025首创共享新模式</h3>
          <p class="intro-description">全程真人录音互动 AIGC辅助直播</p>
          
          <div class="features-grid">
            <div class="feature-card" v-for="feature in features" :key="feature.id">
              <div class="feature-number">{{ feature.number }}</div>
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-desc">{{ feature.description }}</p>
              <div class="feature-image">
                <img :src="feature.image" :alt="feature.title">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AIGC Translation Section -->
    <section class="section aigc-section">
      <div class="container">
        <h2 class="section-title">AIGC直播间实时翻译</h2>
        <p class="section-subtitle">我们让直播语言不再是障碍直播间</p>
        
        <div class="aigc-grid">
          <div class="aigc-card" v-for="item in aigcFeatures" :key="item.id">
            <div class="aigc-number">{{ item.number }}</div>
            <h4 class="aigc-title">{{ item.title }}</h4>
            <p class="aigc-desc">{{ item.description }}</p>
            <div class="aigc-image">
              <img :src="item.image" :alt="item.title">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Info Section -->
    <section class="section company-section">
      <div class="container">
        <div class="company-grid">
          <div class="company-info">
            <h3 class="company-name">源回塔（杭州）科技有限公司</h3>
            <div class="company-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>浙江省杭州市江干区钱江新城14号楼7层</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-envelope"></i>
                <span>1048754672@qq.com</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-phone"></i>
                <span>183-8102-5419</span>
              </div>
            </div>
          </div>
          
          <div class="company-qr">
            <img src="https://via.placeholder.com/200x200/4A90E2/ffffff?text=QR+Code" alt="QR Code">
            <p>源回塔官方公众号</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectIntro',
  data() {
    return {
      features: [
        {
          id: 1,
          number: '01',
          title: '远程云端解决方案',
          description: '解决不了解海外市场与平台的问题，让卖家不用去海外就能做好跨境电商',
          image: 'https://via.placeholder.com/400x300/4A90E2/ffffff?text=Remote+Solution'
        },
        {
          id: 2,
          number: '02',
          title: '千万万户',
          description: '全程真人录音互动AIGC辅助直播，为卖家提供一个AI助手，不再需要大量人力成本',
          image: 'https://via.placeholder.com/400x300/5B9BD5/ffffff?text=Millions+Users'
        },
        {
          id: 3,
          number: '03',
          title: '供应链',
          description: '在源头产地建设100个供应链基地，在全球各地建设100个海外仓，实现全球供应链',
          image: 'https://via.placeholder.com/400x300/70AD47/ffffff?text=Supply+Chain'
        }
      ],
      aigcFeatures: [
        {
          id: 1,
          number: '01',
          title: '实时翻译器',
          description: '支持多达175种语言和口音的实时翻译，让你的直播间无障碍沟通',
          image: 'https://via.placeholder.com/400x300/6C5CE7/ffffff?text=Real-time+Translation'
        },
        {
          id: 2,
          number: '02',
          title: '实时翻译',
          description: '通过AI技术实现多语言实时翻译，让全球用户都能理解你的直播内容',
          image: 'https://via.placeholder.com/400x300/00B894/ffffff?text=AI+Translation'
        },
        {
          id: 3,
          number: '03',
          title: '标准TK直播培训',
          description: '提供专业的TK直播培训，让卖家快速掌握直播技巧，提升直播效果',
          image: 'https://via.placeholder.com/400x300/FD79A8/ffffff?text=TK+Training'
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-intro {
  padding-top: 70px;
}

/* Hero Section */
.intro-hero {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.intro-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path fill="rgba(255,255,255,0.1)" d="M0,100 Q300,50 600,100 T1200,100 L1200,400 L0,400 Z"/></svg>') no-repeat center bottom;
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
}

.hero-title {
  position: relative;
  z-index: 10;
  font-size: 48px;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
}

/* Introduction Section */
.intro-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.intro-content {
  max-width: 1200px;
  margin: 0 auto;
}

.intro-heading {
  text-align: center;
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: bold;
}

.intro-description {
  text-align: center;
  font-size: 18px;
  color: #4A90E2;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.feature-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
  position: relative;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.feature-number {
  font-size: 48px;
  font-weight: bold;
  color: #4A90E2;
  margin-bottom: 15px;
  opacity: 0.3;
}

.feature-title {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: bold;
}

.feature-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.feature-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.feature-card:hover .feature-image img {
  transform: scale(1.1);
}

/* AIGC Section */
.aigc-section {
  background: white;
}

.aigc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  margin-top: 50px;
}

.aigc-card {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.aigc-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.aigc-number {
  font-size: 48px;
  font-weight: bold;
  color: #4A90E2;
  margin-bottom: 15px;
  opacity: 0.5;
}

.aigc-title {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: bold;
}

.aigc-desc {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
}

.aigc-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
}

.aigc-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.aigc-card:hover .aigc-image img {
  transform: scale(1.1);
}

/* Company Section */
.company-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
}

.company-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.company-name {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
}

.company-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.95);
}

.detail-item i {
  font-size: 20px;
  color: #FFD700;
  width: 25px;
}

.company-qr {
  text-align: center;
}

.company-qr img {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  background: white;
  padding: 10px;
}

.company-qr p {
  font-size: 16px;
  font-weight: 600;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
    padding: 0 20px;
  }
  
  .features-grid,
  .aigc-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }
  
  .company-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .intro-heading {
    font-size: 24px;
  }
  
  .intro-description {
    font-size: 16px;
  }
}
</style>

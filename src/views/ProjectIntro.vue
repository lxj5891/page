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
          <h3 class="intro-heading">2025首创卖货新模式</h3>
          <p class="intro-description">全程真人实互动     AIGC辅助直播</p>
          
          <div class="features-grid">
            <div class="feature-card" v-for="feature in features" :key="feature.id">
              <div class="feature-number">{{ feature.number }}</div>
              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-desc">{{ feature.description }}</p>
              <p class="feature-desc1">{{ feature.description1 }}</p>
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
        <p class="section-subtitle">我们让直播语言不再是直播障碍</p>
        
        <div class="aigc-grid">
          <div class="aigc-card" v-for="item in aigcFeatures" :key="item.id">
            <div class="aigc-number">{{ item.number }}</div>
            <h4 class="aigc-title">{{ item.title }}</h4>
            <p class="aigc-desc">{{ item.description }}</p>
            <p class="aigc-desc1">{{ item.description1 }}</p>
            <div class="aigc-image">
              <img :src="item.image" :alt="item.title">
            </div>
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
          title: '远程云端算力分发',
          description: '兼职主播在家即可分发千家万户',
          description1: '小白报名考核通过即可远程上岗',
          image: '/src/image/project/project-1-1.png'
        },
        {
          id: 2,
          number: '02',
          title: '千家万户',
          description: '全民账号通过系统即可参与直播',
          description1: '解决家庭副业收入快速分享裂变',
          image: '/src/image/project/project-1-2.png'
        },
        {
          id: 3,
          number: '03',
          title: '供应链',
          description: '优质供应链瞬间1000直播间在线',
          description1: '品宣曝光瞬间1000账号曝光百万次',
          image: '/src/image/project/project-1-3.png'
        }
      ],
      aigcFeatures: [
        {
          id: 1,
          number: '01',
          title: '短视频翻译',
          description: '刷短视频实时翻译 短视作工具',
          description1: '短剧出海多角色不同声音翻译配音',
          image: '/src/image/project/project-2-1.jpg'
        },
        {
          id: 2,
          number: '02',
          title: '实时翻译',
          description: '直播间主播翻译 连麦翻译',
          description1: '弹幕翻译 社交通讯视频对话翻译',
          image: '/src/image/project/project-2-2.jpg'
        },
        {
          id: 3,
          number: '03',
          title: '跨境TK变现培训',
          description: '线上基础入门课 线下实操课',
          description1: '供应链海外仓和工具配备',
          image: '/src/image/project/project-2-3.jpg'
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
}

.feature-desc1 {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
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
}

.aigc-desc1 {
  font-size: 15px;
  color: #555;
  line-height: 1.8;
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

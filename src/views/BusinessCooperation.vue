<template>
  <div class="business-cooperation">
    <!-- Hero Banner -->
    <section class="cooperation-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1 class="hero-title fade-in-up">加盟合作 共享品牌价值与发展机遇</h1>
      </div>
    </section>

    <!-- Cooperation Mode Section -->
    <section class="section mode-section">
      <div class="container">
        <h2 class="section-title">合作模式 全新升级</h2>
        <p class="section-subtitle">Cooperation Model Brand New Upgrade</p>
        
        <div class="mode-intro">
          <h3 class="mode-heading">帮助千家万户家庭·远程代播·等你开启</h3>
          <div class="mode-features">
            <div class="mode-item">
              <span class="mode-number">1.</span>
              <span>开播前/中/后帮扶到底</span>
            </div>
            <div class="mode-item">
              <span class="mode-number">2.</span>
              <span>多平台真人运营直播矩阵</span>
            </div>
          </div>
        </div>

        <div class="mode-cards">
          <div class="mode-card">
            <div class="card-number">01</div>
            <h4>你出场地我人 投资额0起步</h4>
            <p>一次性投入+续费模式，共同创建利益</p>
          </div>
          <div class="mode-card">
            <div class="card-number">02</div>
            <h4>你出资金人 投资额2380起步</h4>
            <p>以公司主导，全程代运营，投资者全程参与</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Policy Section -->
    <section class="section policy-section">
      <div class="container">
        <h2 class="section-title">帮扶政策</h2>
        <p class="section-subtitle">Assistance Policies</p>
        
        <div class="policy-banner">
          <h3>8大开播帮扶 全力保驾护航</h3>
          <p>保姆式、全周期、全方位帮扶</p>
        </div>

        <div class="policy-grid">
          <div class="policy-item" v-for="(policy, index) in policies" :key="index">
            <div class="policy-number">{{ index + 1 }}</div>
            <h4>{{ policy.title }}</h4>
          </div>
        </div>
      </div>
    </section>

    <!-- Cooperation Process Section -->
    <section class="section process-section">
      <div class="container">
        <h2 class="section-title">合作流程</h2>
        <p class="section-subtitle">Cooperation Process</p>
        
        <div class="process-timeline">
          <div class="process-step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-icon">
              <i :class="step.icon"></i>
            </div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
            </div>
            <div class="step-arrow" v-if="index < processSteps.length - 1">
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cooperation Types Section -->
    <section class="section types-section">
      <div class="container">
        <h2 class="section-title">商务合作</h2>
        <p class="section-subtitle">Business Cooperation</p>
        
        <div class="types-grid">
          <div class="type-card" v-for="type in cooperationTypes" :key="type.id">
            <div class="type-image">
              <img :src="type.image" :alt="type.title">
              <div class="type-overlay">
                <h3>{{ type.title }}</h3>
              </div>
            </div>
            <div class="type-content">
              <h4>{{ type.title }}</h4>
              <p>{{ type.description }}</p>
              <button class="type-button">了解详情</button>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'BusinessCooperation',
  data() {
    return {
      policies: [
        { title: '首月优惠' },
        { title: '三月保障' },
        { title: '运营支持' },
        { title: '专业培训' },
        { title: '保底产值' },
        { title: '主播支持' },
        { title: '数据同步' },
        { title: '财务清算' }
      ],
      processSteps: [
        { title: '洽谈确定合作', icon: 'fas fa-handshake' },
        { title: '确定合作方案', icon: 'fas fa-file-contract' },
        { title: '合作签约', icon: 'fas fa-pen-nib' },
        { title: '提供设备采购工具', icon: 'fas fa-tools' },
        { title: '营销主播上岗', icon: 'fas fa-user-tie' },
        { title: '提供场地设工作', icon: 'fas fa-building' },
        { title: '开展运营工作', icon: 'fas fa-chart-line' },
        { title: '财务结算', icon: 'fas fa-calculator' }
      ],
      cooperationTypes: [
        {
          id: 1,
          title: '平台合作',
          description: '与各大电商平台深度合作，共享资源，实现互利共赢',
          image: 'https://via.placeholder.com/400x300/4A90E2/ffffff?text=Platform+Cooperation'
        },
        {
          id: 2,
          title: '代理合作',
          description: '成为区域代理商，享受优惠政策和全方位支持',
          image: 'https://via.placeholder.com/400x300/5B9BD5/ffffff?text=Agent+Cooperation'
        },
        {
          id: 3,
          title: '供应链合作',
          description: '整合优质供应链资源，打造高效供应体系',
          image: 'https://via.placeholder.com/400x300/70AD47/ffffff?text=Supply+Chain'
        }
      ]
    }
  }
}
</script>

<style scoped>
.business-cooperation {
  padding-top: 70px;
}

/* Hero Section */
.cooperation-hero {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.cooperation-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400"><path fill="rgba(255,255,255,0.05)" d="M0,200 Q300,150 600,200 T1200,200 L1200,400 L0,400 Z"/></svg>') no-repeat center bottom;
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

/* Mode Section */
.mode-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.mode-intro {
  text-align: center;
  margin-bottom: 50px;
}

.mode-heading {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 25px;
  font-weight: bold;
}

.mode-features {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}

.mode-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #333;
}

.mode-number {
  font-weight: bold;
  color: #4A90E2;
}

.mode-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.mode-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.mode-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #4A90E2, #357ABD);
}

.mode-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.card-number {
  font-size: 48px;
  font-weight: bold;
  color: #4A90E2;
  opacity: 0.2;
  margin-bottom: 15px;
}

.mode-card h4 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.mode-card p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

/* Policy Section */
.policy-section {
  background: white;
}

.policy-banner {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #e8f4ff 0%, #c3d9f7 100%);
  border-radius: 15px;
  margin-bottom: 50px;
}

.policy-banner h3 {
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: bold;
}

.policy-banner p {
  font-size: 18px;
  color: #4A90E2;
}

.policy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.policy-item {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 30px 25px;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s;
  position: relative;
}

.policy-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.policy-number {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 35px;
  height: 35px;
  background: #4A90E2;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
}

.policy-item h4 {
  font-size: 20px;
  color: #1a1a1a;
  margin-top: 20px;
}

/* Process Section */
.process-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.process-timeline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 120px;
  position: relative;
}

.step-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  box-shadow: 0 5px 20px rgba(74, 144, 226, 0.3);
  transition: all 0.3s;
}

.step-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(74, 144, 226, 0.5);
}

.step-icon i {
  font-size: 32px;
  color: white;
}

.step-content h4 {
  font-size: 14px;
  color: #333;
  text-align: center;
  line-height: 1.4;
}

.step-arrow {
  position: absolute;
  right: -30px;
  top: 35px;
  font-size: 20px;
  color: #4A90E2;
}

/* Types Section */
.types-section {
  background: white;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.type-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.type-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.type-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.type-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.type-card:hover .type-image img {
  transform: scale(1.1);
}

.type-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.type-overlay h3 {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.type-content {
  padding: 25px;
}

.type-content h4 {
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.type-content p {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.type-button {
  padding: 12px 30px;
  background: #4A90E2;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.type-button:hover {
  background: #357ABD;
  transform: translateX(5px);
}

/* Contact Section */
.contact-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: center;
}

.contact-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: white;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.95);
}

.contact-item i {
  font-size: 20px;
  color: #FFD700;
  width: 25px;
}

.contact-button {
  padding: 15px 40px;
  background: white;
  color: #4A90E2;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  background: #f0f0f0;
}

.contact-qr {
  text-align: center;
}

.contact-qr img {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  background: white;
  padding: 10px;
}

.contact-qr p {
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
  
  .mode-cards {
    grid-template-columns: 1fr;
  }
  
  .policy-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .process-timeline {
    flex-direction: column;
  }
  
  .step-arrow {
    display: none;
  }
  
  .types-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>

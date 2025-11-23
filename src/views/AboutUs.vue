<template>
  <div class="about-us">
    <!-- Hero Banner -->
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/1200x400/2C3E50/ffffff?text=Team+Meeting" alt="团队会议">
      </div>
    </section>

    <!-- Company Profile Section -->
    <section class="section profile-section">
      <div class="container">
        <h2 class="section-title">企业简介</h2>
        <p class="section-subtitle">Company Profile</p>
        
        <div class="profile-content">
          <div class="profile-text">
            <h3 class="company-name">源回塔（杭州）科技有限公司</h3>
            <p class="company-description">
              是一家专注提供AI大模型产品公司，成立于2025年创业早期企业，致力于为客户提供高品质的产品和服务。我们拥有一支经验丰富、技术精湛的团队，以及先进的生产设备和完善的质量管理体系。公司以先进的AI技术为核心，以客户需求为导向，为全球用户提供智能化解决方案。
            </p>
            <p class="company-description">
              公司秉承"创新、品质、服务"的经营理念，不断推出符合市场需求的新产品，并为客户提供全方位的解决方案。我们致力于成为行业领先者，通过技术创新推动行业发展，为客户创造更大的价值。
            </p>
            <p class="company-description">
              我们坚持以客户为中心的服务理念，注重客户体验，力求为客户提供最优质的产品和服务。同时，我们也注重企业社会责任，积极参与公益事业，回馈社会。通过持续的技术创新和优质服务，我们已经赢得了众多客户的信赖和好评。
            </p>
          </div>
          <div class="profile-image">
            <img src="https://via.placeholder.com/500x400/4A90E2/ffffff?text=Company+Building" alt="公司大楼">
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Section -->
    <section class="section technology-section">
      <div class="container">
        <h2 class="section-title">企业技术</h2>
        <p class="section-subtitle">Company Technology</p>
        
        <div class="tech-content">
          <div class="tech-image">
            <img src="https://via.placeholder.com/500x400/5B9BD5/ffffff?text=Cloud+Technology" alt="云技术">
          </div>
          <div class="tech-text">
            <h3 class="tech-heading">基础云端服务为基础（全球部署）</h3>
            <p class="tech-description">
              一站式AI解决方案，为企业提供从数据采集、模型训练到应用部署的全流程服务。我们拥有强大的云计算能力，支持全球范围内的快速部署。基于云端的AI服务平台，让企业能够快速构建和部署智能应用。
            </p>
            <p class="tech-description">
              支持多种主流开发框架，如TensorFlow、PyTorch、Keras、MindSpore等，兼容多种编程语言。提供丰富的API接口和SDK，方便开发者快速集成。我们的平台具有高度的灵活性和可扩展性，能够满足不同规模企业的需求。
            </p>
            <p class="tech-description">
              采用分布式架构设计，确保系统的高可用性和可扩展性。通过智能负载均衡和自动故障转移，保障服务的稳定运行。支持弹性伸缩，根据业务需求自动调整资源配置。同时，我们提供完善的监控和运维工具，确保系统7x24小时稳定运行。
            </p>
          </div>
        </div>

        <div class="tech-features">
          <h3 class="features-heading">基于全球的5G平台</h3>
          <p class="features-description">
            从技术、5G全球化、云端平台主流技术，已经成为全球主流技术。记录在册的有：
          </p>
          <div class="features-grid">
            <div class="feature-item" v-for="feature in techFeatures" :key="feature.id">
              <div class="feature-icon">
                <i :class="feature.icon"></i>
              </div>
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Advantages Section -->
    <section class="section advantages-section">
      <div class="container">
        <h2 class="section-title">企业优势</h2>
        <p class="section-subtitle">Company Advantages</p>
        
        <div class="advantages-grid">
          <div class="advantage-card" v-for="advantage in advantages" :key="advantage.id">
            <div class="advantage-icon">
              <i :class="advantage.icon"></i>
            </div>
            <h3>{{ advantage.title }}</h3>
            <p>{{ advantage.description }}</p>
            <div class="advantage-image">
              <img :src="advantage.image" :alt="advantage.title">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values Section -->
    <section class="section values-section">
      <div class="container">
        <h2 class="section-title">企业文化</h2>
        <p class="section-subtitle">Corporate Culture</p>
        
        <div class="values-grid">
          <div class="value-card" v-for="value in values" :key="value.id">
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      techFeatures: [
        {
          id: 1,
          title: '云计算平台',
          description: '强大的云计算能力，支持海量数据处理',
          icon: 'fas fa-cloud'
        },
        {
          id: 2,
          title: 'AI算法',
          description: '先进的人工智能算法，提供智能化解决方案',
          icon: 'fas fa-brain'
        },
        {
          id: 3,
          title: '大数据分析',
          description: '专业的数据分析能力，挖掘数据价值',
          icon: 'fas fa-chart-bar'
        },
        {
          id: 4,
          title: '5G技术',
          description: '基于5G网络的高速传输技术',
          icon: 'fas fa-signal'
        },
        {
          id: 5,
          title: '物联网',
          description: '完善的物联网解决方案',
          icon: 'fas fa-network-wired'
        },
        {
          id: 6,
          title: '区块链',
          description: '安全可靠的区块链技术应用',
          icon: 'fas fa-link'
        }
      ],
      advantages: [
        {
          id: 1,
          title: '技术领先 持续创新',
          description: '拥有一支经验丰富的技术团队，不断探索前沿技术，为客户提供最优质的解决方案。我们注重技术创新，每年投入大量研发资金，持续推动AI技术的发展和应用。通过与国内外顶尖科研机构合作，我们始终保持技术领先优势，为客户提供最前沿的AI解决方案。',
          icon: 'fas fa-rocket',
          image: 'https://via.placeholder.com/400x250/4A90E2/ffffff?text=Innovation'
        },
        {
          id: 2,
          title: '品质保证 值得信赖',
          description: '建立完善的质量管理体系，从产品设计到售后服务，每个环节都严格把控。获得多项国际质量认证，产品质量值得信赖。我们采用严格的测试流程和质量标准，确保每一个产品都能满足客户的高标准要求。同时，我们建立了完善的质量追溯体系，确保产品质量可控可追溯。',
          icon: 'fas fa-shield-alt',
          image: 'https://via.placeholder.com/400x250/5B9BD5/ffffff?text=Quality'
        },
        {
          id: 3,
          title: '服务至上 快速响应',
          description: '提供7x24小时专业服务，快速响应客户需求。拥有完善的售后服务体系，确保客户无后顾之忧。客户满意度始终保持在98%以上。我们建立了多渠道的客户服务体系，包括在线客服、电话支持、现场服务等，确保客户问题能够得到及时有效的解决。同时，我们定期收集客户反馈，持续优化服务质量。',
          icon: 'fas fa-headset',
          image: 'https://via.placeholder.com/400x250/70AD47/ffffff?text=Service'
        }
      ],
      values: [
        {
          id: 1,
          title: '创新',
          description: '持续创新是我们的核心竞争力',
          icon: 'fas fa-lightbulb'
        },
        {
          id: 2,
          title: '诚信',
          description: '诚信经营，赢得客户信任',
          icon: 'fas fa-handshake'
        },
        {
          id: 3,
          title: '专业',
          description: '专业团队，专业服务',
          icon: 'fas fa-user-tie'
        },
        {
          id: 4,
          title: '共赢',
          description: '与客户、员工、合作伙伴共同成长',
          icon: 'fas fa-users'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about-us {
  padding-top: 70px;
}

/* Hero Section */
.about-hero {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
  z-index: 1;
}

/* Profile Section */
.profile-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.profile-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 60px;
  align-items: center;
}

.company-name {
  font-size: 32px;
  color: #1a1a1a;
  margin-bottom: 25px;
  font-weight: bold;
}

.company-description {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
}

.profile-image {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.profile-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s;
}

.profile-image:hover img {
  transform: scale(1.05);
}

/* Technology Section */
.technology-section {
  background: white;
}

.tech-content {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
}

.tech-image {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.tech-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s;
}

.tech-image:hover img {
  transform: scale(1.05);
}

.tech-heading {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: bold;
}

.tech-description {
  font-size: 16px;
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
  text-align: justify;
}

.tech-features {
  margin-top: 60px;
}

.features-heading {
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
}

.features-description {
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-item {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  transition: all 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon i {
  font-size: 36px;
  color: white;
}

.feature-item h4 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.feature-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Advantages Section */
.advantages-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.advantage-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.advantage-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.advantage-icon i {
  font-size: 32px;
  color: white;
}

.advantage-card h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.advantage-card p {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.advantage-image {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
}

.advantage-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.advantage-card:hover .advantage-image img {
  transform: scale(1.1);
}

/* Values Section */
.values-section {
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  text-align: center;
  padding: 40px 30px;
  background: linear-gradient(135deg, #e8f4ff 0%, #c3d9f7 100%);
  border-radius: 15px;
  transition: all 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.value-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value-icon i {
  font-size: 36px;
  color: white;
}

.value-card h3 {
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.value-card p {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
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
  .profile-content,
  .tech-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .features-grid,
  .advantages-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .company-name,
  .tech-heading,
  .features-heading {
    font-size: 24px;
  }
}
</style>

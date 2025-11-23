<template>
  <div class="technical-support">
    <!-- Hero Banner -->
    <section class="support-hero">
      <div class="hero-overlay"></div>
      <div class="container">
        <h1 class="hero-title fade-in-up">致力为您提供专业的服务与支持</h1>
      </div>
    </section>

    <!-- Comprehensive Support Section -->
    <section class="section comprehensive-section">
      <div class="container">
        <div class="content-layout">
          <div class="content-image">
            <img src="/src/image/support/1.jpg" alt="全方位提供支持服务">
          </div>
          <div class="content-text">
            <h2 class="section-title-left">全方位提供支持服务</h2>
            <p class="section-description">产品使用指导技术问题解答</p>
            <div class="feature-list">
             
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>专业团队快速响应</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>远程协助解决问题</span>
              </div>
              <div class="feature-item">
                <i class="fas fa-check-circle"></i>
                <span>定期系统维护升级</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Response Section -->
    <section class="section response-section">
      <div class="container">
        <div class="content-layout reverse">
          <div class="content-text">
            <h2 class="section-title-left">极速服务应答</h2>
            <p class="section-description">1小时响应为您保驾护航</p>
            <div class="response-features">
              <div class="response-item">
                <div class="response-icon">
                  <i class="fas fa-headset"></i>
                </div>
                <div class="response-content">
                  <h4>即时在线客服</h4>
                  <p>专业客服团队随时待命，快速解答您的疑问</p>
                </div>
              </div>
              <div class="response-item">
                <div class="response-icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <div class="response-content">
                  <h4>电话技术支持</h4>
                  <p>提供专线电话支持，一对一解决技术难题</p>
                </div>
              </div>
           
            </div>
          </div>
          <div class="content-image">
            <img src="/src/image/support/2.png" alt="极速服务应答">
          </div>
        </div>
      </div>
    </section>

    <!-- Customer First Section -->
    <section class="section customer-section">
      <div class="container">
        <div class="content-layout">
          <div class="content-image">
            <img src="/src/image/support/3.png" alt="客户需求为先">
          </div>
          <div class="content-text">
            <h2 class="section-title-left">客户需求为先</h2>
            <p class="section-description">从满足客户需求到创造客户价值</p>
            <div class="customer-values">
              <div class="value-card">
                <div class="value-number">01</div>
                <h4>需求分析</h4>
                <p>深入了解客户需求，提供定制化解决方案</p>
              </div>
              <div class="value-card">
                <div class="value-number">02</div>
                <h4>方案设计</h4>
                <p>根据实际情况设计最优技术方案</p>
              </div>
              <div class="value-card">
                <div class="value-number">03</div>
                <h4>实施部署</h4>
                <p>专业团队协助完成系统部署上线</p>
              </div>
              <div class="value-card">
                <div class="value-number">04</div>
                <h4>持续优化</h4>
                <p>持续跟踪优化，确保系统稳定运行</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Guarantee Section -->
    <section class="section security-section">
      <div class="container">
        <div class="content-layout reverse">
          <div class="content-text">
            <h2 class="section-title-left">落地有保障</h2>
            <p class="section-description">专业团队保驾护航</p>
            <div class="security-grid">
              <div class="security-item">
                <i class="fas fa-shield-alt"></i>
                <h4>数据安全</h4>
                <p>多重加密保护，确保数据安全</p>
              </div>
              <div class="security-item">
                <i class="fas fa-server"></i>
                <h4>系统稳定</h4>
                <p>99.9%系统可用性保障</p>
              </div>
              <div class="security-item">
                <i class="fas fa-sync-alt"></i>
                <h4>备份恢复</h4>
                <p>自动备份，快速恢复机制</p>
              </div>
              <div class="security-item">
                <i class="fas fa-chart-line"></i>
                <h4>性能监控</h4>
                <p>实时监控系统运行状态</p>
              </div>
            </div>
          </div>
          <div class="content-image">
            <img src="/src/image/support/4.png" alt="落地有保障">
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'TechnicalSupport'
}
</script>

<style scoped>
.technical-support {
  padding-top: 70px;
}

/* Hero Section */
.support-hero {
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.support-hero::before {
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

/* Content Layout */
.content-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin: 0 auto;
}

.content-layout.reverse {
  direction: rtl;
}

.content-layout.reverse > * {
  direction: ltr;
}

.content-image {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.content-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s;
}

.content-image:hover img {
  transform: scale(1.05);
}

.content-text {
  padding: 20px;
}

.section-title-left {
  font-size: 36px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 15px;
}

.section-description {
  font-size: 18px;
  color: #4A90E2;
  margin-bottom: 30px;
}

/* Comprehensive Section */
.comprehensive-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;
  color: #333;
}

.feature-item i {
  color: #4A90E2;
  font-size: 20px;
}

/* Response Section */
.response-section {
  background: white;
}

.response-features {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.response-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s;
}

.response-item:hover {
  background: #e8f4ff;
  transform: translateX(10px);
  box-shadow: 0 5px 20px rgba(74, 144, 226, 0.2);
}

.response-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.response-icon i {
  font-size: 28px;
  color: white;
}

.response-content h4 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 8px;
}

.response-content p {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
}

/* Customer Section */
.customer-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.customer-values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.value-card {
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.value-number {
  font-size: 36px;
  font-weight: bold;
  color: #4A90E2;
  opacity: 0.3;
  margin-bottom: 10px;
}

.value-card h4 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.value-card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Security Section */
.security-section {
  background: white;
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.security-item {
  text-align: center;
  padding: 30px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 12px;
  transition: all 0.3s;
}

.security-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.security-item i {
  font-size: 48px;
  color: #4A90E2;
  margin-bottom: 15px;
}

.security-item h4 {
  font-size: 20px;
  color: #1a1a1a;
  margin-bottom: 10px;
}

.security-item p {
  font-size: 14px;
  color: #666;
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
  
  .content-layout,
  .content-layout.reverse {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .customer-values,
  .security-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title-left {
    font-size: 28px;
  }
}
</style>

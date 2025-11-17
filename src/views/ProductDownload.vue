<template>
  <div class="product-download">
    <!-- Hero Section -->
    <section class="download-hero">
      <div class="container">
        <div class="hero-content">
          <div class="product-logo">
            <img src="https://via.placeholder.com/150x150/4A90E2/ffffff?text=Logo" alt="鹊啦播">
            <h1 class="product-name">鹊啦播</h1>
            <p class="product-subtitle">Global Broadcast Adapter</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Update Log Section -->
    <section class="section update-log-section">
      <div class="container">
        <div class="update-log-card">
          <div class="log-item" v-for="log in updateLogs" :key="log.id">
            <div class="log-content">{{ log.content }}</div>
            <div class="log-date">{{ log.date }}</div>
          </div>
          <div class="more-logs">
            <a href="#" class="more-link" @click.prevent="showChangelogModal = true">更多日志 ></a>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Section -->
    <section class="section download-section">
      <div class="container">
        <div class="download-grid">
          <div class="download-card" v-for="platform in platforms" :key="platform.id"
               @click="handleDownload(platform)">
            <div class="platform-icon">
              <i :class="platform.icon"></i>
            </div>
            <h3 class="platform-name">{{ platform.name }}</h3>
            <button class="download-btn">
              <i class="fas fa-download"></i>
              立即下载
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features-section">
      <div class="container">
        <h2 class="section-title">产品特性</h2>
        <div class="features-grid">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <i :class="feature.icon"></i>
            </div>
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- System Requirements Section -->
    <section class="section requirements-section">
      <div class="container">
        <h2 class="section-title">系统要求</h2>
        <div class="requirements-grid">
          <div class="requirement-card" v-for="req in requirements" :key="req.id">
            <h3>{{ req.platform }}</h3>
            <ul>
              <li v-for="(item, index) in req.items" :key="index">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <h2 class="section-title">常见问题</h2>
        <div class="faq-list">
          <div class="faq-item" v-for="faq in faqs" :key="faq.id">
            <div class="faq-question" @click="toggleFaq(faq.id)">
              <h4>{{ faq.question }}</h4>
              <i class="fas" :class="faq.open ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </div>
            <div class="faq-answer" v-show="faq.open">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Changelog Modal -->
    <div class="modal-overlay" v-if="showChangelogModal" @click="showChangelogModal = false">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>产品发布日志</h2>
          <button class="close-btn" @click="showChangelogModal = false">
            <i class="fas fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <div class="changelog-tabs">
            <button 
              v-for="tab in changelogTabs" 
              :key="tab.id"
              :class="['tab-btn', { active: activeTab === tab.id }]"
              @click="activeTab = tab.id">
              {{ tab.name }}
            </button>
          </div>
          
          <div class="changelog-list">
            <div class="changelog-header">
              <div class="header-content">发布内容</div>
              <div class="header-date">发布日期</div>
            </div>
            <div class="changelog-item" v-for="item in paginatedChangelogs" :key="item.id">
              <div class="item-content">{{ item.content }}</div>
              <div class="item-date">{{ item.date }}</div>
            </div>
          </div>
          
          <div class="pagination">
            <span class="total-count">共{{ filteredChangelogs.length }}条</span>
            <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">&lt;</button>
            <button 
              v-for="page in visiblePages" 
              :key="page"
              :class="['page-number', { active: currentPage === page }]"
              @click="currentPage = page">
              {{ page }}
            </button>
            <button class="page-btn" @click="nextPage" :disabled="currentPage === totalPages">&gt;</button>
            <span class="page-info">前往 {{ currentPage }} 页</span>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="confirm-btn" @click="showChangelogModal = false">确定</button>
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <section class="section contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="contact-title">鹊回塔（杭州）科技有限公司</h3>
            <div class="contact-details">
              <div class="contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>浙江省杭州市江干区钱江新城14号楼507室</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>1046754672@qq.com</span>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <span>153-8102-5719</span>
              </div>
            </div>
          </div>
          
          <div class="contact-qr">
            <img src="https://via.placeholder.com/200x200/4A90E2/ffffff?text=QR+Code" alt="QR Code">
            <p>鹊啦播官方公众号</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProductDownload',
  data() {
    return {
      showChangelogModal: false,
      activeTab: 'android',
      currentPage: 1,
      pageSize: 10,
      updateLogs: [
        { id: 1, content: '优化了些内容', date: '2023-08-24' },
        { id: 2, content: '修复了已知bug', date: '2023-08-14' },
        { id: 3, content: '优化登录,修改已知BUG.', date: '2023-08-08' }
      ],
      changelogTabs: [
        { id: 'android', name: 'Android' },
        { id: 'ios', name: 'iOS' },
        { id: 'pc', name: '鹊国播pc端' }
      ],
      allChangelogs: {
        android: [
          { id: 1, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 2, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 3, content: '修复了已知bug', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 4, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 5, content: '优化登录,修改已知BUG.', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 6, content: '新增邮箱注册', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 7, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 8, content: '修复已知的问题', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 9, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 10, content: '优化了些内容', date: '2023-08-24 21:22:38', platform: 'android' },
          { id: 11, content: '修复了已知问题', date: '2023-08-23 15:30:20', platform: 'android' },
          { id: 12, content: '优化用户体验', date: '2023-08-22 10:15:45', platform: 'android' },
          { id: 13, content: '新增功能模块', date: '2023-08-21 18:20:30', platform: 'android' },
          { id: 14, content: '性能优化', date: '2023-08-20 14:10:25', platform: 'android' },
          { id: 15, content: '修复崩溃问题', date: '2023-08-19 09:45:15', platform: 'android' },
          { id: 16, content: '界面优化', date: '2023-08-18 16:30:50', platform: 'android' },
          { id: 17, content: '增加新特性', date: '2023-08-17 11:20:35', platform: 'android' },
          { id: 18, content: '修复已知BUG', date: '2023-08-16 13:55:40', platform: 'android' }
        ],
        ios: [
          { id: 1, content: 'iOS版本优化', date: '2023-08-24 21:22:38', platform: 'ios' },
          { id: 2, content: '修复iOS已知问题', date: '2023-08-23 20:15:30', platform: 'ios' },
          { id: 3, content: 'iOS性能提升', date: '2023-08-22 18:30:25', platform: 'ios' },
          { id: 4, content: '适配iOS新版本', date: '2023-08-21 16:45:20', platform: 'ios' },
          { id: 5, content: 'iOS界面优化', date: '2023-08-20 14:20:15', platform: 'ios' }
        ],
        pc: [
          { id: 1, content: 'PC端功能优化', date: '2023-08-24 21:22:38', platform: 'pc' },
          { id: 2, content: '修复PC端bug', date: '2023-08-23 19:30:25', platform: 'pc' },
          { id: 3, content: 'PC端性能提升', date: '2023-08-22 17:15:40', platform: 'pc' },
          { id: 4, content: '新增PC端功能', date: '2023-08-21 15:45:30', platform: 'pc' },
          { id: 5, content: 'PC端界面改进', date: '2023-08-20 13:20:15', platform: 'pc' }
        ]
      },
      platforms: [
        {
          id: 1,
          name: 'Android',
          icon: 'fab fa-android',
          downloadUrl: '#'
        },
        {
          id: 2,
          name: 'iOS',
          icon: 'fab fa-apple',
          downloadUrl: '#'
        },
        {
          id: 3,
          name: 'Windows',
          icon: 'fab fa-windows',
          downloadUrl: '#'
        },
        {
          id: 4,
          name: '相关工具下载',
          icon: 'fas fa-download',
          downloadUrl: '#'
        }
      ],
      features: [
        {
          id: 1,
          title: '多平台支持',
          description: '支持Android、iOS、Windows等多个平台',
          icon: 'fas fa-mobile-alt'
        },
        {
          id: 2,
          title: '稳定可靠',
          description: '经过严格测试，确保软件稳定运行',
          icon: 'fas fa-shield-alt'
        },
        {
          id: 3,
          title: '简单易用',
          description: '界面简洁，操作便捷，快速上手',
          icon: 'fas fa-user-check'
        },
        {
          id: 4,
          title: '持续更新',
          description: '定期更新版本，修复问题，优化体验',
          icon: 'fas fa-sync-alt'
        },
        {
          id: 5,
          title: '安全保障',
          description: '采用多重加密技术，保护用户数据安全',
          icon: 'fas fa-lock'
        },
        {
          id: 6,
          title: '技术支持',
          description: '提供专业的技术支持和售后服务',
          icon: 'fas fa-headset'
        }
      ],
      requirements: [
        {
          id: 1,
          platform: 'Android',
          items: [
            'Android 6.0 或更高版本',
            '至少 2GB RAM',
            '100MB 可用存储空间',
            '需要网络连接'
          ]
        },
        {
          id: 2,
          platform: 'iOS',
          items: [
            'iOS 12.0 或更高版本',
            '兼容 iPhone、iPad',
            '100MB 可用存储空间',
            '需要网络连接'
          ]
        },
        {
          id: 3,
          platform: 'Windows',
          items: [
            'Windows 10 或更高版本',
            '至少 4GB RAM',
            '200MB 可用存储空间',
            '需要网络连接'
          ]
        }
      ],
      faqs: [
        {
          id: 1,
          question: '如何下载和安装软件？',
          answer: '点击对应平台的下载按钮，下载完成后按照提示进行安装即可。Android用户可能需要允许安装未知来源应用。',
          open: false
        },
        {
          id: 2,
          question: '软件是否收费？',
          answer: '软件提供免费版本和付费版本。免费版本包含基础功能，付费版本提供更多高级功能和服务。',
          open: false
        },
        {
          id: 3,
          question: '如何获取技术支持？',
          answer: '您可以通过官方邮箱、电话或公众号联系我们的技术支持团队，我们将在24小时内回复您的问题。',
          open: false
        },
        {
          id: 4,
          question: '软件支持哪些语言？',
          answer: '目前软件支持中文、英文等多种语言，后续将继续增加更多语言支持。',
          open: false
        },
        {
          id: 5,
          question: '如何更新软件？',
          answer: '软件会自动检测新版本，当有新版本时会提示您更新。您也可以在设置中手动检查更新。',
          open: false
        }
      ]
    }
  },
  computed: {
    filteredChangelogs() {
      return this.allChangelogs[this.activeTab] || []
    },
    totalPages() {
      return Math.ceil(this.filteredChangelogs.length / this.pageSize)
    },
    paginatedChangelogs() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredChangelogs.slice(start, end)
    },
    visiblePages() {
      const pages = []
      const total = this.totalPages
      const current = this.currentPage
      
      if (total <= 5) {
        for (let i = 1; i <= total; i++) {
          pages.push(i)
        }
      } else {
        if (current <= 3) {
          pages.push(1, 2, 3, 4, 5)
        } else if (current >= total - 2) {
          for (let i = total - 4; i <= total; i++) {
            pages.push(i)
          }
        } else {
          for (let i = current - 2; i <= current + 2; i++) {
            pages.push(i)
          }
        }
      }
      return pages
    }
  },
  watch: {
    activeTab() {
      this.currentPage = 1
    }
  },
  methods: {
    handleDownload(platform) {
      console.log('下载:', platform.name)
      alert(`正在下载 ${platform.name} 版本...`)
    },
    toggleFaq(id) {
      const faq = this.faqs.find(f => f.id === id)
      if (faq) {
        faq.open = !faq.open
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    }
  }
}
</script>

<style scoped>
.product-download {
  padding-top: 70px;
}

/* Hero Section */
.download-hero {
  background: linear-gradient(135deg, #e8f4ff 0%, #c3d9f7 100%);
  padding: 80px 0;
}

.hero-content {
  text-align: center;
}

.product-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.product-logo img {
  width: 150px;
  height: 150px;
  border-radius: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.product-name {
  font-size: 48px;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0;
}

.product-subtitle {
  font-size: 20px;
  color: #4A90E2;
  margin: 0;
}

/* Update Log Section */
.update-log-section {
  background: white;
}

.update-log-card {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.log-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.log-item:last-child {
  border-bottom: none;
}

.log-content {
  font-size: 18px;
  color: #333;
}

.log-date {
  font-size: 16px;
  color: #4A90E2;
  font-weight: 600;
}

.more-logs {
  text-align: center;
  margin-top: 30px;
}

.more-link {
  color: #4A90E2;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s;
}

.more-link:hover {
  color: #357ABD;
}

/* Download Section */
.download-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.download-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.download-card {
  background: white;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  margin: 0 auto;
}

.download-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
}

.download-card:hover .platform-icon,
.download-card:hover .platform-name,
.download-card:hover .download-btn {
  color: white;
}

.platform-icon {
  font-size: 60px;
  color: #4A90E2;
  transition: color 0.3s;
}

.platform-name {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  transition: color 0.3s;
}

.download-btn {
  background: transparent;
  border: none;
  color: #4A90E2;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s;
}

/* Features Section */
.features-section {
  background: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
  width: 70px;
  height: 70px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #4A90E2 0%, #357ABD 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon i {
  font-size: 32px;
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

/* Requirements Section */
.requirements-section {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
}

.requirements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.requirement-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.requirement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.requirement-card h3 {
  font-size: 24px;
  color: #4A90E2;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #4A90E2;
}

.requirement-card ul {
  list-style: none;
  padding: 0;
}

.requirement-card li {
  padding: 10px 0;
  color: #555;
  font-size: 15px;
  position: relative;
  padding-left: 25px;
}

.requirement-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4A90E2;
  font-weight: bold;
}

/* FAQ Section */
.faq-section {
  background: white;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 12px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s;
}

.faq-item:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f0ff 100%);
  transition: background 0.3s;
}

.faq-question:hover {
  background: linear-gradient(135deg, #e8f0ff 0%, #d0e4ff 100%);
}

.faq-question h4 {
  font-size: 18px;
  color: #1a1a1a;
  margin: 0;
}

.faq-question i {
  color: #4A90E2;
  font-size: 18px;
  transition: transform 0.3s;
}

.faq-answer {
  padding: 20px 25px;
  background: white;
  border-top: 1px solid #e0e0e0;
}

.faq-answer p {
  margin: 0;
  color: #555;
  line-height: 1.8;
  font-size: 15px;
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 15px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  padding: 25px 30px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h2 {
  font-size: 24px;
  color: #1a1a1a;
  margin: 0;
}

.close-btn {
  width: 35px;
  height: 35px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.close-btn:hover {
  background: #e0e0e0;
  transform: rotate(90deg);
}

.close-btn i {
  color: #666;
  font-size: 18px;
}

.modal-body {
  padding: 30px;
  overflow-y: auto;
  flex: 1;
}

.changelog-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
}

.tab-btn {
  padding: 12px 30px;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: #666;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: -2px;
}

.tab-btn:hover {
  color: #4A90E2;
}

.tab-btn.active {
  color: #4A90E2;
  border-bottom-color: #4A90E2;
}

.changelog-list {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.changelog-header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8f0ff 100%);
  padding: 15px 20px;
  font-weight: 600;
  color: #1a1a1a;
  border-bottom: 2px solid #4A90E2;
}

.changelog-item {
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
  transition: background 0.3s;
}

.changelog-item:hover {
  background: #f8f9fa;
}

.changelog-item:last-child {
  border-bottom: none;
}

.item-content {
  color: #333;
  font-size: 15px;
}

.item-date {
  color: #666;
  font-size: 14px;
  text-align: right;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.total-count {
  color: #666;
  font-size: 14px;
  margin-right: 10px;
}

.page-btn,
.page-number {
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  background: white;
  color: #666;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  font-size: 14px;
}

.page-btn:hover:not(:disabled),
.page-number:hover {
  border-color: #4A90E2;
  color: #4A90E2;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-number.active {
  background: #4A90E2;
  color: white;
  border-color: #4A90E2;
}

.page-info {
  color: #666;
  font-size: 14px;
  margin-left: 10px;
}

.modal-footer {
  padding: 20px 30px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
}

.confirm-btn {
  padding: 12px 50px;
  background: #4A90E2;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 5px 15px rgba(74, 144, 226, 0.3);
}

.confirm-btn:hover {
  background: #357ABD;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .product-name {
    font-size: 36px;
  }
  
  .download-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-grid,
  .requirements-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .log-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  
  .modal-content {
    max-width: 95%;
  }
  
  .modal-header h2 {
    font-size: 20px;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .changelog-tabs {
    flex-wrap: wrap;
  }
  
  .tab-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .changelog-header,
  .changelog-item {
    grid-template-columns: 1.5fr 1fr;
    font-size: 14px;
  }
  
  .pagination {
    gap: 5px;
  }
  
  .page-btn,
  .page-number {
    padding: 6px 10px;
    font-size: 13px;
  }
}
</style>

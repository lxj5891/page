<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-column">
            <h3>关于我们</h3>
            <ul>
              <li><a href="#">公司简介</a></li>
              <li><a href="#">企业文化</a></li>
              <li><a href="#">发展历程</a></li>
              <li><a href="#">荣誉资质</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>产品服务</h3>
            <ul>
              <li><a href="#">智能解决方案</a></li>
              <li><a href="#">云端服务</a></li>
              <li><a href="#">数据分析</a></li>
              <li><a href="#">技术支持</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>新闻资讯</h3>
            <ul>
              <li><a href="#">公司动态</a></li>
              <li><a href="#">行业资讯</a></li>
              <li><a href="#">媒体报道</a></li>
              <li><a href="#">活动公告</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3>联系我们</h3>
            <ul class="contact-info">
              <li><i class="fas fa-phone"></i> 400-123-4567</li>
              <li><i class="fas fa-envelope"></i> info@example.com</li>
              <li><i class="fas fa-map-marker-alt"></i> 北京市朝阳区xxx大厦</li>
            </ul>
            <div class="social-links">
              <a href="#"><i class="fab fa-weixin"></i></a>
              <a href="#"><i class="fab fa-weibo"></i></a>
              <a href="#"><i class="fab fa-qq"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>&copy; 2024 全球首创共享新模式. All Rights Reserved.</p>
          <div class="footer-qr">
            <img src="https://via.placeholder.com/100x100/4A90E2/ffffff?text=QR" alt="QR Code">
            <span>扫码关注我们</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
}

.footer-top {
  padding: 60px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-column h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: white;
  position: relative;
  padding-bottom: 10px;
}

.footer-column h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: #4A90E2;
}

.footer-column ul {
  list-style: none;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.footer-column ul li a:hover {
  color: #4A90E2;
  transform: translateX(5px);
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
}

.contact-info i {
  color: #4A90E2;
  width: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-links a {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  transition: all 0.3s;
}

.social-links a:hover {
  background: #4A90E2;
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 30px 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-bottom-content p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

.footer-qr {
  display: flex;
  align-items: center;
  gap: 15px;
}

.footer-qr img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}

.footer-qr span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }
}
</style>

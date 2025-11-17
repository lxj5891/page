<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <img src="https://via.placeholder.com/120x40/4A90E2/ffffff?text=LOGO" alt="Logo">
        </div>
        <ul class="nav-menu">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/project-intro">项目介绍</router-link></li>
          <li><router-link to="/technical-support">技术支持</router-link></li>
          <li><router-link to="/business-cooperation">商务合作</router-link></li>
          <li><router-link to="/about-us">关于我们</router-link></li>
          <li><router-link to="/product-download">产品下载</router-link></li>
        </ul>
        <div class="nav-icons">
          <i class="fas fa-search"></i>
          <i class="fas fa-globe"></i>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.header.scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
}

.logo img {
  height: 40px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-menu a,
.nav-menu :deep(a) {
  text-decoration: none;
  color: #333;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-menu a:hover,
.nav-menu :deep(a):hover,
.nav-menu :deep(a.router-link-active) {
  color: #4A90E2;
}

.nav-menu a::after,
.nav-menu :deep(a)::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #4A90E2;
  transition: width 0.3s;
}

.nav-menu a:hover::after,
.nav-menu :deep(a):hover::after,
.nav-menu :deep(a.router-link-active)::after {
  width: 100%;
}

.nav-icons {
  display: flex;
  gap: 20px;
  font-size: 18px;
  color: #666;
}

.nav-icons i {
  cursor: pointer;
  transition: color 0.3s;
}

.nav-icons i:hover {
  color: #4A90E2;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>

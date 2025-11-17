<template>
  <section class="hero" id="home">
    <div class="hero-background">
      <div class="cloud cloud-1"></div>
      <div class="cloud cloud-2"></div>
      <div class="cloud cloud-3"></div>
    </div>
    <div class="container">
      <div class="hero-content fade-in-up">
        <h1 class="hero-title">全球首创共享新模式</h1>
        <p class="hero-subtitle">自今天起 发现AI 设置资料 打造个人AI 解答</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">立即体验</button>
          <button class="btn btn-secondary">了解更多</button>
        </div>
      </div>
    </div>
    <div class="scroll-indicator">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow: hidden;
  padding-top: 80px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #a8c0ff 0%, #c5d9f7 50%, #e8f0ff 100%);
}

.cloud {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 100px;
  animation: float 20s infinite ease-in-out;
}

.cloud-1 {
  width: 200px;
  height: 60px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.cloud-2 {
  width: 300px;
  height: 80px;
  top: 40%;
  right: 15%;
  animation-delay: 3s;
}

.cloud-3 {
  width: 250px;
  height: 70px;
  bottom: 30%;
  left: 20%;
  animation-delay: 6s;
}

.hero-content {
  text-align: center;
  position: relative;
  z-index: 10;
  color: #1a1a1a;
}

.hero-title {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #1a1a1a;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  color: #333;
  letter-spacing: 3px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 15px 40px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 600;
}

.btn-primary {
  background: #4A90E2;
  color: white;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
}

.btn-primary:hover {
  background: #357ABD;
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(74, 144, 226, 0.4);
}

.btn-secondary {
  background: white;
  color: #4A90E2;
  border: 2px solid #4A90E2;
}

.btn-secondary:hover {
  background: #4A90E2;
  color: white;
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  font-size: 24px;
  color: #4A90E2;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
  }
}
</style>

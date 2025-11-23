<template>
  <section class="gallery section">
    <div class="container">
      <h2 class="section-title">部分合作企业</h2>
      <p class="section-subtitle">Some Cooperation Companies</p>
      
      <div class="gallery-tabs">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          @click="activeTab = tab.id">
          {{ tab.name }}
        </button>
      </div>
      
      <div class="gallery-grid">
        <div class="gallery-item" v-for="item in filteredGallery" :key="item.id">
          <img :src="item.image" :alt="item.title">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GallerySection',
  data() {
    return {
      activeTab: 'all',
      tabs: [
        { id: 'all', name: '全部' },
        { id: 'cdjd', name: '成都基地' },
        { id: 'zkly', name: '中科粮油' },
        { id: 'mcpf', name: '米草破风' }
      ],
      gallery: [
        { id: 1, category: 'cdjd', title: '活动1', image: '/src/image/cd0.png' },
        { id: 2, category: 'cdjd', title: '产品1', image: '/src/image/cd1.png' },
        { id: 3, category: 'cdjd', title: '团队1', image: '/src/image/cd2.png' },
        { id: 4, category: 'cdjd', title: '活动2', image: '/src/image/cd3.png' },
        { id: 5, category: 'cdjd', title: '产品2', image: '/src/image/cd4.png' },
        { id: 6, category: 'cdjd', title: '团队2', image: '/src/image/cd5.png' },
        { id: 7, category: 'zkly', title: '中科粮油1', image: '/src/image/cp/zkly-1.png' },
        { id: 8, category: 'zkly', title: '中科粮油2', image: '/src/image/cp/zkly-2.png' },
        { id: 9, category: 'zkly', title: '中科粮油3', image: '/src/image/cp/zkly-3.png' },
        { id: 9, category: 'zkly', title: '中科粮油3', image: '/src/image/cp/zkly-4.png' },
        { id: 9, category: 'zkly', title: '中科粮油3', image: '/src/image/cp/zkly-5.png' },
        { id: 9, category: 'zkly', title: '中科粮油3', image: '/src/image/cp/zkly-6.png' },
        { id: 10, category: 'mcpf', title: '米草破风1', image: '/src/image/cp/mcpf-0.png' },
        { id: 11, category: 'mcpf', title: '米草破风2', image: '/src/image/cp/mcpf-1.png' },
        { id: 12, category: 'mcpf', title: '米草破风3', image: '/src/image/cp/mcpf-2.png' },
        { id: 13, category: 'mcpf', title: '米草破风4', image: '/src/image/cp/mcpf-3.png' },
        { id: 14, category: 'mcpf', title: '米草破风5', image: '/src/image/cp/mcpf-4.png' },
        { id: 14, category: 'mcpf', title: '米草破风5', image: '/src/image/cp/mcpf-5.png' },
      ]
    }
  },
  computed: {
    filteredGallery() {
      if (this.activeTab === 'all') {
        return this.gallery
      }
      return this.gallery.filter(item => item.category === this.activeTab)
    }
  }
}
</script>

<style scoped>
.gallery {
  background: #f8f9fa;
}

.gallery-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.tab-button {
  padding: 12px 30px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.tab-button:hover {
  border-color: #4A90E2;
  color: #4A90E2;
}

.tab-button.active {
  background: #4A90E2;
  border-color: #4A90E2;
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 208px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 144, 226, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-overlay i {
  font-size: 48px;
  color: white;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .gallery-item {
    height: 250px;
  }
}
</style>

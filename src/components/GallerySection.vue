<template>
  <section class="gallery section">
    <div class="container">
      <h2 class="section-title">精彩瞬间</h2>
      <p class="section-subtitle">WONDERFUL MOMENTS</p>
      
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
          <div class="gallery-overlay">
            <i class="fas fa-search-plus"></i>
          </div>
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
        { id: 'events', name: '活动' },
        { id: 'products', name: '产品' },
        { id: 'team', name: '团队' }
      ],
      gallery: [
        { id: 1, category: 'events', title: '活动1', image: 'https://via.placeholder.com/400x300/4A90E2/ffffff?text=Event+1' },
        { id: 2, category: 'products', title: '产品1', image: 'https://via.placeholder.com/400x300/5B9BD5/ffffff?text=Product+1' },
        { id: 3, category: 'team', title: '团队1', image: 'https://via.placeholder.com/400x300/70AD47/ffffff?text=Team+1' },
        { id: 4, category: 'events', title: '活动2', image: 'https://via.placeholder.com/400x300/FFC000/ffffff?text=Event+2' },
        { id: 5, category: 'products', title: '产品2', image: 'https://via.placeholder.com/400x300/C55A11/ffffff?text=Product+2' },
        { id: 6, category: 'team', title: '团队2', image: 'https://via.placeholder.com/400x300/E74C3C/ffffff?text=Team+2' },
        { id: 7, category: 'events', title: '活动3', image: 'https://via.placeholder.com/400x300/9B59B6/ffffff?text=Event+3' },
        { id: 8, category: 'products', title: '产品3', image: 'https://via.placeholder.com/400x300/3498DB/ffffff?text=Product+3' }
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
  height: 300px;
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

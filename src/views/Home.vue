<template>
  <div class="home">
    <HeroSection />
    <WorldMapSection />
    <ExpertSection />
    <ShowroomSection />
    <StatisticsSection />
    <CooperationSection />
    <GallerySection />
    <CaseStudySection />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue'
import WorldMapSection from '../components/WorldMapSection.vue'
import ExpertSection from '../components/ExpertSection.vue'
import ShowroomSection from '../components/ShowroomSection.vue'
import StatisticsSection from '../components/StatisticsSection.vue'
import CooperationSection from '../components/CooperationSection.vue'
import GallerySection from '../components/GallerySection.vue'
import CaseStudySection from '../components/CaseStudySection.vue'

export default {
  name: 'Home',
  components: {
    HeroSection,
    WorldMapSection,
    ExpertSection,
    ShowroomSection,
    StatisticsSection,
    CooperationSection,
    GallerySection,
    CaseStudySection
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}
</style>

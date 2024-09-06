
<template>
<!-- slider -->
  <div class="banner-container row">
    <transition-group name="fade" tag="div" class="column">
      <div
        v-for="key in [currentIndex]"
        :key="key"
        :id="`banner-${currentIndex}`"
        :class="`banner-${currentIndex} ${setBackground(banner[currentIndex])}`"
        class="banner"
        >
        <h2 v-if="banner[key] && banner[key].title" v-text="banner[key].title"></h2>
      </div><!-- end of loop div -->
    </transition-group>
    <ul class="banner-dots">
      <li
          v-for="(el, index) in banner" :key="index"
          class="banner-dots-inner">
        <button
          @click="currentIndex = index"
          :class="currentIndex === index ? 'active' : null"
          href="#" type="submit"></button>
      </li>
    </ul>
  </div><!-- end of container div -->
</template>
<script>
export default {
  name: "SliderComponent",
  data: () => ({
      banner: [
        {
          title: 'Slider 1',
          backgroundColor: 'bg-pink'
        },
        {
          title: 'Slider 2',
          backgroundColor: 'bg-blue'
        },
        {
          title: 'Slider 3',
          backgroundColor: 'bg-green'
        }
      ], // array list banner, title, background
      timer: null, // variable time is number
      currentIndex: 0  // variable time is number
  }),
  mounted: function() {
    this.startSlide()  // method start
  },
  methods: {
    setBackground(val) {
      /**
       * @param object, check for class name
       */
      let bg = 'bg-pink'
      if (val && val.backgroundColor) {
        bg = val.backgroundColor
      }
      return bg
    },
    startSlide: function() {
      /**
       * @return number, setInterval slider
       */
      this.timer = setInterval(this.next, 40000)
    }
  },
  computed: {
    currentImg: function() {
      /**
       * @return number, get index
       */
      return this.banner[Math.abs(this.currentIndex) % this.banner.length];
    }
  }
}
</script>

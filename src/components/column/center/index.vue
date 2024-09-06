<template>
<!-- column center -->
  <div class="column column-45 pr-0 border-light" id="column-center">
    <!-- list component -->
    <slider-component />
    <body-component />
  </div>
</template>

<script>
// call component
import sliderComponent from './slider'
import bodyComponent from './body'
export default {
  name: 'ColumnCenterComponent',
  components: {
    sliderComponent,
    bodyComponent
  }
}
</script>

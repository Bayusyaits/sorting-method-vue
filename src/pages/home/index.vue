<template>
<!-- home -->
  <div id="home" class="row">
    <!-- list component -->
    <sidebar-left-component />
    <column-center-component />
    <column-right-component />
  </div>
</template>

<script>
import sidebarLeftComponent from '@/components/sidebar'
import columnCenterComponent from '@/components/column/center'
import columnRightComponent from '@/components/column/right'

export default {
  name: 'HomePage',
  components: {
    sidebarLeftComponent,
    columnCenterComponent,
    columnRightComponent
  }
}
</script>

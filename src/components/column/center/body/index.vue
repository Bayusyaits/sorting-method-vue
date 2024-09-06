<template>
<!-- body -->
  <article class="container pb-10" id="column-center-body">
    <tabs-component />
  </article>
</template>

<script>
import tabsComponent from './tabs'
export default {
  name: 'BodyComponent',
  components: {
    tabsComponent
  }
}
</script>

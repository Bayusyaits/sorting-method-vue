<template>
<!-- layout -->
  <main id="layout">
    <header-component />
    <section class="container" id="grids">
      <slot></slot>
    </section>
  </main>
</template>

<script>
// call component
import headerComponent from '@/components/header'

export default {
  name: 'Layouts',
  components: {
    headerComponent
  }
}
</script>

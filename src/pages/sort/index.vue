<template>
<!-- sort -->
  <div id="sort" class="row">
    <!-- list component -->
    <sort-index-component />
  </div>
</template>

<script>
import sortIndexComponent from '@/components/sort'

export default {
  name: 'SortPage',
  components: {
    sortIndexComponent
  }
}
</script>

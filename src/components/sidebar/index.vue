<template>
  <div class="column column-10 sidebar" id="sidebar-left">
    <div class="row">
      <h5 class="title uppercase">Side bar</h5>
    </div>
    <hr />
    <div v-for="(line, key) in lines" :key="key"  class="row">
      <div class="line-grey space-y">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarLeftComponent',
  data: () => ({
    lines: [1, 2, 3, 4]
  })
}
</script>

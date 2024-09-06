<template>
<!-- column center (tab two) -->
  <div id="column-tab-two">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Title Lorem Ipsum</h1>
      </div>
      <div class="column column-25 no-padding ml-10 pr-10">
          <p class="bold text-right">02-07-2001</p>
      </div>
    </div>
    <div
      v-for="(item, index) in lines"
      :key="index"
      class="row">
        <div class="line-grey space-y"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnCenterBodyTabTwoComponent',
  data: () => ({
    lines: [1, 2, 3, 4] // array lines
  })
}
</script>

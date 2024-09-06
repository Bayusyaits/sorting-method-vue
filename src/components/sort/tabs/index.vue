<template>
<!-- sort tabs index -->
  <div class="container">
    <div class="row" id="column-body-tab">
      <div class="section-buttom row">
        <button
          v-for="(item, key) in listComponents"
          :key="key"
          :class="['tab-button', { active: componentName === item.name }]"
          @click='componentName = item.name'
          v-text="item.title"
        >
        </button>
      </div><!-- end of row div -->
    </div><!-- end of container div -->
    <div class="row mt-20">
        <hr />
    </div>
    <div class="row">
      <keep-alive>
        <component :is="componentName" class="tab container text-left"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SortTabsComponent',
  data: () => ({
    componentName: 'sortTabOneComponent',
    listComponents: [
      {
        name: 'sortTabOneComponent',
        title: 'Bubble Sort'
      },
      {
        name: 'sortTabTwoComponent',
        title: 'Selection Sort'
      },
      {
        name: 'sortTabThreeComponent',
        title: 'Insertion Sort'
      },
      {
        name: 'sortTabFourComponent',
        title: 'Merge Sort'
      },
      {
        name: 'sortTabFiveComponent',
        title: 'Quick Sort'
      }
    ]
  }),
  watch: {
    componentName: {
      handler(val) {
        console.log('componentName', val)
      }
    }
  }
}
</script>

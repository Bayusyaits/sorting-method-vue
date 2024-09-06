<template>
<!-- column center tabs index -->
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
    <footer-component />
  </div>
</template>

<script>
import footerComponent from '@/components/column/center/footer'

export default {
  name: 'ColumnCenterBodyTabsComponent',
  components: {
    footerComponent
  },
  data: () => ({
    componentName: 'tabOneComponent',
    listComponents: [
      {
        name: 'tabOneComponent',
        title: 'Tab 1'
      },
      {
        name: 'tabTwoComponent',
        title: 'Tab 2'
      },
      {
        name: 'tabThreeComponent',
        title: 'Tab 3'
      }
    ]
  })
}
</script>

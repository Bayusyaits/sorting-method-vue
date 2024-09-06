import { createApp } from 'vue'
import milligram from 'milligram'
import router from './router' // router
import App from './App.vue'
// layout design
import tabOneComponent from '@/components/column/center/body/tabs/tabOneComponent.vue'
import tabTwoComponent from '@/components/column/center/body/tabs/tabTwoComponent.vue'
import tabThreeComponent from '@/components/column/center/body/tabs/tabThreeComponent.vue'
// sort
import sortTabOneComponent from '@/components/sort/tabs/tabOneComponent.vue'
import sortTabTwoComponent from '@/components/sort/tabs/tabTwoComponent.vue'
import sortTabThreeComponent from '@/components/sort/tabs/tabThreeComponent.vue'
import sortTabFourComponent from '@/components/sort/tabs/tabFourComponent.vue'
import sortTabFiveComponent from '@/components/sort/tabs/tabFiveComponent.vue'
import layouts from './layouts/index.vue' // layout
import '@/assets/scss/apps.scss' // scss


const app = createApp(App)

app
  .use(router)
  .use(milligram)
  .component('default-layout', layouts)
  // init tab component
    .component("tabOneComponent", tabOneComponent)
    .component("tabTwoComponent", tabTwoComponent)
    .component("tabThreeComponent", tabThreeComponent)
    // init sort tab component
    .component("sortTabOneComponent", sortTabOneComponent)
    .component("sortTabTwoComponent", sortTabTwoComponent)
    .component("sortTabThreeComponent", sortTabThreeComponent)
    .component("sortTabFourComponent", sortTabFourComponent)
    .component("sortTabFiveComponent", sortTabFiveComponent)
  .mount('#app')

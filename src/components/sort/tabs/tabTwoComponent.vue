<template>
<!-- sort (tab two) -->
  <div id="sort-tab-two">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Selection Sort</h1>
      </div>
    </div>
    <div class="row no-padding">
      <div class="column">
        <p class="mb-10">1. Iteration, select one of 5.</p>
        <div
          v-for="(items, key) in keepData(listArr)"
          :key="key"
          class="row px-20"
        >
          <label
            class="radio">
            <input
              :value="items"
              v-model="tmpArray"
              :name="`multiple-${key}`"
              type="radio">
            <span
              v-html="items" class="pl-10"></span>
          </label>
        </div><!-- end of loop row div -->
      </div><!-- end of column div -->
    </div><!-- end of row div -->
    <div class="row no-padding mt-20">
      <div class="column">
        <p>Output: <span v-if="output" v-text="output" class="text-bold"></span></p>
      </div><!-- end of column div -->
    </div><!-- end of row div -->
  </div><!-- end of #sort div -->
</template>

<script>
export default {
  name: 'SortTabTwoComponent',
  data: () => ({
    listArr: [
      [3,2,10,1,6],
      [4,3,14,3,7],
      [8,5,11,2,-2],
      [9,4,8,5,22],
      [11,7,15,4,-2]
    ], // array list for iteration
    tmpArray: [], // array tmp
    output: [] // show output after selected by user
  }),
  watch: {
    tmpArray: {
      handler(val) {
        // check if number of elements greater than 0
        if (val && val.length > 0) {
          this.output = this.selectionSort(val)
        }
      },
      immediate: true
    }
  },
  methods: {
    keepData(val) {
      /**
       * JSON.parse() takes a JSON string and transforms it into a JavaScript object
       * JSON.stringify() takes a JavaScript object and transforms it into a JSON string
       */
      return JSON.parse(JSON.stringify(val))
    },
    selectionSort(val) {
      /**
       * @param array val
       * val loop through the input array linearly,
       */
      let arr = val
      let len = arr.length;
      for (let i = 0; i < len; i++) {
          let min = i;
          /**
           * get the second smallest element
           */
          for (let j = i + 1; j < len; j++) {
              if (arr[min] > arr[j]) {
                  min = j;
              }
          }
          // To avoid an unnecessary swap of the same item with itself
          if (min !== i) {
              let tmp = arr[i];
              arr[i] = arr[min];
              arr[min] = tmp;
          }
      }
      return arr;
    }
  }
}
</script>

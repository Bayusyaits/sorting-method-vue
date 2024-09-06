<template>
<!-- sort (tab one) -->
  <div id="sort-tab-one">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Bubble Sort</h1>
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
  name: 'SortTabOneComponent',
  data: () => ({
    listArr: [
      [9, 7, 6, 5, -1, 8, 12],
      [4, 2, 8, 5, -2, 9, 1],
      [5, 1, 3, 6, -3, 2, 1],
      [6, 9, 8, 5, -1, 7, 11],
      [7, 8, 11, 5, 10, -4, 19]
    ], // array list for iteration
    tmpArray: [], // array tmp
    output: [] // show output after selected by user
  }),
  watch: {
    tmpArray: {
      handler(val) {
        // check if number of elements greater than 0
        if (val && val.length > 0) {
          this.output = this.bubbleSort(val)
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
    swap(arr, first_Index, second_Index){
      let temp = arr[first_Index];
      arr[first_Index] = arr[second_Index];
      arr[second_Index] = temp;
    },
    bubbleSort(val) {
      let arr = val
      let len = arr.length,
          i, j, stop;
      for (i=0; i < len; i++){
          for (j=0, stop=len-i; j < stop; j++){
              if (arr[j] > arr[j+1]){
                  this.swap(arr, j, j+1);
              }
          }
      }
      return arr
    }
  }
}
</script>

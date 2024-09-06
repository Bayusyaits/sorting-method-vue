<template>
<!-- sort (tab five) -->
  <div id="sort-tab-five">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Quick Sort</h1>
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
  name: 'SortTabFiveComponent',
  data: () => ({
    listArr: [
      [3, 7, 6, 5, -1, 4, 1],
      [6, 8, 9, 5, -1, 7, 11 ],
      [4, 9, 8, 5, -1, 7, 2 ],
      [2, 8, 4, 5, -1, 7, 3 ],
      [1, 5, 2, 3, -1, 6, 4 ]
    ], // array list for iteration
    tmpArray: [], // array tmp
    output: [] // show output after selected by user
  }),
  watch: {
    tmpArray: {
      handler(val) {
        // check if number of elements greater than 0
        if (val && val.length > 0) {
          this.output = this.quickSort(val, 0, val.length - 1)
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
    swap(items, leftIndex, rightIndex){
      /**
       * @param array items
       * @param number leftIndex
       * @param number rightIndex
       */
      const temp = items[leftIndex]
      items[leftIndex] = items[rightIndex]
      items[rightIndex] = temp
    },
    partition(items, left, right) {
      let pivot   = items[Math.floor((right + left) / 2)], //middle element
          i       = left, //left pointer
          j       = right //right pointer
      while (i <= j) {
        // check if items index i (left) greater than pivot
          while (items[i] < pivot) {
              i++;
          }
          // check if items index j (right) greater than pivot
          while (items[j] > pivot) {
              j--;
          }
          if (i <= j) {
              this.swap(items, i, j); //sawpping two elements
              i++;
              j--;
          }
      }
      return i
    },
    quickSort(items, left, right) {
      let index
      /**
       * @param array items
       * check if array greater than one
       */
      if (items.length > 1) {
          index = this.partition(items, left, right) //index returned from partition
          if (left < index - 1) { //more elements on the left side of the pivot
              this.quickSort(items, left, index - 1)
          }
          if (index < right) { //more elements on the right side of the pivot
              this.quickSort(items, index, right)
          }
      }
      return items
    }
  }
}
</script>

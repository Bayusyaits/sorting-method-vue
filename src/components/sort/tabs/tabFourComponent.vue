<template>
<!-- sort (tab four) -->
  <div id="sort-tab-four">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Merge Sort</h1>
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
  name: 'SortTabFourComponent',
  data: () => ({
    listArr: [
      [4, 9, 7, 12, 1, 3, 2],
      [9, 1, 6, 11, 8, 4, 7],
      [7, 4, 5, 2, 9, 6, 13],
      [6, 3, 8, 4, 2, 5, 14],
      [2, 8, 9, 7, 12, 1, 15]
    ], // array list for iteration
    tmpArray: [], // array tmp
    output: [] // show output after selected by user
  }),
  watch: {
    tmpArray: {
      handler(val) {
        // check if number of elements greater than 0
        if (val && val.length > 0) {
          this.output = this.mergeSort(val)
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
    merge(left, right) {
      let arr = []
      while (left.length && right.length) {
        // check if left lower than right
        if (left[0] < right[0]) {
          arr.push(left.shift())
        } else {
          arr.push(right.shift())
        }
      }
      // join two array
      return arr.concat(left.slice().concat(right.slice()))
    },
    mergeSort(val) {
      /**
       * @param array val
       * check of arr lower than 2
       */
      let arr = val
      if (arr.length < 2) {
        return arr;
      }

      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle)
      const right = arr.slice(middle)
      // join array (left & right)
      return this.merge(this.mergeSort(left), this.mergeSort(right))
    }
  }
}
</script>

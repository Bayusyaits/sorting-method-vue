<template>
<!-- sort (tab three) -->
  <div id="sort-tab-three">
    <div class="row flex-row">
      <div class="column column-75 section-title no-padding">
          <h1>Insertion Sort</h1>
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
  name: 'SortTabThreeComponent',
  data: () => ({
    listArr: [
      [5, 8, 1, 3, 7, 15],
      [8, 9, 2, 4, 1, 7],
      [11, 6, 8, 7, 3, 5],
      [15, 8, 7, 6, 4, 5],
      [20, 3, 4, 8, 9, 6]
    ], // array list for iteration
    tmpArray: [], // array tmp
    output: [] // show output after selected by user
  }),
  watch: {
    tmpArray: {
      handler(val) {
        // check if number of elements greater than 0
        if (val && val.length > 0) {
          this.output = this.insertionSort(val)
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
    insertionSort(val) {
      /**
       * @param array val
       * comparison sort used for sorting an array.
       */
      let arr = val
      let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let current = arr[i];
            /**
            * The last element of our sorted subarray
            */
            let j = i-1;
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
      return arr;
    }
  }
}
</script>

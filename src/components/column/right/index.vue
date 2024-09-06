<template>
<!-- column right index -->
  <div class="column column-45 border-light" id="column-right">
    <div class="height-100">
      <div class="row no-padding">
        <div class="column bg-grey py-5">
          <h3>Text 1</h3>
        </div><!-- end of column div -->
        <div class="column bg-white py-5">
          <h3>text 2</h3>
        </div><!-- end of column div -->
      </div><!-- end of row div -->
      <div class="row no-padding">
        <div class="column bg-netral column-space py-5">
          <h3>text 3</h3>
        </div><!-- end of column div -->
        <div class="column bg-netral column-space py-5">
          <h3>text 4</h3>
        </div>
        <div class="column bg-netral column-space py-5">
          <h3>text 5</h3>
        </div><!-- end of column div -->
      </div><!-- end of row div -->
      <div class="row no-padding">
        <div class="column border pb-10">
          <div class="row no-padding">
            <div class="column bg-purple">
              <h5>Lorem Ipsum</h5>
            </div><!-- end of column div -->
          </div><!-- end of row div -->
          <div class="row no-padding mb-5">
            <div class="column bg-grey border-custome py-10">
              <h5>Lorem Ipsum</h5>
            </div><!-- end of column div -->
            <div class="column bg-grey border-custome py-10">
              <h5>Lorem Ipsum</h5>
            </div><!-- end of column div -->
          </div><!-- end of row div -->
          <div v-for="(line, key) in lines" :key="key" class="row">
            <div class="column">
              <div class="line-grey space-y"></div>
            </div><!-- end of column div -->
          </div><!-- end of row div -->
        </div><!-- end of row div -->
        <div class="column">
          <div class="row row-vertical height-100">
            <div class="column bg-light_grey">
              <h4 class="text-vertical">Text Lorem</h4>
            </div><!-- end of column div -->
            <div class="column bg-grey">
              <h4 class="text-vertical">Text Lorem</h4>
            </div><!-- end of column div -->
            <div class="column">
              <div class="row bg-light_grey height-50">
                <div class="column">
                  <h4 class="text-vertical">Text Lorem</h4>
                </div><!-- end of column div -->
              </div><!-- end of row div -->
              <div class="row bg-grey height-50">
                <div class="column">
                  <h4 class="text-vertical">Text Lorem</h4>
                </div><!-- end column row div -->
              </div><!-- end of row div -->
            </div><!-- end of column div -->
          </div><!-- end of row div -->
        </div><!-- end of column div -->
      </div><!-- end of row div -->
    </div><!-- end of height-100 div -->
  </div><!-- end of column-right div -->
</template>

<script>
export default {
  name: 'ColumnRightIndexComponent',
  data: () => ({
    lines: [1, 2, 3, 4, 5, 6] // array list lines
  })
}
</script>

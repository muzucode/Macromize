<template>
  <div class="col p-3 shadow" id="cardItem">
    <img class="thumb mb-2" src="https://www.bioworld.com/ext/resources/Stock-images/Money/stock-prices-up.png?1588794938"/>
    <div class="title"><slot name="title"></slot></div>
    <div class="thesubtitle"><slot name="subtitle"></slot></div>
    <div class="therating"><slot name="rating"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Card Item',
  data: () => {
    return {

    }
  },
  props: ['goal']
}
</script>

<style>
.thumb {
  height: 150px;
}
#cardItem {

}

</style>
<template>
  <Carousel :value="cars" :autoplayInterval="3000">
    <template #item="slotProps">
	</template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutComponent",
  data () {
    return {
      value: 0,
      items: ['1', '2', '3', '4', '5'],
    }
  },
});
</script>

<style lang="scss">
.carousel {
  height: 100vh;
}
</style>
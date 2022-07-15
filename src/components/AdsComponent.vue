<template>
  <Carousel :value="ads" :autoplayInterval="3000" :circular="true">
    <template #item="slotProps">
      <div class="ad-item">
        <div class="ad-item-img">
          <img :src="require(`@/assets/images/${slotProps.data.image}`)" :alt="slotProps.data.title" height="100%" width="100%">
        </div>
        <div>
          <div class="ad-title">{{ slotProps.data.title }}</div>
          <div class="ad-details">{{ slotProps.data.details }}</div>
        </div>
      </div>
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdsComponent",
  data() {
    return {
      ads: []
    }
  },
  mounted() {
    // todo: get ads from server
    this.ads = [
      {
        title: '100% Secure and Trusted Cloud',
        details: 'We use the most secure and trusted cloud technologies to store your data.',
        image: '1.jpg',
      },
      {
        title: 'Data Insights and future predections',
        details: 'We enable you to see the data insights and future predictions of your patients records.',
        image: '2.png',
      },
      {
        title: 'Get increased flow and revenue',
        details: 'We help you to get increased flow and revenue by providing you with the best solutions.',
        image: '3.jpg',
      },
    ]
  },
});
</script>

<style lang="scss">
.p-carousel {
  @media  (max-width: 768px) {
    min-height: 300px;
    // margin-top: 50px;
  }

  @media (min-width: 768px) {
    min-height: 100vh;
  } 
}
.p-carousel-next, .p-carousel-prev{ 
  color: transparent !important;
  background-color: transparent !important;
}

.p-carousel-indicators {
  // position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  text-align: center;


  li {
    margin-left: 5px;

    button {
      height: 10px !important;
      width: 10px !important;
      border-radius: 100% !important;
      background-color: #FFF !important;
      opacity: 0.5 !important;
    }

  }

  .p-highlight {
    button {
      opacity: 1 !important;
    }
  }
}

.p-carousel-items-content {
  position: relative;
  overflow: hidden;
  height: 100% !important;
  margin-top: 30px;
}

.p-carousel-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  will-change: transform;
  transform: translate3d(0, 0, 0);
  z-index: 1;
}

.ad-item {
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  border-radius: 10px;

  .ad-title {
    font-size: 24px;
    font-weight: bold;
    margin-top: 5%;
  }

  .ad-details {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .ad-item-img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    img {
      width:  300px !important;
      height: 400px !important;
      object-fit: contain;
    }
  }
}


</style>
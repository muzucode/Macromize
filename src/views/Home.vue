<template>
<div class="container  mt-3 ">
  <MainCard>

    <p class="display-2">{{winMessage}}</p>
    <p class="display-7">{{rand}}</p>
    

  </MainCard>
<!-- rebuild -->
</div>
</template>

<script>
import MainCard from '../components/MainCard.vue';
import AmplifyAPIService from '../services/AmplifyAPIService';

export default {
  name: 'Home',
  data: function () {
    return {
      title: '',
      subtitle: '',
      rarity: '',
      circulation: 0,
      id: '',
      rand: 0,
      winMessage: ''
    }
  },
  components: {
    MainCard
  },
  methods: {
    getReq: function () {
      AmplifyAPIService.getReq();
    },
    getWorks: function (){
      AmplifyAPIService.getWorks();
    },
    generateWork: function (){
      AmplifyAPIService.generateWork();
    },
    generateItem: function() {
      AmplifyAPIService.generateItem();
    },
    setWinMessage: function(rand) {
      // Generate random number
      if(rand >= 0 && rand < 50) {
        this.winMessage = 'Common';
      } else if(rand >= 50 && rand < 70) {
        this.winMessage = 'Uncommon';
      } else if(rand >= 70 && rand < 85) {
        this.winMessage = 'Rare';
      } else if(rand >= 85 && rand < 95) {
        this.winMessage = 'Epic';
      } else if(rand >= 95 && rand <= 100) {
        this.winMessage = 'Legendary';
      } 
    },
    loadWork: function () {
      AmplifyAPIService.loadWork();
    },
    rollRand: function() {
      // Generate random number
      const rand = Math.round(Math.random(1) * 100);
      this.rand = rand;
      this.setWinMessage(rand);
      this.loadWork(rand);
    }
  },
  activated: function() {
    this.rollRand();
  }
}
</script>
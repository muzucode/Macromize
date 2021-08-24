<template>
  <div class="row mb-5" id="cardRow">
    <CardItem>
      <template v-slot:title>{{cards.a.title}}</template>
      <template v-slot:subtitle>{{cards.a.subtitle}}</template>
      <template v-slot:rating>{{cards.a.rating}}</template>
    </CardItem>
    <div class="spaceme"></div>
    <CardItem>
      <template v-slot:title>{{cards.b.title}}</template>
      <template v-slot:subtitle>{{cards.b.subtitle}}</template>
      <template v-slot:rating>{{cards.b.rating}}</template>
    </CardItem>
    <div class="spaceme"></div>
    <CardItem>
      <template v-slot:title>{{cards.c.title}}</template>
      <template v-slot:subtitle>{{cards.c.subtitle}}</template>
      <template v-slot:rating>{{cards.c.rating}}</template>
    </CardItem>
  </div>
</template>

<script>
import CardItem from '../components/CardItem.vue'
export default {
  name: 'Card Item Collection',
  props: {goal: String},
  data: function() {
    return {
      cardgoal: this.goal,
      cards: {
        a: {
          title: '',
          subtitle: '',
          rating: ''
        },
        b: {
          title: '',
          subtitle: '',
          rating: ''
        },
        c: {
          title: '',
          subtitle: '',
          rating: ''
        }
      },  
    }
  },
  watch: {
    goal: function(){
      
    }
  },
  components: {
    CardItem
  },
  methods: {
    // Checks what the goal is and fills content accordingly
    loadCardInfo: function () {
      if(this.cardgoal.includes('Cutting')){
        this.cards.a = {
          title: 'Cutting title',
          subtitle: 'Cutting subtitle',
          rating: 'Cutting rating'
        };        
        this.cards.b = {
          title: 'Cutting title 2',
          subtitle: 'Cutting subtitle 2',
          rating: 'Cutting rating 2'
        };
        this.cards.c = {
          title: 'Cutting title 3',
          subtitle: 'Cutting subtitle 3',
          rating: 'Cutting rating 3'
        };
      } else if(this.cardgoal.includes('Bulking')){
        this.cards.a = {
          title: 'Bulking title',
          subtitle: 'Bulking subtitle',
          rating: 'Bulking rating'
        };        
        this.cards.b = {
          title: 'Bulking title 2',
          subtitle: 'Bulking subtitle 2',
          rating: 'Bulking rating 2'
        };
        this.cards.c = {
          title: 'Bulking title 3',
          subtitle: 'Bulking subtitle 3',
          rating: 'Bulking rating 3'
        };
      } else {
        this.cards.a = {
          title: 'Maintenance title',
          subtitle: 'Maintenance subtitle',
          rating: 'Maintenance rating'
        };        
        this.cards.b = {
          title: 'Maintenance title 2',
          subtitle: 'Maintenance subtitle 2',
          rating: 'Maintenance rating 2'
        };
        this.cards.c = {
          title: 'Maintenance title 3',
          subtitle: 'Maintenance subtitle 3',
          rating: 'Maintenance rating 3'
        };
      }
    }
  },
  created: function() {
    this.loadCardInfo();
  }
}
</script>

<style>

</style>
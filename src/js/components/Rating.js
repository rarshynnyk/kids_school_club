import StarRating from 'vue-star-rating';

const Rating = Vue.component('Rating', {
  props: ['rating'],
  components: {
    StarRating
  },
  template: `
    <div class="rating">
      <span class="rating__text">{{rating.currentValue}}</span>
      <star-rating
        class="rating__stars"
        :border-width="0"
        inactive-color="#b7efb7" 
        active-color="#11ca11"
        :rating="rating.currentValue"
        :star-size="13"
        :read-only="true"
      />
    </div>
  `
});

export default Rating;
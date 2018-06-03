const Favorite = Vue.component('Favorite', {
  props: ['isFavorited'],
  template: `
    <button 
      :class="{'like': true, 'active': isFavorited }" 
      type="button" 
      title="like"
      @click="toogleFavorite"
    >
      <div class="text-hidden">like</div>
    </button>
  `,
  methods: {
    toogleFavorite () {
      this.isFavorited = !this.isFavorited;
    }
  }
});

export default Favorite;
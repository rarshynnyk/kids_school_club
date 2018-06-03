import Favorite from '../components/Favorite';
import Rating from '../components/Rating';

const GridItem = Vue.component('grid-item', {
  props: ['item'],
  components: {
    Favorite,
    Rating
  },
  filters: {
    capitalize: function (value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  template: `
    <article class="card">
      <div class="card__media">
        <img 
          :src="item.coverUrl" 
          :alt="item.title" 
          class="card__img"
        />
      </div>
      <div class="card__content">
        <div class="card__info card__info--short">
            <h1 class="card__title">{{item.title}}</h1>
            <div class="card__rating">
              <rating :rating="item.rating" />
              <span class="card__type">{{item.typesLabel}}</span>
            </div>
            <div class="card__tags">
              <span v-for="(tag, index) in item.tags" :key="index">{{tag | capitalize}}</span>
            </div>
        </div>
        <div class="card__info card__info--extra">
          <ul class="card__contacts">
            <li>
              <span>Weekdays </span><time>{{item.weekdays.start}}—{{item.weekdays.end}}</time>
            </li>
            <li>
              <address>
                <span>{{item.address}}</span>
                <i class="icon-directions"></i>
              </address>
            </li>
            <li>
              <a :href="item.phoneHref">{{item.phone}}</a>
            </li>
          </ul>
        </div>
        <div class="card__footer">
          <div class="row">
            <div class="col-6">
              <span class="price">$\{{item.price}}</span>
              <span>{{item.periods}}</span>
            </div>
            <div class="col-6 text-right">
              <favorite :isFavorited="item.isFavorited" />
            </div>
          </div>
        </div>
      </div>
    </article>
  `
});

export default GridItem;
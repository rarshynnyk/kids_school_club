import GridItem from './GridItem';
import {API_URL} from '../const';

export default () => {

  if (!Vue) return;

  Vue.debug = true;

  new Vue({
      el: '#app',
      data() {
          return {
            isMobileNavVisible: false,
            isBodyVisible: false,
            isSpecialsVisible: true,
            schools: [],
            types: {
              current: 'public',
              options: ['public', 'private']
            },
            tags: ['art', 'music', 'sports', 'dance', 'theater', 'math', 'engineering', 'science'],
            specialsCurrent: [],
            specials: [
              {'value': 'adhd', 'label': 'ADHD'}, 
              {'value': 'asd', 'label': 'ASD'}, 
              {'value': 'asperger', 'label': 'Asperger’s syndrome'}, 
              {'value': 'down syndrome', 'label': 'Down syndrome'}, 
              {'value': 'deaf of hearing', 'label': 'Deaf or hard of hearing'}, 
              {'value': 'disabilities', 'label': 'Physical disabilities'}
            ],
            periods: {
              current: 'weekly',
              options: ['weekly', 'monthly', 'annually']
            },
            days: {
              current: 'weekdays',
              options: ['weekdays', 'weekends', 'all days']
            },
            price: {
              min: 250,
              max: 600,
              tooltip: false,
              width: '100%',
              style: 'padding: 5px 0; margin: 0 0 15px;',
              dotSize: 22,
              height: 4,
              value: [
                300, 500
              ]
            },
            location: {
              max: 5,
              tooltip: false,
              value: 3,
              width: '100%',
              style: 'padding: 5px 0; margin: 0 0 15px;',
              dotSize: 22,
              height: 4
            },
            hours: {
              min: 6,
              max: 22,
              tooltip: false,
              value: [
                8, 17
              ],
              width: '100%',
              style: 'padding: 5px 0; margin: 0 0 15px;',
              dotSize: 22,
              height: 4
            },
            years: {
              min: 0,
              max: 11,
              tooltip: false,
              value: 3,
              width: '100%',
              style: 'padding: 5px 0; margin: 0 0 15px;',
              dotSize: 22,
              height: 4
            },
            filtersApplied: [],
            filteredSchools: []
          };
      },
      components: {
        GridItem,
        'vueSlider': window[ 'vue-slider-component' ]
      },
      methods: {
        fetchData (url) {
            return this.$http.get(url).then(res => {
              if (res.body.schools) {
                  this.schools = res.body.schools;
              }
            });
        },
        setActive (element) {
          if (this.filtersApplied.indexOf(element) > -1) {
            this.filtersApplied.pop(element);
          } else {
            this.filtersApplied.push(element);
          }
        },
        isActive (menuItem) {
          return this.filtersApplied.indexOf(menuItem) > -1;
        },
        toggleNav () {
          this.isMobileNavVisible = !this.isMobileNavVisible;
          const isBodyHidden = document.body.classList.contains('body-hidden');
          if (!isBodyHidden) {
            document.body.classList.add('body-hidden');
          } else {
            document.body.classList.remove('body-hidden');
          }
        },
        specialsToggle () {
          this.isSpecialsVisible = !this.isSpecialsVisible;
        }
      },
      computed: {
        filteredItems: function () {
          return this.schools.filter(item => {            
            return this.filtersApplied.every(filterApplied => {

              if (item.tags.includes(filterApplied)) {
                return item.tags.includes(filterApplied);
              }

              if (item.periods.includes(filterApplied)) {
                return item.periods.includes(filterApplied);
              }
            });
          });
        }
      },
      filters: {
        capitalize: function (value) {
          if (!value) return '';
          value = value.toString();
          return value.charAt(0).toUpperCase() + value.slice(1);
        }
      },
      created () {
        this.fetchData(API_URL);
      }
  });
};
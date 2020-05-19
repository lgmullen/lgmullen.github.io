
var resultView = new Vue({
  el: '#app',
  data: {
    input: " ",
    results: '',
    struct: '',
    artists: '',
    returns: '',
    genres: {},
  },
  methods: {
    submit: function (event) {
      // `this` inside methods points to the Vue instance
      search =  ('https://itunes.apple.com/search?term=' + this.input + "&&origin=*");
      // `event` is the native DOM event
      this.genres = {};
      axios
          .get(search)
          .then(response => 
            (this.results = response.data.results)
            
         )
         .finally(() => {
          for (const key in this.results) {
          if (this.results[key].primaryGenreName in this.genres) {
            this.genres[this.results[key].primaryGenreName] += 1;
          }
          else{
            this.genres[this.results[key].primaryGenreName] = 1;
  
           }      
          }
          this.genres = (Object.keys(this.genres));
          console.log(this.genres);
        }
         
         )

        
          }
    },
     
  mounted() {
  }
})


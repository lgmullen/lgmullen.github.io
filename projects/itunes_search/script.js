
var resultView = new Vue({
  el: '#app',
  data: {
    filter: "All",
    filterKey: "",
    input: " ",
    results: '',
    struct: '',
    artists: '',
    returns: '',
    genres: '',
    searchArtist: '',
    searchSong: '',
    color: '#4675b7',
  },
  methods: {
    submit: function (event) {
      // `this` inside methods points to the Vue instance
     search =  ('https://itunes.apple.com/search?term=' + this.input + "&&origin=*");
     // search = new URL( 'https://itunes.apple.com/search?term=' + this.input + "&&origin=*");
      // `event` is the native DOM event
      console.log(search);

      axios
          .get(search)
          .then(response => 
            (this.results = response.data.results)
            
         )
         .finally(() => {
          if (this.results.length == 0) {
            alert('No results found!')
          }
          this.genres = { 'All': 1
          };
          
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
          console.log(this.results);
          console.log(this.results[0].previewUrl)
         }
         
         )

        
        },
        genius: function () {
          url = new URL( 'https://genius.com/search?q=' + this.searchSong + " " + this.searchArtist);
          console.log(url);
          console.log('genius');
          window.open(url, "_blank"); 
        }
    },
     
  mounted() {
  }
})


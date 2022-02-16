
const app = Vue.createApp({
 /*  template: `
  <h1>Hola Putitos</h1>
  <p> Desde app.js</p>
  
  ` */
  data(){
    return{
      quote: "I'am Batman",
      author: 'Bruce Wayne'
    }
  },
  methods: {
    changeQuote(){
      console.log('Hola mundo')
      this.author = 'Emanuel Piola' 
      this.mayuscula()
    },
    mayuscula(){
      this.quote = this.quote.toUpperCase()
    }
  }
})

app.mount('#myApp')
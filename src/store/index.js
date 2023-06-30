import { createStore } from 'vuex'

export default createStore({
  state: {
    products:null,
    product:null,
  },
 
  mutations: {
    setProducts:(state, products) => {
      state.products = products;

    },
    setProduct:(state,product) => {
      state.product =  product
    }
  },
  actions: {
    getProducts: async (context) => {
      fetch("https://li2a26.github.io/data/db.json")
      .then((res) => res.json())
      .then((results) => context.commit("setProducts", results.products))
    },
    getProduct: async (context, id) => {
      fetch("https://li2a26.github.io/data/db.json" + id)
      .then ((res) => res.json())
      .then((product) => context.commit("setProduct", product))
    },
  },
 
});

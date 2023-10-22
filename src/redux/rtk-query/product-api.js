import { api } from "./settings";


export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // тут функция получает всех продукты 
    // поумолчание builder.query get запрос будет запрос 
    // если хочешь другой запрос например post или put patch
    // тогда builder.mutation будет там определим запросы
    getAllProduct: builder.query({
      query: () => ({
        // endpoints например роутер апишка
        url: 'products'
      })
    }),

    // второй запрос продукт деталь запрос получаем продук от id
    getByIdProduct: builder.query({

      // id получаем от body или view или от компонента продукitem
      query: (id) => ({
        // endpoints например роутер апишка
        url: `products/${id}`
      })
    }),

    // поиск запрос
    getSearchProducts: builder.query({
      // text получаем от inputa
      query: (text) => ({
        // endpoints например роутер апишка
        url: `products/search?q=${text}`
      })
    }),

    // елси хочещь пост запрос вот пример
    addPostProduct: builder.mutation({
      query: (newProduct) => (
        {
        url: 'products/add',
        method: 'POST',
        body: newProduct.title
      })
    })
  })
})

export const { endpoints: { getAllProduct, getByIdProduct, getSearchProducts, addPostProduct } } = productApi;
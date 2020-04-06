const baseApiUrl = process.env.VUE_APP_API_BASE_URL

export default {
  getCategories() {
    return fetch(`${baseApiUrl}/api/collections/categories/entries`)
      .then(r => r.json())
  },

  showCategory(categorySlug) {
    return fetch(`${baseApiUrl}/api/collections/categories/entries?filter[slug:equals]=${categorySlug}`)
      .then(r => r.json())
      .then(({data}) => {
        if (data.length !== 1) {
          return null
        }
        return data[0]
      })
  },
}

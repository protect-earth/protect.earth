const baseApiUrl = process.env.VUE_APP_API_BASE_URL

export default {
  getCategories() {
    return fetch(`${baseApiUrl}/api/collections/categories/entries`)
      .then(r => r.json())
  },
}

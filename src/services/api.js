const baseApiUrl = process.env.VUE_APP_API_BASE_URL

export default {

  getActionsWithCategory(categoryId) {
    return fetch(`${baseApiUrl}/api/collections/actions/entries?filter[categories:contains]=${categoryId}`)
      .then(r => r.json())
  },

  /**
   * Gets the categories listing.
   *
   * @returns {Promise<any>}
   */
  getCategories() {
    return fetch(`${baseApiUrl}/api/collections/categories/entries`)
      .then(r => r.json())
  },

  /**
   * Gets a category entry, for a given slug.
   *
   * @param categorySlug
   * @returns {Promise<any>}
   */
  showCategoryWithSlug(categorySlug) {
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

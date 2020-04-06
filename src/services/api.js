const baseApiUrl = process.env.VUE_APP_API_BASE_URL

export default {

  /**
   * Get actions that contains provided category Id.
   *
   * @param categoryId
   * @returns {Promise<any>}
   */
  getActionsWithCategory(categoryId) {

    const queryParams = `filter[categories:contains]=${categoryId}&filter[status:equals]=published`

    return fetch(`${baseApiUrl}/api/collections/actions/entries?${queryParams}`)
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
   * Gets the specified amount of recent actions.
   *
   * @param amount
   * @returns {Promise<any>}
   */
  getRecentActions(amount = 3) {

    const queryParams = `filter[status:equals]=published&limit=${amount}&sort=-date`

    return fetch(`${baseApiUrl}/api/collections/actions/entries?${queryParams}`)
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

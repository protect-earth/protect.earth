
export default {

  /*
  * Some intro texts were just too big. This way, we can control its size.
  * Please provide the top limit character number, and the word amount
  * to display, if the referenced limit is topped out.
  */
  introText(text) {

    const topLimit = 100
    const wordAmountToDisplay = 15

    // Under the top limit, so display it all.
    if (text.length < topLimit) {
      return text
    }

    // Just outputs `wordAmountToDisplay`.
    return text.split(' ').splice(0, wordAmountToDisplay).join(' ') + '...'
  }

}

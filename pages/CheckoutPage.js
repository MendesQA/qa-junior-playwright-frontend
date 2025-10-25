export class CheckoutPage {
  
  constructor(page) {
    this.page = page
    this.firstNameInput = page.locator('[data-test="firstName"]')
    this.lastNameInput = page.locator('[data-test="lastName"]')
    this.postalCodeInput = page.locator("[name='postalCode']")
    this.continueButton = page.locator('[data-test="continue"]')
    this.finishButton = page.locator('[data-test="finish"]')
    this.checkoutCompleteTitle = page.locator("[data-test='complete-header']")
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName)
    await this.lastNameInput.fill(lastName)
    await this.postalCodeInput.fill(postalCode)
  }

  async continueCheckout() {
    await this.continueButton.click()
  }

  async finishCheckout() {
    await this.finishButton.click()
  }

  async getCheckoutCompleteTitle() {
    return (await this.checkoutCompleteTitle.textContent()).trim()
  }
}

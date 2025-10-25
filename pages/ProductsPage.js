export class ProductsPage {
  constructor(page) {
    this.page = page
    this.addBackpackButton = page.locator("[name='add-to-cart-sauce-labs-backpack']")
    this.addBikeLightButton = page.locator("[name='add-to-cart-sauce-labs-bike-light']")
    this.cartLink = page.locator('[data-test="shopping-cart-link"]')
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click()
  }

  async addBikeLightToCart() {
    await this.addBikeLightButton.click()
  }

  async goToCart() {
    await this.cartLink.click()
  }
}

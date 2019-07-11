describe('Counter', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/#/counter');
  });

  it('increment', async () => {
    let result = await page.$eval('[data-test="result"]', item => {
      return item.textContent;
    });

    await expect(result).toBe('0');

    await page.click('[data-test="increment"]');
    result = await page.$eval('[data-test="result"]', item => {
      return item.textContent;
    });

    await expect(result).toBe('1');
  });
});

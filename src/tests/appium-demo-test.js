import { Selector } from 'testcafe';

fixture `TestCafe & Appium demo`
    .page('http://automationpractice.com/index.php')

test('Go to main page and search dress', async t =>{
    let seatchInput = Selector('#search_query_top')
    let searchButton = Selector('button').withAttribute('name', 'submit_search')
    let searchedProduct = Selector('.lighter')

    await t
      .typeText(seatchInput, 'dress')
      .click(searchButton)
      .expect(searchedProduct.innerText).eql('"DRESS"')
})
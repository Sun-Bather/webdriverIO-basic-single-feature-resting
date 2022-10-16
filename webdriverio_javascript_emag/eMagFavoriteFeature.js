const { convertPackageHashToObject } = require("@wdio/cli/build/utils");

describe('Testing the "Adauga la favorite" feature of Emag.ro', () => {

    it('Should have the correct page title', async() => {
        await browser.url('https://www.emag.ro');
        await expect(browser).toHaveTitle('eMAG.ro - Căutarea nu se oprește niciodată');

    });

    it('Should display correctly', async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
        
    });
    
    it('Should open eMag Genius page', async() => {
        const geniusButton = await $('[title ="Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('Genius: livrare gratuită și oferte exclusive pe eMAG, Tazz, Fashion Days și Freshful - eMAG.ro');

    });

    it('Should have a working search', async() => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.btn.btn-default.searchbox-submit-button');
        
        await searchBox.setValue('Tricou polo');
        await searchButton.click();

        await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');

    });
    
    it('Should open item page', async() => {
        const addItemOne = await $('[data-offer-id="9441175"]');
        await addItemOne.click();

        await expect(browser).toHaveTitle('Champion, Tricou polo in bumbac pique, Negru, L - eMAG.ro');

    });

    it('Should close the promo pop-up', async() => {
        const closeOffer = await $('button.close');
        await closeOffer.click();

    });

    it('Should add item to favorite', async() => {
        const addToFav = await $('button.add-to-favorites.btn.btn-xl.btn-default.btn-icon.btn-block.gtm_t95ovv');
        await addToFav.click();

    });

    it('Should check favorites', async() => {
        const clickFav = await $('#my_wishlist');
        await clickFav.click();

    });

    it('Should add item from favorites to cart', async() => {
        const favToCart = await $('//*[@id="list-of-favorites"]/div/div/div[2]/div[2]/div[8]/div[1]/form/button');
        await favToCart.click();

    });

    it('Should remove item from favorites', async() => {
        const removeFromFavorite = await $('//*[@id="list-of-favorites"]/div/div/div[2]/div[2]/div[8]/div[2]/button');
        await removeFromFavorite.click();
        await browser.pause(3000);

    });

});
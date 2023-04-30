import { ProductElementsNotInStock } from "./productsNotInStock.elements";

export class ProductMethodsNotInStock{
    addItemToBasket(item: string){
        ProductElementsNotInStock.ElementNotInStock.getBtnSearch().click();
        ProductElementsNotInStock.ElementNotInStock.getTxtSearch().type(item);
        ProductElementsNotInStock.ElementNotInStock.getTxtSearch().type('{enter}');
        ProductElementsNotInStock.ElementNotInStock.getBtnAddToBasket().click();
    }
    verifyItemAddedToBasket(numAdded: string){
        ProductElementsNotInStock.ElementNotInStock.getLblNotification().should('have.text', numAdded)
    }
}
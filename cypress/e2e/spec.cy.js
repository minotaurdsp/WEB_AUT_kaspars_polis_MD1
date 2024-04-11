
import SelectableBox from "../pageObjects/SelectableBox.page"

describe('template spec', () => {

  context("Select and list Scenarijs", () => {
    
    // open page
    beforeEach(() => {
      SelectableBox.visit();
    })

    // do something
    it('passes', () => {
      SelectableBox.clickGridButton.click();

      // “Two”, “Four”, “Six”, “Eight”
      SelectableBox.clickGridButtonTwo.click();
      SelectableBox.clickGridButtonFour.click();
      SelectableBox.clickGridButtonSix.click();
      SelectableBox.clickGridButtonEight.click();

      // d - Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectableBox.clickGridButtonTwo.should('be.visible');
      SelectableBox.clickGridButtonFour.should('be.visible');
      SelectableBox.clickGridButtonSix.should('be.visible');
      SelectableBox.clickGridButtonEight.should('be.visible');
      
      
      // e - Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectableBox.clickGridButtonOne.should('not.be.selected');
      SelectableBox.clickGridButtonThree.should('not.be.selected');
      SelectableBox.clickGridButtonFive.should('not.be.selected');
      SelectableBox.clickGridButtonSeven.should('not.be.selected');
      SelectableBox.clickGridButtonNine.should('not.be.selected');

    })

  })
  
})
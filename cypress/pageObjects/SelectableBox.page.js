import BasePage from "./base.page";

class SelectableBox extends BasePage {
  static get url() {
    return "/selectable";
  }

  // b. Click “Grid”
  static get clickGridButton() {
    return cy.get("#demo-tab-grid");
  }

  // c - Click - “Two”, “Four”, “Six”, “Eight”
  static get clickGridButtonTwo() {
    return cy.get("#row1 > li:nth-child(2)");
  } 
  static get clickGridButtonFour() {
    return cy.get("#row2 > li:nth-child(1)");
  }
  static get clickGridButtonSix() {
    return cy.get("#row2 > li:nth-child(3)");
  }
  static get clickGridButtonEight() {
    return cy.get("#row3 > li:nth-child(2)");
  }

  // e - Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
  static get clickGridButtonOne() {
    return cy.get("#row1 > li:nth-child(1)");
  } 
  static get clickGridButtonThree() {
    return cy.get("#row1 > li:nth-child(3)");
  } 
  static get clickGridButtonFive() {
    return cy.get("#row2 > li:nth-child(2)");
  } 
  static get clickGridButtonSeven() {
    return cy.get("#row3 > li:nth-child(1)");
  } 
  static get clickGridButtonNine() {
    return cy.get("#row3 > li:nth-child(3)");
  } 

  



}

export default SelectableBox;
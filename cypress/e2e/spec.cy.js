/// <reference types="cypress" />


import { randomgenaratefirstname,randomgenaratelastname,randomgenarateemailID } from '../commonutils/randomgenerator'
import * as homepage from '../pages/createaccount'
import * as searchpage from '../pages/searchpage'

describe('Register in pearson application', () => {

  beforeEach(()=>{
    cy.viewport(900, 550)
    cy.fixture('createaccount.json').then((inputdata)=>{
      cy.log(inputdata.pearson_url)
      cy.visit(inputdata.pearson_url)
    })
    cy.wait(10000)
    cy.screenshot({log: true})
    cy.get(homepage.btn_allow_all_cookie).click()
  })

  it.skip('Create an account in pearson portal', () => {
    cy.get('.userNav__button span').click()
    cy.wait(1000)
    cy.get(homepage.edt_firstname).scrollIntoView().should('be.visible')
    cy.get(homepage.edt_firstname).type(randomgenaratefirstname())
    cy.get(homepage.edt_lastname).type(randomgenaratelastname())
    cy.get(homepage.edt_emailid).type(`${randomgenarateemailID(7)}@pearson.com`)
    cy.get(homepage.edt_password).type('Password@1', { log: false })
    cy.get(homepage.chk_accept_terms).click({force: true})
    cy.get(homepage.chk_marketingopt).click()
    cy.get(homepage.btn_create_account).click()
    cy.wait(3000)
    cy.get(homepage.btn_successful_login).should('not.contain.text','Sign in')
  })

  it.skip('Create an account in pearson portal with existing emailID', () => {
    cy.get('.userNav__button span').click()
    cy.wait(1000)
    cy.get(homepage.edt_firstname).scrollIntoView().should('be.visible')
    cy.get(homepage.edt_firstname).type(randomgenaratefirstname())
    cy.get(homepage.edt_lastname).type(randomgenaratelastname())
    cy.fixture('createaccount.json').then((inputdata)=>{
      cy.get(homepage.edt_emailid).type(inputdata.existing_email)
    })
    cy.get(homepage.edt_password).type('Password@1', { log: false })
    cy.get(homepage.chk_accept_terms).click({force: true})
    cy.get(homepage.chk_marketingopt).click()
    cy.get(homepage.btn_create_account).click()
    cy.get(homepage.btn_successful_login).should('be.visible')
    cy.get(homepage.lbl_error_msg).then(($errormessage)=>{
      expect($errormessage.text()).to.contain('The username you have entered is already registered, please choose another one or reset your password to sign in.')
    })
  })

  it('Search for titles', () => {
    cy.get(searchpage.icn_search).click()
    cy.get(searchpage.edt_search_text).type('Business & Economics{Enter}')
    cy.wait(3000)
    cy.get(`${searchpage.lbl_search_count} strong`).should('have.text','1 - 25')
    cy.get(searchpage.lbl_search_count).should('contain.text',' results')
  }) 

  it.skip('Select first item from title searched ', () => {
    cy.get(searchpage.icn_search).click()
    cy.fixture('createaccount.json').then((inputdata)=>{
      cy.get(searchpage.edt_search_text).type(`${inputdata.search_text}{Enter}`)
    })
    cy.wait(2000)
    cy.get(searchpage.lst_firstitem_in_search).then(($productname)=>{
      selectedproduct = $productname.text()
      cy.get(searchpage.lst_firstitem_in_search).click()
      cy.wait(2000)
      cy.get(searchpage.lbl_page_heading).then(($producttitle)=>{
        cy.log($producttitle.text())
        expect($producttitle.text()).to.contain(selectedproduct)
      })
    })
})
})

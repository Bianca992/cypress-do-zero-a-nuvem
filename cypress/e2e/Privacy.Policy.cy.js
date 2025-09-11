 it('testa a página da política de privacidade de forma independente', () =>{
 cy.visit('./src/privacy.html') //abre diretamente a página de política de privacidade

 cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible') //procura o título da página
 .should('be.visible') //verifica se o título está visível
  })
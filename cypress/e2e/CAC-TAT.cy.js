describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => { //(cy.title) Pega o título da aba do navegador da página carregada
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')//(.should) Verifica se o título é exatamente igual ao pesquisado
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {  // define o teste.
    cy.get('#firstName').type('Bianca') // Preenche o campo
    cy.get('#lastName').type('Netto Martins') // Preenche o campo
    cy.get('#email').type('nettomartinsb@gmail.com') // Preenche o campo
    cy.get('#phone').type('51999876617') // Preenche o campo
    cy.get('#open-text-area').type('Olá, Bianca! Que bom que você chegou até aqui.') // Preenche o campo
    cy.contains('button','Enviar').click() // Clica no botão "Enviar" para tentar submeter o formulário
    cy.get('.success').should('be.visible') // Verifica se a mensagem de sucesso
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {  // define o teste.
    cy.get('#firstName').type('Bianca') // Preenche o campo
    cy.get('#lastName').type('Netto Martins') // Preenche o campo
    cy.get('#email').type('nettomartinsb@gmail,com') // Preenche o campo
    cy.get('#phone').type('51999876617') // Preenche o campo
    cy.get('#open-text-area').type('Teste.') // Preenche o campo
    cy.contains('button','Enviar').click()  // Clica no botão "Enviar" para tentar submeter o formulário
    cy.get('.error').should('be.visible') // Verifica se a mensagem de erro
  })

  it('campo telefone continua vazio quando não preenchido com valor numérico', () => {  // define o teste.
    cy.get('#phone') // Seleciona o campo de telefone
      .type('abcde') // Tenta digitar letras no campo ("abcde")
      .should('have.value', '') // Verifica se o campo continua vazio (não aceitou as letras digitadas)
  })

  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Bianca') // Preenche o campo
    cy.get('#lastName').type('Netto Martins') // Preenche o campo
    cy.get('#email').type('nettomartinsb@gmail,com') // Preenche o campo
    cy.get('#open-text-area').type('Teste.') // Preenche o campo
    cy.get('#phone-checkbox').check() // Marca o checkbox que torna o campo de telefone obrigatório
    cy.contains('button','Enviar').click() // Clica no botão "Enviar" para submeter o formulário
    cy.get('.error').should('be.visible') // Verifica se a mensagem de erro
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {  // define o teste.
    cy.get('#firstName') // Seleciona o campo de "Primeiro Nome"
      .type('Bianca') // Digita o texto "Bianca" dentro do campo
      .should('have.value', 'Bianca') // Verifica se o valor digitado realmente está no campo
      .clear() // Limpa o campo, removendo o que foi digitado
      .should('have.value', '') // Verifica novamente, agora esperando que o campo esteja vazio
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {  // define o teste.
    cy.get('button[type="submit"]').click() // Localiza o botão de submit do formulário e clica nele sem preencher nenhum campo
    cy.get('.error').should('be.visible') // Verifica se a mensagem de erro (elemento com classe ".error") está visível na tela
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {  // define o teste.
    const data ={ // Cria um objeto chamado "data" que armazena os dados que serão preenchidos no formulário
      firstName:'Bianca',
      lastName:'Netto Martins',
      email:'bmartins@gvdasa.com.br',
      text:'Teste.'
    }
    cy.fillMandatoryFieldsAndSubmit(data) // Esse comando preenche todos os campos obrigatórios com os valores do objeto e clica no botão de enviar
    cy.get('.success').should('be.visible') // Verifica se a mensagem de sucesso
  })

  it('seleciona um produto (YouTube) por seu texto',() => { // define o teste.
  cy.get('#product') // valor copiado da imagem
  .select('youtube') // select do campo escolhido no caso a opção era youtube
  .should('have.value', 'youtube') // verificação
  }) 


  it('seleciona um produto (Mentoria) por seu valor (value)',()=>{ // define o teste.
  cy.get('#product') // valor copiado da imagem 
  .select('mentoria') // select do campo escolhido no caso a opção era mentoria
  .should('have.value', 'mentoria') // verificação
    
  })

  it('seleciona um produto (Blog) por seu índice', ()=>{ // define o teste.
  cy.get('#product') // valor copiado da imagem
  .select('blog') // select do campo escolhido no caso a opção era blog
  .should('have.value', 'blog') // verificação
  })

  it('marca o tipo de atendimento "Feedback"',() => {  //define o teste.
  cy.get('input[type="radio"][value="feedback"]') //pega o botão de rádio “Feedback”.
    .check() // marca (seleciona) esse botão.
  })

  it('marca cada tipo de atendimento', ()=>{ //define o teste.
  cy.get('input[type="radio"]')  //pega todos os botões de rádio da página.
    .each(typeOfservice  =>{ //percorre cada botão de rádio.
      cy.wrap(typeOfservice) //transforma o botão atual em um objeto do Cypress para poder usar comandos nele.
      .check() //marca o botão atual.
      .should('be.checked') //verifica se o botão ficou realmente marcado.

    })
  })

  it('marca ambos checkboxes, depois desmarca o último',()=>{
  cy.get('input[type="checkbox"]') //pega todos os checkboxes da página
  .check() // marca todos os checkboxes
  .should('be.checked') // verifica se todos ficaram marcados
  .last() // pega o último checkbox
  .uncheck() // desmarca o último
  .should('not.be.checked') // verifica se o último foi desmarcado
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique',()=>{
 cy.contains ('a','Política de Privacidade') // pega o link com o texto "Política de Privacidade"
 .should('have.attr','href','privacy.html') // verifica se o link aponta para 'privacy.html'
 .and('have.attr','target','_blank') // verifica se o link abre em outra aba (target="_blank")
})
    
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link',() =>{
  cy.contains('a','Política de Privacidade') //pega o link com o texto "Política de Privacidade"
  .invoke ('removeAttr','target') //remove o atributo target="_blank" para abrir na mesma aba
  .click() // clica no link


  cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible') //busca o título da página aberta
  
  })




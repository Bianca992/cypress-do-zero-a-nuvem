# 🚀 Projeto de Teste Automatizado – Cypress

## 📌 Sobre o Projeto
Este projeto foi desenvolvido como parte do meu aprendizado em automação de testes com **Cypress**, com o objetivo de automatizar testes de funcionalidades web, garantindo que os elementos e fluxos de uma aplicação funcionem corretamente.

---

## 🎯 Objetivos de Aprendizado
Durante o desenvolvimento deste projeto, aprendi a:

- ⚙️ Configurar um projeto Cypress do zero
- 🌐 Visitar páginas locais e remotas
- 🖱️ Interagir com os elementos mais comuns encontrados em aplicações web
- 📤 Testar upload de arquivos
- ✅ Realizar diversas verificações de resultados esperados
- 🔧 Criar comandos customizados para reutilização de código
- 🔗 Lidar com links que abrem em outra aba do navegador
- 📱 Executar testes simulando as dimensões de dispositivos móveis
- 🧩 Resolver problemas de diferentes formas, explorando a API do Cypress
- 📝 Criar uma documentação mínima para testes automatizados
- 🔄 Executar testes em um workflow de integração contínua sempre que mudanças ocorrem no código
- ☁️ Integrar o workflow com o **Cypress Cloud**, gerenciando testes na nuvem

---

## 📁 Estrutura do Projeto


cypress/
 ├─ e2e/           # Testes automatizados
 ├─ fixtures/      # Arquivos de teste (ex: dados de entrada)
 ├─ support/       # Comandos customizados e configurações globais
cypress.config.js  # Configurações do Cypress



---

## 🧪 Exemplos de Testes

### 1️⃣ Testes de Formulário
```javascript
Verifica o título da aplicação
it('verifica o título da aplicação', () => {
  cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
})


Preenche os campos obrigatórios e envia o formulário – mostra manipulação de inputs e envio:
it('preenche os campos obrigatórios e envia o formulário', () => {
  cy.get('#firstName').type('Bianca')
  cy.get('#lastName').type('Netto Martins')
  cy.get('#email').type('nettomartinsb@gmail.com')
  cy.get('#phone').type('51999876617')
  cy.get('#open-text-area').type('Olá, Bianca! Que bom que você chegou até aqui.')
  cy.contains('button','Enviar').click()
  cy.get('.success').should('be.visible')
})


Exibe mensagem de erro com email inválido – validação de erro:
it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
  cy.get('#firstName').type('Bianca')
  cy.get('#lastName').type('Netto Martins')
  cy.get('#email').type('nettomartinsb@gmail,com')
  cy.get('#phone').type('51999876617')
  cy.get('#open-text-area').type('Teste.')
  cy.contains('button','Enviar').click()
  cy.get('.error').should('be.visible')
})

```

## ✅ **Boas Práticas Aplicadas**

- Uso de seletores precisos (id, class, atributo) para evitar falhas.
- Validação após cada ação (should, and) para garantir confiabilidade.
- Testes independentes e organizados para facilitar manutenção.

---

## 🏁 Conclusão do Curso

Este projeto consolidou meu conhecimento em Cypress e me permitiu aplicar técnicas de automação de testes, integrando aprendizado teórico e prático.  
Além disso, desenvolvi habilidades em documentação, execução de testes em CI/CD e exploração da API do Cypress.

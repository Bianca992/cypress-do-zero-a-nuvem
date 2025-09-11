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

### 1️⃣ Marcar um tipo de atendimento
```javascript
cy.get('input[type="radio"][value="feedback"]').check()


Marcar todos os tipos de atendimento
cy.get('input[type="radio"]').each(typeOfservice => {
  cy.wrap(typeOfservice).check().should('be.checked')
})

Política de Privacidade (abrindo na mesma aba)
cy.contains('a','Política de Privacidade')
  .invoke('removeAttr','target')
  .click()
cy.contains('h1','CAC TAT - Política de Privacidade').should('be.visible')```**

```

## ✅ **Boas Práticas Aplicadas**

- Uso de seletores precisos (id, class, atributo) para evitar falhas.
- Validação após cada ação (should, and) para garantir confiabilidade.
- Testes independentes e organizados para facilitar manutenção.

---

## 🏁 Conclusão do Curso

Este projeto consolidou meu conhecimento em Cypress e me permitiu aplicar técnicas de automação de testes, integrando aprendizado teórico e prático.  
Além disso, desenvolvi habilidades em documentação, execução de testes em CI/CD e exploração da API do Cypress.

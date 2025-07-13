import PaginaCadastro from './pages/pagina_cadastro';
Cypress.Commands.add('cadastrarUsuario', () => {
    PaginaCadastro.cadastrar();
    
});
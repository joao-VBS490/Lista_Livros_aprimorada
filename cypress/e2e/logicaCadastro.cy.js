import { faker } from '@faker-js/faker';


describe('acessando a pagina do toolsQA' , () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/login');
        cy.viewport(1280, 720);
    });

    it('criando um usuário', () => {
        cy.task('usuarioFicticio').then((usuario) => {
            cy.cadastrarUsuario();
            cy.log(`Usuário criado: ${usuario.username}`);
        });
        
    });
});
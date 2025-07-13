import { faker } from '@faker-js/faker';

// describe('acessando a pagina do toolsQA' , () => {
//     beforeEach(() => {
//         cy.visit('https://demoqa.com/login');
//         cy.viewport(1280, 720);
//     });

//     it('criando um usuário', () => {
//         cy.get('#newUser').click();
//     });
// });

class Paginacadastro {
    acessar() {
        cy.visit('https://demoqa.com/register');
    }
    preencheNome(){
        cy.get('#firstname')
            .type(faker.person.firstName());
    }
    preencheSobrenome() {
        cy.get('#lastname')
            .type(faker.person.lastName());
    }
    preencheUsuario() {
        cy.get('#userName')
            .type(faker.internet.username());
    }
    preencheSenha() {
        const senha = faker.internet.password({
            length: 10,
            memorable: true,
            pattern: /[A-Z]{1}[a-z]{4}[0-9]{2}[@!$]/
        });
        cy.get('#password').type(senha);
    }
    clicarRegistrar() {
        cy.get('#register')
            .click();
    }
    cadastrar(){
        this.acessar();
        this.preencheNome();
        this.preencheSobrenome();
        this.preencheUsuario();
        this.preencheSenha();
        this.clicarRegistrar();
    }
}
export default new Paginacadastro();

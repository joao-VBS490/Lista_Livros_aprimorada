
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
import './commands'
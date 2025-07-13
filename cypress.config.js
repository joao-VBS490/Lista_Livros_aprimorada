const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        usuarioFicticio() {
          const usuario = {
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            username: faker.internet.username(),
            password: faker.internet.password(),
          }
          const filepath = path.join(__dirname, 'cypress', 'fixtures', 'usuarioFicticio.json');
          fs.writeFileSync(filepath, JSON.stringify(usuario, null, 2), 'utf-8');
          return usuario;
        },
        salvarUsuarioFicticio(usuario) {
          const filepath = path.join(__dirname, 'cypress', 'fixtures', 'usuarioFicticio.json');
          fs.writeFileSync(filepath, JSON.stringify(usuario, null, 2),'utf-8');
          return null;
        }
      });
    },
  },
});

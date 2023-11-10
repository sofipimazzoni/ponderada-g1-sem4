const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
  });

async function main() {
  const { PrismaClient } = require('@prisma/client');

  const prisma = new PrismaClient();
  
  const seedDatabase = async () => {
    try {
      for (let i = 1; i <= 1000; i++) {
        const username = `usuário ${i}`;
        await prisma.model.create({
          data: {
            user: {
              create: {
                name: username,
              },
            },
          },
        });
      }
  
      console.log('Dados inseridos com sucesso!');
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
    } finally {
      await prisma.$disconnect();
    }
  };
  
  seedDatabase();
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const books = await prisma.book.findMany({
    where: { title: 'Artificial Intelligence and Deep Learning for MATLAB' }
  });

  if (books.length > 0) {
    for (const book of books) {
      await prisma.book.update({
        where: { id: book.id },
        data: {
          author: 'Türker Tuncer, Şengül Doğan, Ömer Faruk Göktaş, Yusuf Barut, Sümeyra Çanakça, İbrahim Yiğit Atalmış',
          publishYear: ''
        }
      });
      console.log(`Updated book ${book.id}`);
    }
  } else {
    console.log('Book not found in DB');
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });

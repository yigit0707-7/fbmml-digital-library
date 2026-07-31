const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create Category
  const category = await prisma.category.upsert({
    where: { name: 'MATLAB ve Programlama' },
    update: {},
    create: { name: 'MATLAB ve Programlama' },
  })
  console.log('Category created:', category.name)

  // Check if book exists
  const existingBook = await prisma.book.findFirst({
    where: { title: 'Artificial Intelligence and Deep Learning for MATLAB' }
  })

  const bookData = {
    title: 'Artificial Intelligence and Deep Learning for MATLAB',
    author: 'Türker Tuncer, Şengül Doğan, Ömer Faruk Göktaş, Yusuf Barut, Sümeyra Çanakça, İbrahim Yiğit Atalmış',
    description: 'MATLAB ortamında yapay zekâ ve derin öğrenme uygulamalarına odaklanan akademik ve uygulamalı kaynak.',
    publishYear: '',
    tags: 'matlab, programlama, mühendislik',
    coverUrl: '/covers/Matlab_book-cover.png',
    pdfUrl: '/books/Matlab_book.pdf',
    categoryId: category.id,
  }

  let book
  if (existingBook) {
    book = await prisma.book.update({
      where: { id: existingBook.id },
      data: bookData
    })
    console.log('Book updated:', book.title)
  } else {
    book = await prisma.book.create({
      data: bookData
    })
    console.log('Book created:', book.title)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

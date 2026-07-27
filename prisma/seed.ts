import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding data...')
  
  // Create category
  const category = await prisma.category.upsert({
    where: { name: 'MATLAB ve Programlama' },
    update: {},
    create: {
      name: 'MATLAB ve Programlama',
    },
  })

  // Create book
  await prisma.book.create({
    data: {
      title: 'Matlab_book',
      author: 'Bilinmeyen Yazar',
      description: 'MATLAB programlama ve mühendislik uygulamaları.',
      publishYear: '2023',
      tags: 'matlab, programlama, mühendislik',
      pdfUrl: '/uploads/Matlab_book.pdf',
      categoryId: category.id,
    }
  })

  // Create Team Members
  const team = [
    {
      name: 'Prof. Dr. Şengül Doğan',
      title: 'Liderimiz / Laboratuvar Lideri',
      role: 'Lider',
      description: 'Fırat Brain Mind Machine Lab lideri ve kurucusu.',
      orderIndex: 1
    },
    {
      name: 'Prof. Dr. Türker Tuncer',
      title: 'Akademik Ekip Üyesi',
      role: 'Akademisyen',
      description: 'Yapay zeka ve sinyal işleme uzmanı.',
      orderIndex: 2
    },
    {
      name: 'Prof. Dr. Mehmet Bayğın',
      title: 'Akademik Ekip Üyesi',
      role: 'Akademisyen',
      description: 'Derin öğrenme ve bilgisayarlı görü uzmanı.',
      orderIndex: 3
    },
    {
      name: 'Ömer Faruk Göktaş',
      title: 'Araştırma Ekibi Üyesi',
      role: 'Araştırmacı',
      description: 'Makine öğrenmesi ve veri bilimi araştırmacısı.',
      orderIndex: 4
    }
  ]

  for (const member of team) {
    await prisma.teamMember.create({ data: member })
  }

  console.log('Seeding complete!')
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

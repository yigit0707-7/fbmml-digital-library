import { prisma } from './src/lib/prisma.ts';
async function main() {
  await prisma.book.updateMany({ data: { pdfUrl: '/books/Matlab_book.pdf' } });
  console.log('Updated db');
}
main();

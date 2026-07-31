import { z } from 'zod'

export const bookSchema = z.object({
  title: z.string().min(1, 'Başlık zorunludur').max(200),
  author: z.string().min(1, 'Yazar zorunludur').max(200),
  categoryId: z.string().optional(),
  newCategory: z.string().optional(), // Used during creation
  description: z.string().nullable().optional(),
  publishYear: z.string().nullable().optional(),
  tags: z.string().nullable().optional(),
  pdfUrl: z.string().url('Geçerli bir URL olmalıdır').min(1, 'PDF zorunludur'),
  coverUrl: z.string().url('Geçerli bir URL olmalıdır').nullable().optional().or(z.literal('')),
})

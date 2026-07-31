import bcrypt from 'bcryptjs'

const password = process.argv[2]

if (!password) {
  console.error('Lütfen bir şifre sağlayın. Örnek: node scripts/generate-admin-hash.mjs "GucluSifre"')
  process.exit(1)
}

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(password, salt)

console.log(hash)

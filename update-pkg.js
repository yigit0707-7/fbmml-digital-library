const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
pkg.prisma = { seed: 'ts-node --compiler-options {"module":"CommonJS"} prisma/seed.ts' };
pkg.scripts = { ...pkg.scripts, 'db:seed': 'prisma db seed' };
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

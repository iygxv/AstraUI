if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(`This repository requires using pnpm as the package manager `)
  process.exit(1)
}
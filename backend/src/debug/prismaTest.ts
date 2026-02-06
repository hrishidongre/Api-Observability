import { prisma } from "../prisma/client.js"; 

async function main() {
  const r = await prisma.request.findMany();
  console.log(r);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });

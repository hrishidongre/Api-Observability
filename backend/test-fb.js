import { prisma } from "./src/db/prisma.js";

async function test() {
  try {
    const result = await prisma.$queryRaw`
      SELECT 1 AS ok;
    `;
    console.log("DB connected:", result);
  } catch (err) {
    console.error("DB connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

test();

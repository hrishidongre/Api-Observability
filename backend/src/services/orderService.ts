// import { trace, SpanStatusCode } from "@opentelemetry/api";
// import {prisma} from "../prisma/client.ts";

// const tracer = trace.getTracer("user-service");

// export async function getUserById(id: string) {
//   return tracer.startActiveSpan("get-user-by-id", async (span) => {
//     try {
//       span.setAttribute("user.id", id);

//       const user = await prisma.user.findUnique({
//         where: { id },
//       });

//       if (!user) {
//         span.setAttribute("user.found", false);
//       }

//       return user;
//     } catch (err) {
//       span.recordException(err as Error);
//       span.setStatus({ code: SpanStatusCode.ERROR });
//       throw err;
//     } finally {
//       span.end();
//     }
//   });
// }

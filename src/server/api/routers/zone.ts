// import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const zoneRouter = createTRPCRouter({
  hello: publicProcedure
    
    .query(() =>{ return "Les zones de l'IEF"}),
    

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.zone.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});

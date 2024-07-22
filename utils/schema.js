import { serial, varchar, text } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const mockup = pgTable('mockUP', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp', { length: 20 }).notNull(),
    jobPosition: varchar('jobPosition', { length: 20 }).notNull(),
    jobDesc: varchar('jobDesc', { length: 20 }).notNull(),
    jobExperience: varchar('jobExperience', { length: 20 }).notNull(),
    createdBy: varchar('createdBy', { length: 20 }).notNull(),
    createdAt: varchar('createdAt', { length: 20 }).notNull(),
    mockId: varchar('mockId', { length: 20 }).notNull()
});

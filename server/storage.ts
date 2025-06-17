import { 
  users, 
  contacts, 
  educationalPrograms, 
  testimonials,
  type User, 
  type InsertUser,
  type Contact,
  type InsertContact,
  type EducationalProgram,
  type InsertEducationalProgram,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  markContactAsRead(id: number): Promise<void>;
  
  getEducationalPrograms(): Promise<EducationalProgram[]>;
  createEducationalProgram(program: InsertEducationalProgram): Promise<EducationalProgram>;
  
  getApprovedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.createdAt);
  }

  async markContactAsRead(id: number): Promise<void> {
    await db
      .update(contacts)
      .set({ isRead: true })
      .where(eq(contacts.id, id));
  }

  async getEducationalPrograms(): Promise<EducationalProgram[]> {
    return await db
      .select()
      .from(educationalPrograms)
      .where(eq(educationalPrograms.isActive, true))
      .orderBy(educationalPrograms.createdAt);
  }

  async createEducationalProgram(insertProgram: InsertEducationalProgram): Promise<EducationalProgram> {
    const [program] = await db
      .insert(educationalPrograms)
      .values(insertProgram)
      .returning();
    return program;
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return await db
      .select()
      .from(testimonials)
      .where(eq(testimonials.isApproved, true))
      .orderBy(testimonials.createdAt);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db
      .insert(testimonials)
      .values(insertTestimonial)
      .returning();
    return testimonial;
  }
}

export const storage = new DatabaseStorage();

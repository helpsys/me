import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "올바른 형식으로 입력해주세요.",
          details: result.error.issues
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(result.data.email)) {
        return res.status(400).json({ 
          error: "올바른 이메일 주소를 입력해주세요." 
        });
      }

      // Save contact to database
      const contact = await storage.createContact(result.data);

      res.json({ 
        success: true, 
        message: "메시지가 성공적으로 전송되었습니다!",
        contactId: contact.id
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        error: "메시지 전송 중 오류가 발생했습니다." 
      });
    }
  });

  // Get all contacts (admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      console.error("Get contacts error:", error);
      res.status(500).json({ error: "연락처 조회 중 오류가 발생했습니다." });
    }
  });

  // Mark contact as read
  app.patch("/api/contacts/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.markContactAsRead(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Mark contact as read error:", error);
      res.status(500).json({ error: "연락처 상태 업데이트 중 오류가 발생했습니다." });
    }
  });

  // Get educational programs
  app.get("/api/educational-programs", async (req, res) => {
    try {
      const programs = await storage.getEducationalPrograms();
      res.json(programs);
    } catch (error) {
      console.error("Get educational programs error:", error);
      res.status(500).json({ error: "교육 프로그램 조회 중 오류가 발생했습니다." });
    }
  });

  // Get approved testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getApprovedTestimonials();
      res.json(testimonials);
    } catch (error) {
      console.error("Get testimonials error:", error);
      res.status(500).json({ error: "추천사 조회 중 오류가 발생했습니다." });
    }
  });

  // Submit testimonial
  app.post("/api/testimonials", async (req, res) => {
    try {
      const result = insertTestimonialSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          error: "올바른 형식으로 입력해주세요.",
          details: result.error.issues
        });
      }

      const testimonial = await storage.createTestimonial(result.data);
      res.json({ 
        success: true, 
        message: "추천사가 제출되었습니다. 검토 후 게시됩니다.",
        testimonialId: testimonial.id
      });
    } catch (error) {
      console.error("Submit testimonial error:", error);
      res.status(500).json({ error: "추천사 제출 중 오류가 발생했습니다." });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}

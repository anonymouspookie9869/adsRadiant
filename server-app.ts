import express from "express";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

// Load environment variables
dotenv.config();

// In-memory store for simulation of lead data
interface Lead {
  id: string;
  appName: string;
  appCategory: string;
  monthlyBudget: string;
  targetAudience: string;
  email: string;
  clientName: string;
  timestamp: string;
  meetingDate?: string;
  meetingTime?: string;
}

const leadsDatabase: Lead[] = [];

// Lazy-loaded Gemini Client helper
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required but is missing. Please configure it in your Settings > Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

const app = express();

// Body parsing middleware
app.use(express.json());

// === API ENDPOINTS ===

// App health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "AdsRadiant Full-Stack Core Instance" });
});

// Main Lead collection and booking endpoint
app.post("/api/book", (req, res) => {
  try {
    const { appName, appCategory, monthlyBudget, targetAudience, email, clientName, meetingDate, meetingTime } = req.body;
    
    if (!email || !clientName) {
      return res.status(400).json({ error: "Client Name and Contact Email are required fields." });
    }

    const newLead: Lead = {
      id: `ADR-${Math.floor(100000 + Math.random() * 900000)}`,
      appName: appName || "Not Specified",
      appCategory: appCategory || "Utility / General",
      monthlyBudget: monthlyBudget || "$1,000 - $5,000",
      targetAudience: targetAudience || "General Mobile Users",
      email,
      clientName,
      meetingDate: meetingDate || "To be scheduled",
      meetingTime: meetingTime || "To be scheduled",
      timestamp: new Date().toISOString()
    };

    leadsDatabase.push(newLead);
    console.log(`[AdsRadiant Lead Captured] ${newLead.id} for ${clientName} (${newLead.appName})`);

    res.status(201).json({
      success: true,
      message: "Your free growth consultation has been booked successfully!",
      lead: newLead
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "Internal booking error" });
  }
});

// AI App growth blueprint generator (powered securely by server-side Gemini 3.5 Flash)
app.post("/api/growth-strategy", async (req, res) => {
  try {
    const { appName, appCategory, monthlyBudget, targetAudience, platform, coreConcern } = req.body;

    if (!appName || !appCategory) {
      return res.status(400).json({ error: "App Name and App Category are required to generate an audit." });
    }

    const client = getGeminiClient();

    const userPrompt = `
Generate a highly professional, strategic, performance-marketing and app-growth audited blueprint for:
- App Name: ${appName}
- App Category/Niche: ${appCategory}
- Target Platform: ${platform || "Both iOS & Android"}
- Monthly Marketing Budget: ${monthlyBudget || "$5,000 - $10,000"}
- Intended Target Audience: ${targetAudience || "Generational Tech Savvy Users"}
- Core Concern/Goal: ${coreConcern || "High Quality User Acquisition & Lowering CAC"}

Please output highly actionable advice in an JSON schema format containing real marketing metrics, creative hook ideas, ASO keywords, and estimated CPA benchmarks.
`;

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: "You are the Principal App Growth Strategist and AI Performance Expert at AdsRadiant, a premier SaaS and app scaling agency. Generate response strictly matching the schema. Your suggestions must be creative, highly realistic, professional, and contain genuine industry metrics. Do not suggest boring generic stuff.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            appOverview: {
              type: Type.STRING,
              description: "Brief professional critique and appraisal of the app's potential market fit and performance positioning."
            },
            projectedBenchmarks: {
              type: Type.OBJECT,
              properties: {
                targetCAC: { type: Type.STRING, description: "Estimated customer acquisition cost range, e.g., '$1.80 - $2.40'" },
                expectedDay1Retention: { type: Type.STRING, description: "Target day 1 retention rate percentage to reach or maintain, e.g., '34%'" },
                estimatedROAS: { type: Type.STRING, description: "Projected month 3 ROAS multiplier, e.g., '1.85x'" }
              },
              required: ["targetCAC", "expectedDay1Retention", "estimatedROAS"]
            },
            channelStrategy: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  channel: { type: Type.STRING, description: "Channel name (e.g. Meta Spark Ads, TikTok Ads, Apple Search Ads)" },
                  allocation: { type: Type.STRING, description: "Percentage budget allocation, e.g. '40%'" },
                  tactic: { type: Type.STRING, description: "Key campaign tactic or bidding optimization style." },
                  expectedCPA: { type: Type.STRING, description: "Target cost per install or action range on this channel." }
                },
                required: ["channel", "allocation", "tactic", "expectedCPA"]
              }
            },
            creativeFramework: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  conceptName: { type: Type.STRING, description: "Catchy concept title, e.g. 'The 5-Second Solution'" },
                  hook: { type: Type.STRING, description: "The scroll-stopper hook line overlay." },
                  visualDescription: { type: Type.STRING, description: "Step-by-step description of the videographic creator-led action." },
                  bodyCopy: { type: Type.STRING, description: "Ad text copy." }
                },
                required: ["conceptName", "hook", "visualDescription", "bodyCopy"]
              }
            },
            asoBlueprint: {
              type: Type.OBJECT,
              properties: {
                highIntentKeywords: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "3 high-search density keywords to focus on immediately."
                },
                screenshotStrategy: { type: Type.STRING, description: "The optimal design pattern for high-converting app screenshots." },
                storeFrontHook: { type: Type.STRING, description: "A 5-word hook for the primary app store promo text." }
              },
              required: ["highIntentKeywords", "screenshotStrategy", "storeFrontHook"]
            },
            marketingFunnelUplift: {
              type: Type.STRING,
              description: "One crucial onboarding or retention feature modification recommendation to increase activation rate."
            }
          },
          required: [
            "appOverview", 
            "projectedBenchmarks", 
            "channelStrategy", 
            "creativeFramework", 
            "asoBlueprint", 
            "marketingFunnelUplift"
          ]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("No response string returned from Gemini API");
    }

    const strategyData = JSON.parse(responseText.trim());
    res.json({
      success: true,
      data: strategyData
    });

  } catch (error: any) {
    console.error("[Gemini Growth Strategy Error]:", error);
    res.status(500).json({ 
      success: false, 
      error: error.message || "An error occurred while generating the growth blueprint. Check your key." 
    });
  }
});

export default app;

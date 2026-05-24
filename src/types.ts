export interface AuditRequest {
  appName: string;
  appCategory: string;
  monthlyBudget: string;
  targetAudience: string;
  platform: 'iOS' | 'Android' | 'Cross-Platform';
  coreConcern: string;
}

export interface ProjectedBenchmarks {
  targetCAC: string;
  expectedDay1Retention: string;
  estimatedROAS: string;
}

export interface ChannelStrategyItem {
  channel: string;
  allocation: string;
  tactic: string;
  expectedCPA: string;
}

export interface CreativeFrameworkItem {
  conceptName: string;
  hook: string;
  visualDescription: string;
  bodyCopy: string;
}

export interface AsoBlueprint {
  highIntentKeywords: string[];
  screenshotStrategy: string;
  storeFrontHook: string;
}

export interface GrowthStrategyData {
  appOverview: string;
  projectedBenchmarks: ProjectedBenchmarks;
  channelStrategy: ChannelStrategyItem[];
  creativeFramework: CreativeFrameworkItem[];
  asoBlueprint: AsoBlueprint;
  marketingFunnelUplift: string;
}

export interface LeadBookingRequest {
  appName: string;
  appCategory: string;
  monthlyBudget: string;
  targetAudience: string;
  email: string;
  clientName: string;
  meetingDate?: string;
  meetingTime?: string;
}

export interface CapturedLead {
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

export interface BookingResponse {
  success: boolean;
  message: string;
  lead: CapturedLead;
}

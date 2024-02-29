import { CustomGPTResponse } from './custom-gpt';
import { Project } from './project';

export interface CreateConversationRequest {
  name: string;
}

export interface CreateConversationResponse {
  project_id: number;
  name: string;
  created_by: number;
  session_id: string;
  updated_at: Date;
  created_at: Date;
  id: number;
  project: Project;
}

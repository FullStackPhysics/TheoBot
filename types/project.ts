export interface Project {
  id: number;
  project_name: string;
  sitemap_path: string | null;
  user_id: number;
  is_chat_active: boolean;
  created_at: Date;
  updated_at: Date;
  shareable_slug: string;
  is_shared: boolean;
  deleted_at: null | Date;
  type: string;
  team_id: number;
}

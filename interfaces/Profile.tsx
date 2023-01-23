export interface IProfile {
  id: string;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  created_at: Date;
  updated_at: Date;
  user_type: string;
  is_verified: boolean;
  notification_preference: string;
  placeholder_avatar: string;
}

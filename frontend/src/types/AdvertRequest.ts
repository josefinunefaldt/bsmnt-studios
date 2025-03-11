export type AdvertRequest = {
  offering: boolean;
  location?: string;
  description: string;
  dateCreated?: string;
  userId?: string;
  user: {
    name: string;
    email: string;
    about?: string;
  };
};

interface Evento {
  id: number;
  image?: string;
  title: string;
  description: string;
  status: string;
  publishedAt: string;
}

interface User{
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

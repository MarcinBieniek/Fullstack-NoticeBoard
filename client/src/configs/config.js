export const IMGS_URL =
  process.env.NODE_ENV === 'production'
    ? '/uploads'
    : 'http://localhost:8000/uploads';
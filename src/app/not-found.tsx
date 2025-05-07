import { Metadata } from 'next';
import NotFoundPage from '@/components/NotFoundPage';

export const metadata: Metadata = {
  title: 'Oops!',
};

export default function NotFound() {
  return (
    <html>
      <body className="h-svh w-svw">
        <NotFoundPage />
      </body>
    </html>
  );
}

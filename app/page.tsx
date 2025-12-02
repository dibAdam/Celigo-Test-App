import CeligoQuiz from '@/components/CeligoQuiz';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Celigo Quiz',
  description: 'Test your knowledge about Celigo',
}

export default function Home() {
  return <CeligoQuiz />;
}

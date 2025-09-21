import { aboutPageMetadata } from '@/lib/seo-metadata';

export const metadata = aboutPageMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

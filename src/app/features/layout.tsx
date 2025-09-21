import { featuresPageMetadata } from '@/lib/seo-metadata';

export const metadata = featuresPageMetadata;

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

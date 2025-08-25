import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

const tiers = [
  {
    name: "Free",
    price: "$0",
    features: ["1 Project", "2 Users", "Basic Analytics"],
    buttonText: "Get Started",
    buttonVariant: "outline",
    href: "/dashboard"
  },
  {
    name: "Pro",
    price: "$99",
    features: ["10 Projects", "10 Users", "Advanced Analytics", "Email Support"],
    buttonText: "Upgrade",
    buttonVariant: "default",
    href: "/dashboard"
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Projects", "Unlimited Users", "Premium Support", "Custom Integrations"],
    buttonText: "Contact Us",
    buttonVariant: "outline",
    href: "#"
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Find the perfect plan</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Simple, transparent pricing to fit your needs.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <Card key={tier.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{tier.name}</CardTitle>
                    <CardDescription>
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full" variant={tier.buttonVariant as any}>
                        <Link href={tier.href}>{tier.buttonText}</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

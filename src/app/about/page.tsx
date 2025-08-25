import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, GitCommit, Users, Heart, Zap, ShieldCheck, GitBranch, Telescope } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const teamMembers = [
  {
    name: "Aisha Khan",
    title: "Co-founder & CTO",
    bio: "ML systems engineer focusing on distributed training and model ops. Former engineering lead at a major tech company.",
    avatar: "https://placehold.co/400x400.png",
    github: "#",
    linkedin: "#",
  },
  {
    name: "John Doe",
    title: "Lead Frontend Engineer",
    bio: "Passionate about creating intuitive user experiences. Specializes in React, Next.js, and building design systems.",
    avatar: "https://placehold.co/400x400.png",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Jane Smith",
    title: "Head of Product",
    bio: "Bridging the gap between user needs and engineering. Expert in product strategy for developer-focused tools.",
    avatar: "https://placehold.co/400x400.png",
    github: "#",
    linkedin: "#",
  }
];

const principles = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Responsibility",
    description: "We design for safe, auditable ML with PII detection and explainability tools.",
  },
  {
    icon: <GitCommit className="w-8 h-8 text-primary" />,
    title: "Reproducibility",
    description: "Every run is versioned, auditable, and exportable for complete traceability.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Openness",
    description: "Open-source components, transparent roadmaps, and a welcoming contributor culture.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Performance",
    description: "Optimized workflows for rapid iteration and predictable resource usage.",
  },
];


const timelineEvents = [
    { date: "2023 Q1", title: "Project Inception", description: "The initial prototype for ForgeFlow is designed, focusing on a core, simplified MLOps workflow." },
    { date: "2023 Q4", title: "Public Alpha", description: "ForgeFlow Pilot is open-sourced on GitHub and the first public alpha is released to early adopters." },
    { date: "2024 Q2", title: "Live Training & Artifacts", description: "The live training dashboard and versatile artifact export features are launched, expanding core functionality." },
    { date: "2024 Q3", title: "Community Growth", description: "We proudly reach a milestone of 50+ community contributors, strengthening our open-source foundation." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground font-headline">ForgeFlow Pilot</h1>
                <p className="text-xl text-muted-foreground">
                  MLOps built for developers — from dataset to deployable model, fast and reproducible.
                </p>
                <p className="text-lg text-muted-foreground">
                  We simplify model building, monitoring, testing and export so teams ship reliable ML faster.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#" target="_blank">Contribute on GitHub</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Image
                  src="https://placehold.co/600x400.png"
                  alt="Abstract pipeline illustration"
                  data-ai-hint="abstract pipeline"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
                 <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Mission</h2>
                 <p className="mt-4 text-xl text-muted-foreground">
                    To remove friction between data and production — empowering teams to develop, evaluate and ship machine learning models with clarity, reproducibility, and trust.
                 </p>
            </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                     <h2 className="text-3xl font-bold tracking-tighter font-headline">Core Principles</h2>
                     <p className="mt-4 text-xl text-muted-foreground">The values that guide our product and our company.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {principles.map((principle) => (
                        <Card key={principle.title} className="text-center p-6">
                            <div className="flex justify-center mb-4">{principle.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                            <p className="text-muted-foreground">{principle.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                     <h2 className="text-3xl font-bold tracking-tighter font-headline">Our Journey</h2>
                     <p className="mt-4 text-xl text-muted-foreground">Key milestones in the ForgeFlow Pilot story.</p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
                    <div className="space-y-16">
                        {timelineEvents.map((event, index) => (
                             <div key={event.date} className="flex items-center justify-center relative">
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                                    <p className="font-bold text-primary">{event.date}</p>
                                    <h3 className="text-xl font-semibold my-1">{event.title}</h3>
                                    <p className="text-muted-foreground">{event.description}</p>
                                </div>
                                <div className="z-10 bg-background p-2 rounded-full border-2 border-primary">
                                    <Telescope className="w-6 h-6 text-primary" />
                                </div>
                                <div className="w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter font-headline">Meet the Team</h2>
              <p className="mt-4 text-xl text-muted-foreground">The people building the future of MLOps.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <Card key={member.name} className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="text-muted-foreground mt-2">{member.bio}</p>
                   <div className="mt-4 flex justify-center gap-4">
                      <Link href={member.github} target="_blank"><Button variant="outline" size="icon"><GitBranch className="h-4 w-4" /></Button></Link>
                      <Link href={member.linkedin} target="_blank"><Button variant="outline" size="icon"><Briefcase className="h-4 w-4" /></Button></Link>
                   </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6 text-center">
                 <h2 className="text-3xl font-bold tracking-tighter font-headline">Join the Team</h2>
                 <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
                    We’re hiring engineers, ML specialists, and community managers. If you’re passionate about MLOps, open-source, and developer experience — we want to hear from you.
                 </p>
                 <div className="mt-8">
                     <Button size="lg" asChild>
                        <Link href="/contact">See Open Roles</Link>
                     </Button>
                 </div>
             </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

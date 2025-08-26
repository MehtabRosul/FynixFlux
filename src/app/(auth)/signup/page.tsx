"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signUpWithEmail } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { auth } from "@/lib/firebase";
import { signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Logo = () => (
  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>Google</title>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-.97 2.53-1.94 3.31v2.76h3.57c2.08-1.92 3.28-4.74 3.28-8.08z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        <path d="M1 1h22v22H1z" fill="none" />
    </svg>
)

const GithubIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        fill="currentColor"
         />
    </svg>
)

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
type SignupFormValues = z.infer<typeof signupSchema>;


export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const handleOAuth = async (provider: 'google' | 'github') => {
    const authProvider = provider === 'google' ? new GoogleAuthProvider() : new GithubAuthProvider();
    try {
      await signInWithPopup(auth, authProvider);
      toast({ title: "Successfully signed in!" });
      router.push('/dashboard');
    } catch (error: any) {
      if (error.code !== 'auth/popup-closed-by-user') {
          toast({
            title: "Sign-in Failed",
            description: error.message,
            variant: "destructive",
          });
      }
    }
  };

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      await signUpWithEmail(data.email, data.password);
      toast({ title: "Account created successfully!" });
      router.push('/dashboard');
    } catch (error: any) {
       toast({
        title: "Sign-up Failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-lg border-2 border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="text-center">
           <Link href="/" className="flex items-center gap-2 justify-center mb-4" prefetch={false}>
            <Logo />
            <span className="text-2xl font-bold tracking-tight text-foreground">ForgeFlow</span>
          </Link>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">Create Your Account</CardTitle>
          <CardDescription>Get started in seconds to streamline your MLOps pipeline.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button variant="outline" className="w-full h-11" onClick={() => handleOAuth('google')}>
                    <GoogleIcon />
                    <span className="ml-2">Sign up with Google</span>
                </Button>
                <Button variant="outline" className="w-full h-11" onClick={() => handleOAuth('github')}>
                    <GithubIcon />
                    <span className="ml-2">Sign up with GitHub</span>
                </Button>
            </div>
            <div className="flex items-center space-x-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
                <Separator className="flex-1" />
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" {...register('firstName')} />
                         {errors.firstName && <p className="text-xs text-destructive">{errors.firstName.message}</p>}
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" {...register('lastName')} />
                        {errors.lastName && <p className="text-xs text-destructive">{errors.lastName.message}</p>}
                    </div>
                </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" {...register('email')} />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" {...register('password')} />
                {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full h-11 !mt-6" disabled={isSubmitting}>
                 {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </div>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
                By signing up, you agree to our{' '}
                <Link href="/terms" className="font-medium text-primary hover:underline">
                    Terms of Service
                </Link>
                .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

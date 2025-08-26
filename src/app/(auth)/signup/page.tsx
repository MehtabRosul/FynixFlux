
"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm, SubmitHandler, useController } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signUpWithEmail } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { useToast } from "@/hooks/use-toast";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Logo = () => (
  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms of service."
  })
});
type SignupFormValues = z.infer<typeof signupSchema>;


export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, control } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange', // Validate on change to enable button
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      agreeToTerms: false
    }
  });

  const { field: agreeToTermsField } = useController({
    name: 'agreeToTerms',
    control,
  });

  const onSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      await signUpWithEmail(data.email, data.password);
      router.push('/');
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
      <Card className="w-full max-w-md border-2 border-primary/20 shadow-lg shadow-primary/10">
        <CardHeader className="text-center">
           <Link href="/" className="flex items-center gap-2 justify-center mb-4" prefetch={false}>
            <Logo />
            <span className="text-2xl font-bold tracking-tight text-foreground">ForgeFlow</span>
          </Link>
          <CardTitle className="text-3xl font-bold tracking-tight font-headline">Create Your Account</CardTitle>
          <CardDescription>Please fill out the form below to get started.</CardDescription>
        </CardHeader>
        <CardContent>
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
               <div className="flex items-start space-x-2 pt-2">
                 <Checkbox 
                    id="terms" 
                    checked={agreeToTermsField.value}
                    onCheckedChange={agreeToTermsField.onChange}
                    onBlur={agreeToTermsField.onBlur}
                    ref={agreeToTermsField.ref}
                 />
                 <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{' '}
                      <Link href="/terms" className="font-medium text-primary hover:underline">
                        Terms of Service
                      </Link>
                      .
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-xs text-destructive">{errors.agreeToTerms.message}</p>
                    )}
                 </div>
               </div>
              <Button type="submit" className="w-full h-11 !mt-6" disabled={!isValid || isSubmitting}>
                 {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
        </CardContent>
      </Card>
    </div>
  )
}

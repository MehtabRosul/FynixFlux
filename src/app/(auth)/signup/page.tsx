import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const Logo = () => (
  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
    {/* Your Logo Here */}
  </div>
);

const GoogleIcon = () => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
        <title>Google</title>
        <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-7.053 2.4-5.333 0-9.6-4.267-9.6-9.6s4.267-9.6 9.6-9.6c3.04 0 4.88 1.24 6.027 2.347l2.6-2.6C18.4 1.24 15.64 0 12.48 0 5.867 0 .96 5.867.96 12.48s4.907 12.48 11.52 12.48c6.667 0 11.2-4.667 11.2-11.52 0-.747-.067-1.44-.2-2.04h-11.2z"
        fill="currentColor"
        />
    </svg>
)

export default function SignupPage() {
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
            <Button variant="outline" className="w-full h-11">
              <GoogleIcon />
              <span className="ml-2">Sign up with Google</span>
            </Button>
            <div className="flex items-center space-x-2">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR CONTINUE WITH</span>
                <Separator className="flex-1" />
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" required />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" required />
                    </div>
                </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required placeholder="••••••••" />
              </div>
              <Button type="submit" className="w-full h-11 !mt-6">
                Create Account
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

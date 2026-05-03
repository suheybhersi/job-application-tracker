import { getSession } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              Welcome to your dashboard.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Here you can manage your job applications and track your progress.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

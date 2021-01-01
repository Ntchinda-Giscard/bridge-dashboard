"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard")
  },[]);

  return (
    <main className="flex min-h-full flex-col gap-3">

    </main>
  );
}

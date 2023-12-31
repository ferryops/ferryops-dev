import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="w-full mx-auto px-6 flex-grow">{children}</main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current flex-col"
          href="https://blog.ferryops.dev/"
          title="ferry blog"
        >
          <span className="text-default-600">ferryops.dev 🌟</span>
          <p className="text-primary text-center">Dibuat dengan Next.js dan TailwindCSS</p>
        </Link>
      </footer>
    </div>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container size="md">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="font-display text-8xl font-bold text-gradient-accent sm:text-9xl">
            404
          </span>
          <h1 className="font-display text-3xl font-bold sm:text-4xl">
            Halaman tidak ditemukan
          </h1>
          <p className="max-w-md text-secondary">
            Halaman yang kamu cari mungkin sudah dipindahkan atau tidak pernah
            ada.
          </p>
          <Link href="/">
            <Button size="lg">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
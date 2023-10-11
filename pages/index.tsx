import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * siteConfig.quotes.length);
      setCurrentQuoteIndex(randomIndex);
    }, 7000); // Setiap 5 detik

    return () => clearInterval(intervalId);
  }, []);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ size: "sm" })}>{siteConfig.quotes[currentQuoteIndex].quotes}</h1>
          <h4 className={subtitle({ class: "mt-4" })}>- {siteConfig.quotes[currentQuoteIndex].creator}</h4>
        </div>
      </section>
    </DefaultLayout>
  );
}

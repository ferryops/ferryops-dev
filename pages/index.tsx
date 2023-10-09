import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ size: "sm" })}>“Lebih baik menerima kejujuran yang pahit, daripada kebohongan yang manis.”</h1>
          <h4 className={subtitle({ class: "mt-4" })}>- Soichiro Yagami (Death Note)</h4>
        </div>
      </section>
    </DefaultLayout>
  );
}

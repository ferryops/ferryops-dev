import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Chip } from "@nextui-org/react";

export default function ResumePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 md:py-10">
        <div className="text-center justify-center">
          <h1 className={title({ size: "sm" })}>Ferry &nbsp;</h1>
          <h1 className={title({ size: "sm", color: "violet" })}>Ananda&nbsp;</h1>
          <h1 className={title({ size: "sm" })}>Febian</h1>
          <h4 className={subtitle({ class: "mt-4" })}>Software Engineer | Blogger 🚀</h4>
          <article className="flex flex-col gap-2 max-w-4xl justify-start">
            <p className="px-5 inline-block">
              Halo, aku Ferry, suka mencoba sesuatu hal yang baru, kesibukan saat ini sebagai
              fulltime web developer, freelancer dan juga aktif menulis tutorial di web pribadi
              ataupun forum diskusi.
            </p>
            <h4 className={subtitle()}>Pengalaman Kerja &#9203;</h4>
            {siteConfig.pengalaman.map((data, index) => (
              <Card key={index} className="mb-4 max-w-3xl m-auto">
                <CardHeader className="flex gap-3">
                  <div className="flex justify-between w-full">
                    <div className="text-left">
                      <p className="text-md">{data.position}</p>
                      <p className="text-small text-default-500">{data.duration}</p>
                    </div>
                    <p className="text-small text-default-500">{data.company}</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p>{data.description}</p>
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-1 flex-wrap">
                  {data.tools.map((tool, i) => (
                    <Chip color="primary" size="sm" key={i}>
                      {tool}
                    </Chip>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </article>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            as={NextLink}
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Documentation
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}

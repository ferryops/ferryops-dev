import NextLink from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  CircularProgress,
  Chip,
  Avatar,
} from "@nextui-org/react";

export default function Artikel() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/devTo")
      .then((response) => {
        setArticles(response.data.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full flex justify-center h-screen">
          <CircularProgress
            aria-label="Loading..."
            size="lg"
            color="warning"
            label="fetching data bentar ya gan.. &#128513;"
          />
        </div>
      ) : (
        <DefaultLayout>
          <section className="flex flex-col items-center justify-center gap-8 md:py-10">
            <div className="text-center justify-center">
              <article className="flex flex-col gap-2 max-w-4xl">
                {articles.map((data: any) => (
                  <Link key={data.id} href={`https://dev.to${data.path}`} target="_blank">
                    <Card className="mb-4 hover:border-1 hover:cursor-pointer w-full">
                      <CardHeader className="flex justify-between">
                        <div className="flex w-full gap-4">
                          <Avatar src={data.user.profile_image_90} />
                          <div className="text-left">
                            <p className="text-md">{data.user.name}</p>
                            <p className="text-small text-default-500">{data.user.username}</p>
                          </div>
                        </div>
                        <span className="text-small text-default-500 w-auto whitespace-nowrap">{data.readable_publish_date}</span>
                      </CardHeader>
                      <Divider />
                      <CardBody>
                        <p className="text-md font-bold">{data.title}</p>
                      </CardBody>
                      <Divider />
                      <CardFooter className="flex gap-1 flex-wrap">
                        {data.tag_list.map((tag: any, i: number) => (
                          <Chip key={i} color="primary" size="sm">
                            {tag}
                          </Chip>
                        ))}
                      </CardFooter>
                    </Card>
                  </Link>
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
      )}
    </>
  );
}

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
  Image,
  CircularProgress,
  Avatar,
} from "@nextui-org/react";

export default function RepoPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/ferryops/repos")
      .then((response) => {
        setRepos(response.data);
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
            showValueLabel={true}
            label="fetching data bentar ya gan.. &#128513;"
          />
        </div>
      ) : (
        <DefaultLayout>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-4xl text-center justify-center">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                {repos.map((data: any, index: number) => (
                  <Card key={index} className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                      <Avatar alt="Ferry Ganteng" src={data.owner.avatar_url} />
                      <div className="flex flex-col text-left">
                        <p className="text-md">{data.name}</p>
                        <p className="text-small text-default-500">{data.language}</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>{data.description == null ? "-" : data.description}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <Link isExternal showAnchorIcon href={data.url}>
                        Visit source code on GitHub.
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
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

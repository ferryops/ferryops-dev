import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Image: string; // Menggunakan string untuk alamat gambar PNG
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Teknologi Terkini",
    Image: "img/newspaper.png",
    description: <>Temukan wawasan terbaru tentang teknologi terkini dan tren industri dari para ahli.</>,
  },
  {
    title: "Pembuatan Program",
    Image: "img/programming.png",
    description: (
      <>
        Membutuhkan solusi perangkat lunak khusus? Kami menyediakan layanan pembuatan program yang disesuaikan dengan kebutuhan
        Anda.
      </>
    ),
  },
  {
    title: "Fokus pada Inovasi",
    Image: "img/idea.png",
    description: (
      <>
        Fokuslah pada inovasi Anda. Kami akan membantu Anda mengelola sisi teknisnya, sehingga Anda bisa fokus pada ide-ide
        brilian Anda.
      </>
    ),
  },
];

function Feature({ title, Image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Image} className={styles.featureImage} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

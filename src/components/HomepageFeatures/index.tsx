import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Blog dan Kreativitas",
    Image: "img/newspaper.png",
    description: (
      <>
        Selamat datang di blog yang penuh inspirasi ini! Temukan cerita-cerita menarik dan informasi terbaru seputar teknologi.
        Dari pemrograman yang mendalam hingga ide-ide kreatif yang inovatif, saya akan membawa Anda dalam perjalanan yang
        menggugah pikiran melalui dunia teknologi.
      </>
    ),
  },
  {
    title: "Rangkaian Kode",
    Image: "img/programming.png",
    description: (
      <>
        Mari kita jelajahi dunia pemrograman dengan langkah-langkah yang jelas dan pemahaman yang mendalam. Dari konsep dasar
        hingga proyek-proyek praktis, blog ini menjadi panduan Anda dalam mempelajari bahasa pemrograman dan mengembangkan
        keterampilan teknis Anda.
      </>
    ),
  },
  {
    title: "Idea di Balik Kode",
    Image: "img/idea.png",
    description: (
      <>
        Dibalik setiap baris kode, terdapat ide-ide yang kreatif dan inovatif. Mari kita telusuri inspirasi di balik teknologi,
        dari desain UI yang menarik hingga konsep-konsep revolusioner. Blog ini mengajak Anda untuk menjelajahi potensi kreatif
        Anda dalam dunia digital.
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

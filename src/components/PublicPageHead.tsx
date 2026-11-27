import { Helmet } from "react-helmet-async";
import { publicPageMetadata, publicSite } from "../data/publicPageMetadata";

export default function PublicPageHead({ page }: { page: keyof typeof publicPageMetadata }) {
  const { title, description } = publicPageMetadata[page];
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${publicSite}/${page}`} />
    </Helmet>
  );
}

import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import StartEndDate from "./StartEndDate";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"experience">["data"];
  secHeading?: boolean;
}

export default function NotLinkCard({
  frontmatter,
  secHeading = true,
}: Props) {
  const { title, startDate, endDate, description, href, subHref, listAuthor, conference } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        target="_blank"
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <p className="text-md text-secondary mb-2">{listAuthor}</p>
      <p className="text-md text-secondary mb-2">{conference}</p>
      {!listAuthor && <StartEndDate startDate={startDate} endDate={endDate} />}
      {subHref ? (
        <a
        target="_blank"
        href={subHref}
        className="inline-block decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <pre className="mt-2 hover:underline decoration-dashed">{description}</pre>
      </a>
        ) : (<pre className="mt-2">{description}</pre>) }
      {/* <pre className="mt-2">{description}</pre> */}
    </li>
  );
}

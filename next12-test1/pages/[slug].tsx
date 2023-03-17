import { useRouter } from "next/router";
import axios from "axios";
import Content from "./components/contents/Content";
import { ContentData } from "./components/contents/interfaces";

type ContentProps = {
  contents?: ContentData["data"];
};

const ContentPage = ({ contents }: ContentProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Content contents={contents} />
    </div>
  );
};

export const getStaticPaths = async () => {
  let slugs: any[] = [];

  try {
    const response = await axios.get<ContentData[]>(
      "https://acecmsmock.z6.web.core.windows.net/api/content/web/3"
    );
    slugs = response.data.map((article) => article.slug);
    console.log("slug:", slugs);
  } catch (error) {
    console.error(error);
  }

  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }: any) => {
  let contents;

  try {
    const response = await axios.get<ContentData>(
      `https://acecmsmock.z6.web.core.windows.net/api/content/slug/${params.slug}?webId=3`
    );
    contents = response.data.data;
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }

  return { props: { contents } };
};

export default ContentPage;

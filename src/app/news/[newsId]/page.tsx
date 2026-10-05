import Image from "next/image";
import { notFound } from "next/navigation";

interface NewsArticle {
  title: string;
  text: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
  source?: string;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news: NewsArticle | undefined = data.data;

  if (!news) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-4 py-8">
      {news.category && (
        <p className="mb-3 font-semibold text-red-700">{news.category}</p>
      )}
      <h1 className="mb-4 text-2xl font-bold leading-relaxed md:text-4xl">
        {news.title}
      </h1>
      {news.source && (
        <p className="mb-5 border-b border-gray-300 pb-3 text-sm text-gray-600">
          সূত্র: {news.source}
        </p>
      )}
      {news.imageUrl && (
        <figure className="mb-6">
          <Image
            src={news.imageUrl}
            alt={news.imageAlt || news.title}
            width={1200}
            height={675}
            className="h-auto w-full rounded-lg object-cover"
            priority
          />
          {news.imageAlt && (
            <figcaption className="mt-2 text-sm text-gray-600">
              {news.imageAlt}
            </figcaption>
          )}
        </figure>
      )}
      <div className="whitespace-pre-line text-base leading-8 text-gray-800 md:text-lg">
        {news.text}
      </div>
    </article>
  );
};

export default NewsDetails;
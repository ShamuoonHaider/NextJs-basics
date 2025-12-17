interface Props {
  params: Promise<{ articleId: string }>;
  // searchParams: Promise<{ lang: "en" | "es" | "fr" }>;
  children: React.ReactNode;
}

const ArticleLayout = async ({ params, children }: Props) => {
  const { articleId } = await params;
  // const { lang = "en" } = await searchParams;
  return (
    <div>
      <h2>Article Layout - {articleId} - Language</h2>
      {children}
    </div>
  );
};

export default ArticleLayout;

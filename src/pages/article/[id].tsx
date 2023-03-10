import { article1 } from 'mocks/articles';
import { bottomArticle } from 'mocks/bottomArticle';
import { imageSet } from 'mocks/imagesSets';

import ArticleBottomPart from 'components/article/ArticleBottomPart';
import ArticleMiddlePart from 'components/article/ArticleMiddlePart';
import ArticleTopPart from 'components/article/ArticleTopPart';
import BottomArticle from 'components/bottom-article/BottomArticle';
import { Header } from 'components/header/Header';
import ImagesBlock from 'components/images-block/ImagesBlock';
import References from 'components/references/References';

export default function ArticlePage() {
  return (
    <>
      <section className="wrapper pt-142 section">
        <Header theme="dark" />
        <div className="bg-frame" />
        <ArticleTopPart article={article1} />
      </section>

      <section className="section light ptb-80">
        <ArticleMiddlePart article={article1} />
      </section>

      <ImagesBlock title="Myndir" images={imageSet} classname="section" />

      <section className="section light pt-40">
        <ArticleBottomPart article={article1} />

        <BottomArticle bottomArticle={bottomArticle} />
        <References />
      </section>
    </>
  );
}

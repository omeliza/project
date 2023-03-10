import { news } from 'mocks/news';

import { Header } from 'components/header/Header';
import News from 'components/news/News';

export default function NewsPage() {
  return (
    <div className="outer-wrapper light section">
      <div className="wrapper pt-142">
        <Header theme="light" />
        <div className="news-content-wrapper">
          {news.map((row) => {
            return <News title="Fréttir og allt hitt" key={row.id} news={row} />;
          })}
        </div>
      </div>
    </div>
  );
}

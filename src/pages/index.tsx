import widePhoto from 'assets/wide-photo.png';
import { bottomArticle } from 'mocks/bottomArticle';
import { imageSet } from 'mocks/imagesSets';
import { news } from 'mocks/news';
import { nextHomeArticle } from 'mocks/nextHomeArticle';
import { slider } from 'mocks/slider';

import { BlueTopSection } from 'components/blue-top-section/BlueTopSection';
import BottomArticle from 'components/bottom-article/BottomArticle';
import { Header } from 'components/header/Header';
import ImagesBlock from 'components/images-block/ImagesBlock';
import { MainHomeBlock } from 'components/main-home-block/MainHomeBlock';
import News from 'components/news/News';
import NextHomeArticle from 'components/next-home-article/NextHomeArticle';
import { Picture } from 'components/picture/Picture';
import Playlist from 'components/playlist/Playlist';
import References from 'components/references/References';
import { SliderBlock } from 'components/slider/Slider';

import { homeBottomSettings } from 'utils/slider';

export default function StarterHome() {
  const { image, title } = nextHomeArticle;
  return (
    <>
      <div className="wrapper pt-142 section">
        <Header theme="dark" />
        <iframe
          loading="lazy"
          className="bg-frame"
          src="https://blueanimation.netlify.app/"
        />
        <MainHomeBlock />
      </div>
      <BlueTopSection classname="section" />
      <div className="light section">
        <NextHomeArticle title={title} image={image} classname="section" />
        <div className="limit-container section">
          <Picture className="poster" src={widePhoto} />
        </div>
        <div className="newsWrapper section">
          {news.slice(0, 2).map((item) => (
            <News news={item} key={item.id} title="Nýjasta nýtt" />
          ))}
        </div>
      </div>
      <ImagesBlock
        images={imageSet}
        title="Verdlaunahafar 2022"
        preview
        classname="section"
      />
      <Playlist classname="section" />
      <div className="light section">
        <BottomArticle bottomArticle={bottomArticle} />
        <References />
      </div>
      <SliderBlock
        settings={homeBottomSettings}
        slides={slider}
        title="Takk fyrir stuðninginn"
        classname="section"
      />
    </>
  );
}

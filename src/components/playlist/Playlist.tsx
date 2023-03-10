import bands from 'assets/playlist.png';
import classNames from 'classnames';

import { H2 } from 'components/heading/Heading';
import { Picture } from 'components/picture/Picture';

import s from './Playlist.module.scss';

const c = classNames.bind(s);

const Playlist = ({ classname }: { classname?: string }) => {
  return (
    <div className={c('blue-section', classname)}>
      <div className={s.playlist}>
        <div className={s.playlist__img}>
          <Picture src={bands} alt="bands" />
        </div>
        <div className={s.playlist__block}>
          <H2 className={s.playlist__title}>Playlistinn</H2>
          <iframe
            className={s.playlist__player}
            src="https://open.spotify.com/embed/playlist/37i9dQZF1E4BV5Wf9ansml?utm_source=generator"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Playlist;

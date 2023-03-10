import s from './MixinGrid.module.scss';

export const MixinGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.mixinGrid}>
      <div className={s.mixinGrid__item}>{children}</div>
      <div className={s.mixinGrid__item}>{children}</div>
      <div className={s.mixinGrid__item}>{children}</div>
    </div>
  );
};

import image2 from 'assets/article/musical-instruments.png';
import image from 'assets/news/image.png';
import { StaticImageData } from 'next/image';

export interface IArticle {
  title: string;
  date: string;
  subtitle: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  highlighted: string;
  caption1: string;
  caption2: string;
  caption3: string;
  image: StaticImageData;
  image2: StaticImageData;
}
export const article1: IArticle = {
  title: 'Laoreet quam leo tellus suscipit nulla',
  date: '12. maí 2022',
  subtitle:
    'Sat vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium atque corrupti quos dolores et quas.',
  paragraph1:
    'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy.',
  caption1: 'Omnis dolor repellendus vus tadus las marielos',
  paragraph2:
    'Similique sunt in culpa qui oOmnis dolor repellendus vus tadus las marielost dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  caption2: 'Omnis dolor repellendus vus tadus las marielos',
  paragraph3:
    'Similique sunt in culpa qui oOmnis dolor repellendus vus tadus las marielost dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  highlighted:
    'Úrdráttur úr texta elementum tortor. Mauris auctor nibh faucibus tortor amet id eu. Augue enim id donec semper ut nibh tortor pharetra libero morbi amet. -Jóna Halldóra Jónsdóttir, starfstitill',
  caption3: 'Omnis dolor repellendus vus tadus las marielos',
  paragraph4:
    'Similique sunt in culpa qui oOmnis dolor repellendus vus tadus las marielost dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  image: image,
  image2: image2,
};

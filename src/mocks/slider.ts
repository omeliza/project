import Concept from 'assets/concept.svg';
import Harpa from 'assets/harpa.svg';
import Luxor from 'assets/luxor.svg';
import Ras2 from 'assets/ras2.svg';
import Ruv2 from 'assets/ruv2.svg';

import { ISlider } from 'types/home';

export const slider: Array<ISlider> = [
  {
    id: 1,
    image: Harpa,
    text: 'Harpa fyrir að taka vel á móti okkur og halda vel utan um viðburðinn',
  },
  {
    id: 2,
    image: Concept,
    text: 'Concept Events fyrir skipulagið, hjálpina og góðan félagsskap',
  },
  {
    id: 3,
    image: Luxor,
    text: 'Luxor fyrir töfrandi sviðsmynd, lýsingu og góða bombu í lokin',
  },
  { id: 4, image: Ras2, text: 'Rás 2 fyrir að standa að valinu á Björtustu voninni' },
  { id: 5, image: Ruv2, text: 'Rúv fyrir að sýna frá hátíðinni' },
];

import { Valkery } from '@/types/Valkery';
import build1 from './Build1';
import build2 from './Build2';
import build3 from './Build3';

const HerrscherOfFinality: Valkery = {
    label: 'Herrscher of Finality',
    image: 'https://pbs.twimg.com/media/FRe8WdTUYAAqHR4?format=jpg&name=4096x4096',
    build: [build1, build2, build3],
    type: 4,
    loadoutBuffs: [
        { title: 0, selected: 'yes' },
        { title: 5, selected: 'no' },
        { title: 5, selected: 'no' },
        { title: 10, selected: 'no' },
        { title: 10, selected: 'no' },
        { title: 15, selected: 'yes' },
        { title: 15, selected: 'yes' },
      ],
};
export default HerrscherOfFinality;
import InfoCard1 from '@/assets/images/home/info-cards/info-card-1-md2x.webp';
import InfoCard3 from '@/assets/images/home/info-cards/info-card-3-md2x.webp';
import InfoCard4 from '@/assets/images/home/info-cards/info-card-4-md2x.webp';
import InfoCard5 from '@/assets/images/home/info-cards/info-card-5-md2x.webp';
import InfoCard6 from '@/assets/images/home/info-cards/info-card-6-md2x.webp';
import InfoCard7 from '@/assets/images/home/info-cards/info-card-7-md2x.webp';

export const tools = [
    { label: 'Не выбран', value: null },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard3}
                />{' '}
                Карты Таро
            </span>
        ),
        value: 'Карты Таро',
    },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard4}
                />{' '}
                Руны
            </span>
        ),
        value: 'Руны',
    },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard6}
                />{' '}
                Карты Ленорман
            </span>
        ),
        value: 'Карты Ленорман',
    },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard1}
                />{' '}
                МАК (Метафорические карты)
            </span>
        ),
        value: 'МАК (Метафорические карты)',
    },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard5}
                />{' '}
                Книга Перемен (И-Цзин)
            </span>
        ),
        value: 'Книга Перемен (И-Цзин)',
    },
    {
        label: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <img
                    style={{ width: '25px' }}
                    aria-hidden="true"
                    src={InfoCard7}
                />{' '}
                Доверюсь Лаванде (Выбор мастера)
            </span>
        ),
        value: 'Доверюсь Лаванде (Выбор мастера)',
    },
];

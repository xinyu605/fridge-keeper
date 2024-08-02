import { FunctionComponent } from 'react';

import { LngRouteProps } from '@/types/page';
import { useTranslation } from '@/i18n';

interface HomePageProps extends LngRouteProps {}

const HomePage: FunctionComponent<HomePageProps> = async ({
  params: { lng },
}) => {
  const { t } = await useTranslation(lng);

  return <div className="pt-20">{t('title')}</div>;
};

export default HomePage;

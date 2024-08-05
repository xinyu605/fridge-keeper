import initTranslations from '@/lib/i18n';
import { type ServerFC } from '@/lib/types';

const Home: ServerFC = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['home']);

  return <div>{t('title')}</div>;
};

export default Home;

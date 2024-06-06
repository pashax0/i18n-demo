import {useTranslations} from 'next-intl';
import Header from "@/components/header";

export default function Index() {
  const t = useTranslations('Index');

  return (
      <div>
        <Header />
        <h1>{t('title')}</h1>
      </div>
  );
}
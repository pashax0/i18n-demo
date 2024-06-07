import {useTranslations} from 'next-intl';
import Header from "@/components/header";
import {Metadata} from "next";
import {getTranslations} from "next-intl/server";
import {getServiceValue} from "@/app/helpers";
import {SOME_CONSTANT} from "@/constants";

export default function Index() {
  const t = useTranslations('Index');

  return (
      <div>
        <Header />
        <h1>{t('title')}</h1>
          <p>{t('server')}</p>
          <div>
              <h5>{getServiceValue()}</h5>
              <p>{SOME_CONSTANT.value}</p>
          </div>
      </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations({locale: '', namespace: 'Index'});

    return {
        title: t('metadata first page')
    };
}
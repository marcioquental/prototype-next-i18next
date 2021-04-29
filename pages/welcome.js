import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Welcome({ locale }) {
  const { t } = useTranslation('welcome');

  return (
    <div>
      <h1>{t('welcome_h1')}</h1>

      <div>
        <Link href="/welcome" locale={locale === 'en' ? 'pt' : 'en'}>
          <button type="button">Toggle locale</button>
        </Link>
      </div>

      <div>
        <div>
          <Link href="/">Back to home with Link component</Link>
        </div>

        <div>
          <a href="/">Back to home with normal link</a>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      locale,
      ...await serverSideTranslations(locale, ['welcome']),
    }
  };
};

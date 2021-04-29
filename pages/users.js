import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Users() {
  const { t } = useTranslation('user');

  return (
    <div>
      <h1>{t('users_h1')}</h1>

      <Link href="/">Back to home</Link>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['user']);

  return {
    props: translations,
  }
}

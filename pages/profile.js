import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Profile({ user }) {

  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, []);

  return {
    props: {
      user: 'John Doe',
    }
  }
}

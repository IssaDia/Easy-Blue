import { NextPage } from 'next'

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>Your user agent: {userAgent}</main>
)

Page.getInitialProps = async  (context)  => {
  const { store, isServer, query, req } = context;
    if (isServer) {
      if (isServer) {
         console.log(req.cookies);
      }
    }
    return { isServer };
}

export default Page
import getAuthSession from './../../lib/session'
const ProtectedSSRoute = ({ authenticated, user }) => {
    if (!authenticated) {
        return (
            <di>
                <span>You are not authenticated :(</span>
            </di>
        )
    } else {
        <div>
            <span>You are authenticated as: {user} :)</span>
        </div>
    }
}

export function getServerSideProps(ctx) {
    const authSession = getAuthSession(ctx)
    if (!authSession) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    return {
        props: {
            user: authSession.user,
        },
    };
}
const ProtectedPage = () => {
    const user = useAuthSession();

  if (!user) return null;
  return (
    <div>
      <span>You are authenticated as: {user}</span>
    </div>
  );
};

export default ProtectedSSRoute;
import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import type { inferProcedureOutput } from "@trpc/server";
import type { AppRouter } from "@acme/api";
// import { HelloWorld } from "@acme/ui";
import { useAuth, UserButton } from "@clerk/nextjs";
//import { button } from "@acme/ui";
import Link from "next/link";

const Home: NextPage = () => {
  const { isSignedIn } = useAuth();
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-tr from-[#080111] via-[#250058] to-[#33007a] text-white">
        {isSignedIn && (
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Welcome to TeamMate</h1>
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl">
                <Link href="/sign-in">Sign In</Link>
              </p>
              <p className="text-center text-2xl">
                <Link href="/sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        )}
        {!isSignedIn && <AuthShowcase />}
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { isSignedIn } = useAuth();
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined,
    { enabled: !!isSignedIn },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isSignedIn && (
        <>
          <p className="text-center text-2xl text-white">
            {secretMessage && (
              <span>
                {" "}
                {secretMessage} click the user button!
                <br />
              </span>
            )}
          </p>
          <div className="flex items-center justify-center">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "3rem",
                    height: "3rem",
                  },
                },
              }}
            />
          </div>
        </>
      )}
      {!isSignedIn && (
        <p className="text-center text-2xl text-white">
          <Link href="/sign-in">Sign In</Link>
        </p>
      )}
    </div>
  );
};

import { NextPageContext } from "next";
import Link from "next/link";

function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>
      <h1>Error</h1>
      {statusCode === 404 ? (
        <p>
          The page you are looking for could not be found.{" "}
          <Link href="/">Go back to the homepage</Link>
        </p>
      ) : (
        <p>An error occurred on the server. Please try again later.</p>
      )}
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

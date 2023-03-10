import DefaultErrorPage from 'next/error';

type StatusCodeException = {
  statusCode?: string | number;
} & Error;

export const Default404Page = ({ message = '' }: { message?: string }) => {
  if (typeof window === 'undefined' || process.env.NODE_ENV === 'development') {
    return <DefaultErrorPage statusCode={404} />;
  }

  // This will make the server return a 404 in production
  const e = new Error() as StatusCodeException;
  e.message = 'Page Not Found' + message ? `: ${message}` : '';
  e.statusCode = 404;
  throw e;
};

import { Helmet } from "react-helmet";
 
export default function NotFound() {
    return (
      <>
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <div className="w-full min-h-screen flex flex-col justify-center items-center gap-4">
          <h1 className="text-3xl font-bold font-lexend">Error</h1>
          <h2 className="text-2xl font-medium font-lexend"><span className="text-red-500">404 </span>Not Found</h2>
        </div>
      </>
    );
}
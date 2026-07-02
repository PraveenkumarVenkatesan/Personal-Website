import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Compass, Home } from "lucide-react";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="page-container flex items-center">
        <div className="content-container">
          <div className="glass-panel mx-auto max-w-xl p-10 sm:p-14 text-center animate-fade-in">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
              <Compass className="h-8 w-8 text-primary" />
            </div>

            <h1 className="text-gradient glow-text text-7xl sm:text-8xl font-bold tracking-tight mb-4">
              404
            </h1>

            <p className="text-xl font-serif text-foreground mb-2">Lost in the phase space</p>
            <p className="text-muted-foreground mb-8">
              The page at <span className="text-primary/80 font-mono text-sm break-all">{location.pathname}</span>{" "}
              doesn't exist, or has wandered off the trajectory.
            </p>

            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

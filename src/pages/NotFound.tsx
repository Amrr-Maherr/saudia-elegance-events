import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-accent">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">عذراً! الصفحة المطلوبة غير موجودة</p>
        <p className="mb-8 text-muted-foreground">يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها</p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-gradient-gold text-luxury-foreground font-semibold rounded-lg shadow-gold hover:shadow-xl transition-all duration-300"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

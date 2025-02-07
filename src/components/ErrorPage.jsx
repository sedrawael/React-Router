import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - الصفحة غير موجودة</h1>
      <p>عذرًا، الصفحة التي تحاول الوصول إليها غير متوفرة.</p>
      <Link to="/a"> العودة إلى الصفحة الرئيسية</Link>
    </div>
  );
};

export default ErrorPage;

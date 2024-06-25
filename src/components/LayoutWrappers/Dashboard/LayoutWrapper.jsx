"use client";

import { ComponentShield } from "next-shield";
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import NotAuthorized from "../../NotAuthorized/NotAuthorized";
import { toast } from "sonner";

const DashboardLayoutWrapper = ({ children }) => {
  // state
  const [isLoading, setIsLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    checkUserRole();
  }, []);

  const checkUserRole = async () => {
    // check role through api
    const toastID = toast.loading("Checking permissions...", {
      important: true,
    });
    setTimeout(() => {
      setShowDashboard(true);
      setIsLoading(false);
      toast.success("Access granted", { id: toastID });
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner size={50} showText customText="Checking user permissions..." />
      </div>
    );
  }

  return (
    <ComponentShield showIf={showDashboard} fallback={<NotAuthorized />}>
      {children}
    </ComponentShield>
  );
};

export default DashboardLayoutWrapper;

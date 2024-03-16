import React from "react";
import Status from "../../../components/status";
import Charts from "../../../components/Charts/Charts";
import RecentSocialMedia from "../../../components/RecentSocialMedia";
import RecentVideo from "../../../components/RecentVideo";
import Corporate from "../../../components/RecentCorporate";
import RecentCorporate from "../../../components/RecentCorporate";

const DashboardHome = () => {
  return (
    <div className="ml-[24px]">
      <h1 className="text-[44px] ">Overview</h1>
      <Status />
      <Charts />
      <div className="flex gap-5 mt-[24px]">
        <RecentSocialMedia/>
        <RecentVideo/>
        <RecentCorporate/>
      </div>
    </div>
  );
};

export default DashboardHome;

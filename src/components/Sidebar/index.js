import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SideNavigation from "@cloudscape-design/components/side-navigation";

const Sidebar = () => {
  const [activeHref, setActiveHref] = React.useState("/app/dashboard");
  const navigate = useNavigate();
  const location = useLocation();

  // Update activeHref when the location changes
  useEffect(() => {
    setActiveHref(location.pathname);
  }, [location]);

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "PTR Technologies" }}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
          navigate(event.detail.href);
        }
      }}
      items={[
        { type: "link", text: "Dashboard", href: "/app/dashboard" },
        { type: "link", text: "Search", href: "/app/search" },
        { type: "link", text: "Admin Actions", href: "/app/admin-actions" },
        { type: "link", text: "Add Event", href: "/app/add-events" },
       
        {
          type: "section",
          text: "Expenses",
          items: [
            {
              type: "link",
              text: "Add Petty Cash",
              href: "/app/expenses/petty-cash"
            },
            {
              type: "link",
              text: "Add Expenses",
              href: "/app/expenses/espenses"
            },
          ]
        },
        {
          type: "section",
          text: "Configurations",
          items: [
            {
              type: "link",
              text: "Programs",
              href: "/app/configurations/programs"
            },
            {
              type: "link",
              text: "Banks",
              href: "/app/configurations/bank"
            },
            {
              type: "link",
              text: "Industries",
              href: "/app/configurations/industries"
            },
            {
              type: "link",
              text: "Occupations",
              href: "/app/configurations/occupations"
            },
            {
              type: "link",
              text: "Beneficiaries Occupations",
              href: "/app/configurations/beneficiary-occupations"
            },
            {
              type: "link",
              text: "Beneficiary Types",
              href: "/app/configurations/beneficiary-types"
            },
          ]
        },
        {
          type: "section",
          text: "Applications",
          items: [
            {
              type: "link",
              text: "ESP Applications",
              href: "#/page7"
            },
            {
              type: "link",
              text: "HSP Applications",
              href: "#/page8"
            },
            {
              type: "link",
              text: "WSP Applications",
              href: "#/page8"
            },
            {
              type: "link",
              text: "EDP Applications",
              href: "#/page8"
            },
          ]
        },
        { type: "link", text: "NGO's", href: "/app/ngos" },
        { type: "link", text: "Volunteers", href: "/app/volunteers" },
        { type: "link", text: "Beneficiary", href: "/app/beneficiary" },
        { type: "link", text: "Donors", href: "/app/donors" },
      ]}
    />
  );
};

export default Sidebar;

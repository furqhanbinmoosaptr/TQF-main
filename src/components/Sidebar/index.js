import React from 'react'
import { useNavigate } from 'react-router-dom';
import SideNavigation from "@cloudscape-design/components/side-navigation";

const Sidbar = () => {
  const [activeHref, setActiveHref] = React.useState("/app/dashboard");
  const navigate = useNavigate();

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


        { type: "divider" },
        {
          type: "link",
          text: "Settings",
          href: "https://example.com",
        },
        { type: "link", text: "NGO's", href: "/app/ngos" },
        { type: "link", text: "Volunteers", href: "/app/volunteers" },
        { type: "link", text: "Beneficiary", href: "/app/beneficiary" },
        { type: "link", text: "Donors", href: "/app/donors" },
      ]}
    />
  )
}

export default Sidbar
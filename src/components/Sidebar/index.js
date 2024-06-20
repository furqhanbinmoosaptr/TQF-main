import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideNavigation from "@cloudscape-design/components/side-navigation";

// Dummy items array as in your previous example
const items = [
  { type: 'link', text: 'Dashboard', href: '/app/dashboard' },
  { type: 'link', text: 'Search', href: '/app/search' },
  { type: 'link', text: 'Team Members', href: '/app/admin-actions' },
  { type: 'link', text: 'Add Event', href: '/app/add-events' },
  {
    type: 'section',
    text: 'Expenses',
    items: [
      { type: 'link', text: 'Petty Cash', href: '/app/expenses/petty-cash' },
      { type: 'link', text: 'Expenses', href: 'app/expenses/expenses' },
    ],
  },
  {
    type: 'section',
    text: 'Configurations',
    items: [
      { type: 'link', text: 'Programs', href: '/app/configurations/programs' },
      { type: 'link', text: 'Bank', href: '/configurations/bank/list' },
      { type: 'link', text: 'Industries', href: '/configurations/industries/list' },
      { type: 'link', text: 'Occupations', href: '/configurations/occupations/list' },
      { type: 'link', text: 'Beneficiary Types', href: '/configurations/beneficiary_types/list' },
      { type: 'link', text: 'Beneficiary Occupations', href: '/configurations/beneficiary_occupations/list' },
    ],
  },
  {
    type: 'section',
    text: 'Applications',
    items: [
      { type: 'link', text: 'ESP Applications', href: '/Applications/ESP_applications/list' },
      { type: 'link', text: 'HSP Applications', href: '/Applications/HSP_applications/list' },
      { type: 'link', text: 'WSP Applications', href: '/Applications/WSP_applications/list' },
      { type: 'link', text: 'EDP Applications', href: 'app/applications/edp' },
    ],
  },
  { type: 'link', text: 'NGO\'s', href: '/app/ngos' },
  { type: 'link', text: 'Volunteers', href: '/app/volunteers' },
  { type: 'link', text: 'Beneficiary', href: '/app/beneficiary' },
  { type: 'link', text: 'Donors', href: '/app/Donors' },

  { type: 'link', text: 'Donations', href: '/app/donations' },
  { type: 'link', text: 'Historic Applications', href: '/app/historic-applications' },
];

const Sidebar = () => {
  const location = useLocation();
  const [activeHref, setActiveHref] = useState(location.pathname);

  return (
    <SideNavigation
      activeHref={activeHref}
      header={{ href: "#/", text: "Service name" }}
      onFollow={event => {
        if (!event.detail.external) {
          event.preventDefault();
          setActiveHref(event.detail.href);
        }
      }}
      items={items.map(item => {
        if (item.type === 'link') {
          return {
            ...item,
            href: item.href,
            text: <Link to={item.href}>{item.text}</Link>,
          };
        } else if (item.type === 'section') {
          return {
            ...item,
            items: item.items.map(subItem => ({
              ...subItem,
              href: subItem.href,
              text: <Link to={subItem.href}>{subItem.text}</Link>,
            })),
          };
        }
        return item;
      })}
    />
  );
};

export default Sidebar;

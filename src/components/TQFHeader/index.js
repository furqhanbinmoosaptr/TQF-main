import React, { Component } from "react";

import TopNavigation from "@cloudscape-design/components/top-navigation";
import Input from "@cloudscape-design/components/input";

class TQFHeader extends Component {
  render() {
    return (
   <div className="header">
  <TopNavigation
      identity={{
        href: "#",
        title: "The Quran Foundation",
        logo: {
          src: "/logo-small-top-navigation.svg",
          alt: "Service"
        }
      }}

      utilities={[
        {
          type: "menu-dropdown",
          ariaLabel: "Settings",
          iconName: "add-plus",
          title:'Add Application',
          items: [
            { id: "espApplication", text: "ESP Application", href:'/app/form_esp'},
            { id: "HspApplication", text: "HSP Application", href:'/app/form_esp'},
            { id: "wspApplication", text: "WSP Application", href:'/app/form_esp'},
            { id: "edpApplication", text: "EDP Application", href:'/app/form_esp'},
            // { id: "signout", text: "Sign out" }
          ]
        },
   
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Salman Bin Moosa",
          description: "salmanbinmoosa@gmail.com",
          iconName: "user-profile",
          items: [
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
      search={
        <Input
          type="search"
          placeholder="Search"
          ariaLabel="Search"
        />
      }
    />

   </div>
    );
  }
}
export default TQFHeader;

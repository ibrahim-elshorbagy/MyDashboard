import SidebarDisplay from "@/Components/SidebarDisplay";
import {
    MdDashboard,
} from "react-icons/md";


const Sidebar = ({ user }) => {
    const sections = [
        //Admin

        {
            title: "Dashboard",
            links: [
                {
                    text: "All Dashboard",
                    href: "profile.edit",
                    icon: MdDashboard,
                    roles: ["admin"],
                },
            ],
            icon: MdDashboard,
            roles: ["admin"],
        },
    ];

    // Filter sections and links based on user roles
    const filteredSections = sections
        .map((section) => ({
            ...section,
            links: section.links.filter((link) =>
                link.roles.some((role) => user.roles.includes(role))
            ),
        }))
        .filter(
            (section) =>
                section.roles.some((role) => user.roles.includes(role)) &&
                section.links.length > 0
        );

    return <SidebarDisplay sections={filteredSections} />;
};

export default Sidebar;

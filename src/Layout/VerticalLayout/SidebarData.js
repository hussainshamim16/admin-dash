const SidebarData = [
    {
        label: "Menu",
        isMainMenu: true,
    },
    {
        label: "Dashboard",
        icon: "mdi mdi-home-variant-outline",
        url: "/dashboard",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "3"
    },
    {
        label: "Customers",
        icon: "ri-table-2",
        url: "/tables-basic",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "4"
    },
    {
        label: "Sellers",
        icon: "ri-map-pin-line",
        url: "/chart-apexcharts",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "8"
    },
    {
        label: "Property",
        icon: "ri-share-line",
        url: "/table-datatables",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "9"
    },
    {
        label: "Tenants",
        icon: "mdi mdi-home-variant-outline",
        url: "/chart-jknobcharts",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "1"
    },
    {
        label: "Projects",
        icon: "ri-table-2",
        url: "/chart-chartjscharts",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "6"
    },
    {
        label: "Contract",
        icon: "ri-bar-chart-line",
        url: "/inbox",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "6"
    },
    {
        label: "Users",
        icon: "ri-brush-line",
        url: "/tables-listjs",
        issubMenubadge: true,
        bgcolor: "bg-primary",
        badgeValue: "4"
    }
    // {
    //     label: "Calendar",
    //     icon: "mdi mdi-calendar-outline",
    //     isHasArrow: true,
    //     url: "/calendar",
    // },
    // {
    //     label: "Email",
    //     icon: "mdi mdi-email-outline",
    //     subItem: [
    //         { sublabel: "Inbox", link: "/inbox" }, // CONTACT
    //         { sublabel: "Read Email", link: "/read-email" },
    //         { sublabel: "Email Compose", link: "/compose-email" },
    //     ],
    // },
    // {
    //     label: "Pages",
    //     isMainMenu: true,
    // },
    // {
    //     label: "Authentication",
    //     icon: "mdi mdi-account-circle-outline",
    //     subItem: [
    //         { sublabel: "Login", link: "/auth-login" },
    //         { sublabel: "Register", link: "/auth-register" },
    //         { sublabel: "Recover Password", link: "/auth-recoverpw" },
    //         { sublabel: "Lock Screen", link: "/auth-lock-screen" },
    //     ],
    // },
    // {
    //     label: "Utility",
    //     icon: "mdi mdi-format-page-break",
    //     subItem: [
    //         { sublabel: "Starter Page", link: "/pages-starter" },
    //         { sublabel: "Maintenance", link: "/pages-maintenance" },
    //         { sublabel: "Coming Soon", link: "/pages-comingsoon" },
    //         { sublabel: "Timeline", link: "/pages-timeline" },
    //         { sublabel: "FAQs", link: "/pages-faqs" },
    //         { sublabel: "Pricing", link: "/pages-pricing" },
    //         { sublabel: "Error 404", link: "/pages-404" },
    //         { sublabel: "Error 500", link: "/pages-500" },
    //     ],
    // },
    // {
    //     label: "Components",
    //     isMainMenu: true,
    // },
    // {
    //     label: "UI Elements",
    //     icon: "mdi mdi-briefcase-variant-outline",
    //     subItem: [
    //         { sublabel: "Alerts", link: "/ui-alerts" },
    //         { sublabel: "Badge", link: "/ui-badge" },
    //         { sublabel: "Breadcrumb", link: "/ui-breadcrumb" },
    //         { sublabel: "Buttons", link: "/ui-buttons" },
    //         { sublabel: "Cards", link: "/ui-cards" },
    //         { sublabel: "Carousel", link: "/ui-carousel" },
    //         { sublabel: "Dropdowns", link: "/ui-dropdowns" },
    //         { sublabel: "Grid", link: "/ui-grid" },
    //         { sublabel: "Images", link: "/ui-images" },
    //         { sublabel: "Lightbox", link: "/ui-lightbox" },
    //         { sublabel: "Modals", link: "/ui-modals" },
    //         { sublabel: "Offcanvas", link: "/ui-offcanvas" },
    //         { sublabel: "Range Slider", link: "/ui-rangeslider" },
    //         { sublabel: "Session Timeout", link: "/ui-sessiontimeout" },
    //         { sublabel: "Pagination", link: "/ui-pagination" },
    //         { sublabel: "Progress Bars", link: "/ui-progressbars" },
    //         { sublabel: "Placeholders", link: "/ui-placeholders" },
    //         { sublabel: "Tabs & Accordions", link: "/ui-tabs-accordions" },
    //         { sublabel: "Typography", link: "/ui-typography" },
    //         { sublabel: "Toasts", link: "/ui-toasts" },
    //         { sublabel: "Video", link: "/ui-video" },
    //         { sublabel: "Popovers & Tooltips", link: "/ui-popovers" },
    //         { sublabel: "Rating", link: "/ui-rating" },
    //     ],
    // },
    // {
    //     label: "Forms",
    //     icon: "ri-eraser-fill",
    //     issubMenubadge: true,
    //     bgcolor: "bg-danger",
    //     badgeValue: "8",
    //     subItem: [
    //         { sublabel: "Form Elements", link: "/form-elements" },
    //         { sublabel: "Form Validation", link: "/form-validation" },
    //         { sublabel: "Form Advanced Plugins", link: "/form-advanced" },
    //         { sublabel: "Form Editor", link: "/form-editor" },
    //         { sublabel: "Form File Upload", link: "/form-uploads" },
    //         { sublabel: "Form Wizard", link: "/form-wizard" },
    //         { sublabel: "Form Mask", link: "/form-mask" },
    //     ],
    // },
    // {
    //     label: "Tables",
    //     icon: "ri-table-2",
    //     subItem: [
    //         { sublabel: "Basic Tables", link: "/tables-basic" },// CUSTOMMER
    //         { sublabel: "List Js", link: "/tables-listjs" }, // userS
    //         { sublabel: "React Datatables", link: "/table-datatables" }, // PRPERTY
    //     ],
    // },
    // {
    //     label: "Charts",
    //     icon: "ri-bar-chart-line",
    //     subItem: [
    //         { sublabel: "Apex Charts", link: "/chart-apexcharts" }, // SELLER   
    //         { sublabel: "Chartjs Charts", link: "/chart-chartjscharts" }, // PROJECTS
    //         { sublabel: "Re Charts", link: "/chart-floatcharts" },
    //         { sublabel: "Knob Charts", link: "/chart-jknobcharts" }, // TENANS
    //         { sublabel: "Sparkline Charts", link: "/chart-sparklinecharts" },
    //     ],
    // },
    // {
    //     label: "Icons",
    //     icon: "ri-brush-line",
    //     subItem: [
    //         { sublabel: "Box Icons", link: "/icon-boxicon" },
    //         { sublabel: "Material Design", link: "/icons-materialdesign" },
    //         { sublabel: "Dripicons", link: "/icon-dripicons" },
    //         { sublabel: "Font Awesome", link: "/icons-fontawesome" },
    //     ],
    // },
    // {
    //     label: "Maps",
    //     icon: "ri-map-pin-line",
    //     subItem: [
    //         { sublabel: "Google Maps", link: "/maps-google" },
    //         { sublabel: "Vector Maps", link: "/maps-vector" },
    //     ],
    // },
    // {
    //     label: "Multi Level",
    //     icon: "ri-share-line",
    //     subItem: [
    //         { sublabel: "Level 1.1", link: "/#" },
    //         {
    //             sublabel: "Level 1.2", link: "/#",
    //             subMenu: [
    //                 { title: "Level 2.1" },
    //                 { title: "Level 2.2" },
    //             ],
    //         },
    //     ],
    // },
]
export default SidebarData;
## API node.js + client React com Material UI por Roger Borges

## Node 18.0.0

> nvm use 18.0.0

> Iniciando a Api node.js
```bash
$ git clone https://github.com/rogerbage/node-material-react.git
$ cd node-material-react
$ cd node-api
$ yarn install
$ mv env.sample .env
$ yarn run start:dev
```

> Configure uma conta em mongodb.com e cole no arquivo .env:
DB_LINK="user:xxxxxxx@cluster0.lirqm0n.mongodb.net/"

> Em outro terminal:

```bash
$ cd material-react-app
$ yarn install
$ mv env.sample .env
$ yarn run start
```


> Tree
```
./src
├── App.js
├── assets
│   ├── images
│   │   ├── apple-icon.png
│   │   ├── bg-profile.jpeg
│   │   ├── bg-reset-cover.jpeg
│   │   ├── bg-sign-in-basic.jpeg
│   │   ├── bg-sign-up-cover.jpeg
│   │   ├── bruce-mars.jpg
│   │   ├── favicon.png
│   │   ├── home-decor-1.jpg
│   │   ├── home-decor-2.jpg
│   │   ├── home-decor-3.jpg
│   │   ├── home-decor-4.jpeg
│   │   ├── icons
│   │   │   └── flags
│   │   │       ├── AU.png
│   │   │       ├── BR.png
│   │   │       ├── DE.png
│   │   │       ├── GB.png
│   │   │       └── US.png
│   │   ├── illustrations
│   │   │   └── pattern-tree.svg
│   │   ├── ivana-square.jpg
│   │   ├── kal-visuals-square.jpg
│   │   ├── logo-ct-dark.png
│   │   ├── logo-ct.png
│   │   ├── logos
│   │   │   ├── gray-logos
│   │   │   │   ├── logo-coinbase.svg
│   │   │   │   ├── logo-nasa.svg
│   │   │   │   ├── logo-netflix.svg
│   │   │   │   ├── logo-pinterest.svg
│   │   │   │   ├── logo-spotify.svg
│   │   │   │   └── logo-vodafone.svg
│   │   │   ├── mastercard.png
│   │   │   └── visa.png
│   │   ├── marie.jpg
│   │   ├── small-logos
│   │   │   ├── bootstrap.svg
│   │   │   ├── creative-tim.svg
│   │   │   ├── devto.svg
│   │   │   ├── github.svg
│   │   │   ├── google-webdev.svg
│   │   │   ├── icon-bulb.svg
│   │   │   ├── logo-asana.svg
│   │   │   ├── logo-atlassian.svg
│   │   │   ├── logo-invision.svg
│   │   │   ├── logo-jira.svg
│   │   │   ├── logo-slack.svg
│   │   │   ├── logo-spotify.svg
│   │   │   └── logo-xd.svg
│   │   ├── team-1.jpg
│   │   ├── team-2.jpg
│   │   ├── team-3.jpg
│   │   ├── team-4.jpg
│   │   └── team-5.jpg
│   ├── theme
│   │   ├── base
│   │   │   ├── borders.js
│   │   │   ├── boxShadows.js
│   │   │   ├── breakpoints.js
│   │   │   ├── colors.js
│   │   │   ├── globals.js
│   │   │   └── typography.js
│   │   ├── components
│   │   │   ├── appBar.js
│   │   │   ├── avatar.js
│   │   │   ├── breadcrumbs.js
│   │   │   ├── button
│   │   │   │   ├── contained.js
│   │   │   │   ├── index.js
│   │   │   │   ├── outlined.js
│   │   │   │   ├── root.js
│   │   │   │   └── text.js
│   │   │   ├── buttonBase.js
│   │   │   ├── card
│   │   │   │   ├── cardContent.js
│   │   │   │   ├── cardMedia.js
│   │   │   │   └── index.js
│   │   │   ├── container.js
│   │   │   ├── dialog
│   │   │   │   ├── dialogActions.js
│   │   │   │   ├── dialogContent.js
│   │   │   │   ├── dialogContentText.js
│   │   │   │   ├── dialogTitle.js
│   │   │   │   └── index.js
│   │   │   ├── divider.js
│   │   │   ├── flatpickr.js
│   │   │   ├── form
│   │   │   │   ├── autocomplete.js
│   │   │   │   ├── checkbox.js
│   │   │   │   ├── formControlLabel.js
│   │   │   │   ├── formLabel.js
│   │   │   │   ├── input.js
│   │   │   │   ├── inputLabel.js
│   │   │   │   ├── inputOutlined.js
│   │   │   │   ├── radio.js
│   │   │   │   ├── select.js
│   │   │   │   ├── switchButton.js
│   │   │   │   └── textField.js
│   │   │   ├── iconButton.js
│   │   │   ├── icon.js
│   │   │   ├── linearProgress.js
│   │   │   ├── link.js
│   │   │   ├── list
│   │   │   │   ├── index.js
│   │   │   │   ├── listItem.js
│   │   │   │   └── listItemText.js
│   │   │   ├── menu
│   │   │   │   ├── index.js
│   │   │   │   └── menuItem.js
│   │   │   ├── popover.js
│   │   │   ├── sidenav.js
│   │   │   ├── slider.js
│   │   │   ├── stepper
│   │   │   │   ├── index.js
│   │   │   │   ├── stepConnector.js
│   │   │   │   ├── stepIcon.js
│   │   │   │   ├── step.js
│   │   │   │   └── stepLabel.js
│   │   │   ├── svgIcon.js
│   │   │   ├── table
│   │   │   │   ├── tableCell.js
│   │   │   │   ├── tableContainer.js
│   │   │   │   └── tableHead.js
│   │   │   ├── tabs
│   │   │   │   ├── index.js
│   │   │   │   └── tab.js
│   │   │   └── tooltip.js
│   │   ├── functions
│   │   │   ├── boxShadow.js
│   │   │   ├── gradientChartLine.js
│   │   │   ├── hexToRgb.js
│   │   │   ├── linearGradient.js
│   │   │   ├── pxToRem.js
│   │   │   └── rgba.js
│   │   ├── index.js
│   │   └── theme-rtl.js
│   └── theme-dark
│       ├── base
│       │   ├── borders.js
│       │   ├── boxShadows.js
│       │   ├── breakpoints.js
│       │   ├── colors.js
│       │   ├── globals.js
│       │   └── typography.js
│       ├── components
│       │   ├── appBar.js
│       │   ├── avatar.js
│       │   ├── breadcrumbs.js
│       │   ├── button
│       │   │   ├── contained.js
│       │   │   ├── index.js
│       │   │   ├── outlined.js
│       │   │   ├── root.js
│       │   │   └── text.js
│       │   ├── buttonBase.js
│       │   ├── card
│       │   │   ├── cardContent.js
│       │   │   ├── cardMedia.js
│       │   │   └── index.js
│       │   ├── container.js
│       │   ├── dialog
│       │   │   ├── dialogActions.js
│       │   │   ├── dialogContent.js
│       │   │   ├── dialogContentText.js
│       │   │   ├── dialogTitle.js
│       │   │   └── index.js
│       │   ├── divider.js
│       │   ├── form
│       │   │   ├── autocomplete.js
│       │   │   ├── checkbox.js
│       │   │   ├── formControlLabel.js
│       │   │   ├── formLabel.js
│       │   │   ├── input.js
│       │   │   ├── inputLabel.js
│       │   │   ├── inputOutlined.js
│       │   │   ├── radio.js
│       │   │   ├── select.js
│       │   │   ├── switchButton.js
│       │   │   └── textField.js
│       │   ├── iconButton.js
│       │   ├── icon.js
│       │   ├── linearProgress.js
│       │   ├── link.js
│       │   ├── list
│       │   │   ├── index.js
│       │   │   ├── listItem.js
│       │   │   └── listItemText.js
│       │   ├── menu
│       │   │   ├── index.js
│       │   │   └── menuItem.js
│       │   ├── popover.js
│       │   ├── sidenav.js
│       │   ├── slider.js
│       │   ├── stepper
│       │   │   ├── index.js
│       │   │   ├── stepConnector.js
│       │   │   ├── stepIcon.js
│       │   │   ├── step.js
│       │   │   └── stepLabel.js
│       │   ├── svgIcon.js
│       │   ├── table
│       │   │   ├── tableCell.js
│       │   │   ├── tableContainer.js
│       │   │   └── tableHead.js
│       │   ├── tabs
│       │   │   ├── index.js
│       │   │   └── tab.js
│       │   └── tooltip.js
│       ├── functions
│       │   ├── boxShadow.js
│       │   ├── gradientChartLine.js
│       │   ├── hexToRgb.js
│       │   ├── linearGradient.js
│       │   ├── pxToRem.js
│       │   └── rgba.js
│       ├── index.js
│       └── theme-rtl.js
├── auth
│   ├── forgot-password
│   │   └── index.js
│   ├── login
│   │   └── index.js
│   ├── register
│   │   └── index.js
│   └── reset-password
│       └── index.js
├── components
│   ├── MDAlert
│   │   ├── index.js
│   │   ├── MDAlertCloseIcon.js
│   │   └── MDAlertRoot.js
│   ├── MDAvatar
│   │   ├── index.js
│   │   └── MDAvatarRoot.js
│   ├── MDBadge
│   │   ├── index.js
│   │   └── MDBadgeRoot.js
│   ├── MDBox
│   │   ├── index.js
│   │   └── MDBoxRoot.js
│   ├── MDButton
│   │   ├── index.js
│   │   └── MDButtonRoot.js
│   ├── MDInput
│   │   ├── index.js
│   │   └── MDInputRoot.js
│   ├── MDPagination
│   │   ├── index.js
│   │   └── MDPaginationItemRoot.js
│   ├── MDProgress
│   │   ├── index.js
│   │   └── MDProgressRoot.js
│   ├── MDSnackbar
│   │   ├── index.js
│   │   └── MDSnackbarIconRoot.js
│   └── MDTypography
│       ├── index.js
│       └── MDTypographyRoot.js
├── context
│   └── index.js
├── examples
│   ├── Breadcrumbs
│   │   └── index.js
│   ├── Cards
│   │   ├── BlogCards
│   │   │   └── SimpleBlogCard
│   │   │       └── index.js
│   │   ├── InfoCards
│   │   │   ├── DefaultInfoCard
│   │   │   │   └── index.js
│   │   │   └── ProfileInfoCard
│   │   │       └── index.js
│   │   ├── MasterCard
│   │   │   └── index.js
│   │   ├── ProjectCards
│   │   │   └── DefaultProjectCard
│   │   │       └── index.js
│   │   └── StatisticsCards
│   │       └── ComplexStatisticsCard
│   │           └── index.js
│   ├── Charts
│   │   ├── BarCharts
│   │   │   ├── HorizontalBarChart
│   │   │   │   ├── configs
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── ReportsBarChart
│   │   │   │   ├── configs
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   └── VerticalBarChart
│   │   │       ├── configs
│   │   │       │   └── index.js
│   │   │       └── index.js
│   │   ├── BubbleChart
│   │   │   ├── configs
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── DoughnutCharts
│   │   │   └── DefaultDoughnutChart
│   │   │       ├── configs
│   │   │       │   └── index.js
│   │   │       └── index.js
│   │   ├── LineCharts
│   │   │   ├── DefaultLineChart
│   │   │   │   ├── configs
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── GradientLineChart
│   │   │   │   ├── configs
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   ├── ProgressLineChart
│   │   │   │   ├── config
│   │   │   │   │   └── index.js
│   │   │   │   └── index.js
│   │   │   └── ReportsLineChart
│   │   │       ├── configs
│   │   │       │   └── index.js
│   │   │       └── index.js
│   │   ├── MixedChart
│   │   │   ├── configs
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── PieChart
│   │   │   ├── configs
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── PolarChart
│   │   │   ├── configs
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── RadarChart
│   │       ├── configs
│   │       │   └── index.js
│   │       └── index.js
│   ├── Configurator
│   │   ├── ConfiguratorRoot.js
│   │   └── index.js
│   ├── Footer
│   │   └── index.js
│   ├── Items
│   │   └── NotificationItem
│   │       ├── index.js
│   │       └── styles.js
│   ├── LayoutContainers
│   │   ├── DashboardLayout
│   │   │   └── index.js
│   │   └── PageLayout
│   │       └── index.js
│   ├── Lists
│   │   └── ProfilesList
│   │       └── index.js
│   ├── Navbars
│   │   ├── DashboardNavbar
│   │   │   ├── index.js
│   │   │   └── styles.js
│   │   └── DefaultNavbar
│   │       ├── DefaultNavbarLink.js
│   │       ├── DefaultNavbarMobile.js
│   │       └── index.js
│   ├── ProtectedRoute
│   │   └── index.js
│   ├── Sidenav
│   │   ├── index.js
│   │   ├── SidenavCollapse.js
│   │   ├── SidenavRoot.js
│   │   └── styles
│   │       ├── sidenavCollapse.js
│   │       └── sidenav.js
│   ├── Tables
│   │   └── DataTable
│   │       ├── DataTableBodyCell.js
│   │       ├── DataTableHeadCell.js
│   │       └── index.js
│   └── Timeline
│       ├── context
│       │   └── index.js
│       ├── TimelineItem
│       │   ├── index.js
│       │   └── styles.js
│       └── TimelineList
│           └── index.js
├── index.js
├── layouts
│   ├── authentication
│   │   ├── components
│   │   │   ├── BasicLayout
│   │   │   │   └── index.js
│   │   │   ├── CoverLayout
│   │   │   │   └── index.js
│   │   │   └── Footer
│   │   │       └── index.js
│   │   ├── reset-password
│   │   │   └── cover
│   │   │       └── index.js
│   │   ├── sign-in
│   │   │   └── index.js
│   │   └── sign-up
│   │       └── index.js
│   ├── billing
│   │   ├── components
│   │   │   ├── Bill
│   │   │   │   └── index.js
│   │   │   ├── BillingInformation
│   │   │   │   └── index.js
│   │   │   ├── Invoice
│   │   │   │   └── index.js
│   │   │   ├── Invoices
│   │   │   │   └── index.js
│   │   │   ├── PaymentMethod
│   │   │   │   └── index.js
│   │   │   ├── Transaction
│   │   │   │   └── index.js
│   │   │   └── Transactions
│   │   │       └── index.js
│   │   └── index.js
│   ├── dashboard
│   │   ├── components
│   │   │   ├── OrdersOverview
│   │   │   │   └── index.js
│   │   │   └── Projects
│   │   │       ├── data
│   │   │       │   └── index.js
│   │   │       └── index.js
│   │   ├── data
│   │   │   ├── reportsBarChartData.js
│   │   │   └── reportsLineChartData.js
│   │   └── index.js
│   ├── notifications
│   │   └── index.js
│   ├── profile
│   │   ├── components
│   │   │   ├── Header
│   │   │   │   └── index.js
│   │   │   └── PlatformSettings
│   │   │       └── index.js
│   │   ├── data
│   │   │   └── profilesListData.js
│   │   └── index.js
│   ├── rtl
│   │   ├── components
│   │   │   ├── OrdersOverview
│   │   │   │   └── index.js
│   │   │   └── Projects
│   │   │       ├── data
│   │   │       │   └── index.js
│   │   │       └── index.js
│   │   ├── data
│   │   │   ├── reportsBarChartData.js
│   │   │   └── reportsLineChartData.js
│   │   └── index.js
│   ├── tables
│   │   ├── data
│   │   │   ├── authorsTableData.js
│   │   │   └── projectsTableData.js
│   │   └── index.js
│   ├── user-management
│   │   ├── data.js
│   │   └── index.js
│   └── user-profile
│       ├── Header
│       │   └── index.js
│       ├── index.js
│       └── PlatformSettings
│           └── index.js
├── routes.js
└── services
    ├── auth-service.js
    ├── htttp.service.js
    └── interceptor.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- [Live Preview](https://github.com/teamupdivision/material-dashboard-react-node-free?ref=readme-mdr)
- [Download Page]https://www.creative-tim.com/product/material-dashboard-react-nodejs?ref=readme-mdr)
- Documentation is [here](https://material-dashboard-react-node-docs.creative-tim.com/react/quick-start/material-dashboard-node/?ref=readme-mdr)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-mdr)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-mdr)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/material-dashboard-react-nodejs/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Material Dashboard React. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Material Dashboard React. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/material-dashboard-react-nodejs?ref=readme-mdr).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us?ref=readme-mdr) instead of opening an issue.

## Licensing

- Copyright 2021 [Creative Tim](https://www.creative-tim.com?ref=readme-mdr)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-mdr)

## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-mdr) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-mdr) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-mdr) (earn money)

### Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=mdl-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=mdl-readme>

Dribbble: <https://dribbble.com/creativetim?ref=mdl-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=mdl-readme>

### Updivision:

Twitter: <https://twitter.com/updivision?ref=mdl-readme>

Facebook: <https://www.facebook.com/updivision?ref=mdl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=mdl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=mdl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=mdl-readme)
- [UPDIVISION](https://updivision.com)

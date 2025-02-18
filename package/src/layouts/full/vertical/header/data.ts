import user1 from '../../../../assets/images/profile/user-1.jpg';
import user2 from '../../../../assets/images/profile/user-2.jpg';
import user3 from '../../../../assets/images/profile/user-3.jpg';
import user4 from '../../../../assets/images/profile/user-4.jpg';
import user5 from '../../../../assets/images/profile/user-5.jpg';
import user6 from '../../../../assets/images/profile/user-6.jpg';

interface notificationType {
  title: string;
  subtitle: string;
  icon: any;
  bgcolor: string;
  color: string;
  time: string;
}

const notifications: notificationType[] = [
  {
    icon: 'solar:widget-3-line-duotone',
    bgcolor: `primary.light`,
    color: 'primary.main',
    title: 'Launch Admin',
    subtitle: 'Just see the my new admin!',
    time: '9:30 AM',
  },
  {
    icon: 'solar:calendar-mark-line-duotone',
    bgcolor: `secondary.light`,
    color: 'secondary.main',
    title: 'Event Today',
    subtitle: 'Just a reminder that you have event',
    time: '9:10 AM',
  },
  {
    icon: 'solar:settings-minimalistic-line-duotone',
    bgcolor: `error.light`,
    color: 'error.main',
    title: 'Event Today',
    subtitle: 'Just a reminder that you have event',
    time: '9:08 AM',
  },
  {
    icon: 'solar:link-circle-line-duotone',
    bgcolor: `warning.light`,
    color: 'warning.main',
    title: 'Launch Today',
    subtitle: 'Just see the my new admin!',
    time: '9:20 AM',
  },
  {
    icon: 'solar:calendar-mark-line-duotone',
    bgcolor: `success.light`,
    color: 'success.main',
    title: 'Event Today',
    subtitle: 'Just a reminder that you have event',
    time: '9:30 AM',
  },
  {
    icon: 'solar:settings-minimalistic-line-duotone',
    bgcolor: `primary.light`,
    color: 'primary.main',
    title: 'Settings',
    subtitle: 'You can customize this template.',
    time: '9:10 AM',
  },
];

// Messages dropdown

interface messageType {
  title: string;
  subtitle: string;
  avatar: string;
  time: string;
}

const messages: messageType[] = [
  {
    avatar: user1,
    title: 'Mathew Anderson',
    subtitle: 'Just see the my new admin!',
    time: '9:30 AM',
  },
  {
    avatar: user2,
    title: 'Bianca Anderson',
    subtitle: 'Just a reminder that you have event',
    time: '9:10 AM',
  },
  {
    avatar: user3,
    title: 'Andrew Johnson',
    subtitle: 'You can customize this template as you ...',
    time: '9:08 AM',
  },
  {
    avatar: user4,
    title: 'Miyra Strokes',
    subtitle: 'Just see the my new admin!',
    time: '9:30 AM',
  },
  {
    avatar: user5,
    title: 'Mark, Stoinus & Rishvi..',
    subtitle: 'Just a reminder that you have event',
    time: '9:10 AM',
  },
  {
    avatar: user6,
    title: 'Eliga Rush',
    subtitle: 'You can customize this template as you ...',
    time: '9:20 AM',
  },
];

//
// Profile dropdown
//
interface ProfileType {
  href: string;
  title: string;
}
const profile: ProfileType[] = [
  {
    href: '/',
    title: 'My Profile',
  },
  {
    href: '/',
    title: 'My Projects',
  },
  {
    href: '/',
    title: 'Inbox',
  },
];

// apps dropdown

interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  icon: any;
  bgcolor: string;
  color: string;
}

const appsLink: appsLinkType[] = [
  {
    href: '/',
    title: 'Chat Application',
    subtext: 'New messages arrived',
    icon: 'solar:chat-line-linear',
    bgcolor: `primary.light`,
    color: 'primary.main',
  },
  {
    href: '/',
    title: 'User Profile',
    subtext: 'Learn more information',
    icon: 'solar:shield-user-line-duotone',
    bgcolor: `error.light`,
    color: 'error.main',
  },
  {
    href: '/',
    title: 'Notes App',
    subtext: 'Get regular notes',
    icon: 'solar:palette-linear',
    bgcolor: `secondary.light`,
    color: 'secondary.main',
  },
  {
    href: '/',
    title: 'Calendar App',
    subtext: 'Get dates',
    icon: 'solar:calendar-linear',
    bgcolor: `primary.light`,
    color: 'primary.main',
  },
  {
    href: '/',
    title: 'Contact Application',
    subtext: '2 Unsaved contact',
    icon: 'solar:iphone-line-duotone',
    bgcolor: `success.light`,
    color: 'success.main',
  },
  {
    href: '/',
    title: 'eCommerce App',
    subtext: 'New stock available',
    icon: 'solar:cart-2-line-duotone',
    bgcolor: `secondary.light`,
    color: 'secondary.main',
  },
  {
    href: '/',
    title: 'Email App',
    subtext: 'Get new emails',
    icon: 'solar:letter-unread-linear',
    bgcolor: `warning.light`,
    color: 'warning.main',
  },
  {
    href: '/',
    title: 'Ticket Application',
    subtext: 'Get structured tickets',
    icon: 'solar:ticket-sale-line-duotone',
    bgcolor: `success.light`,
    color: 'success.main',
  },
];

interface LinkType {
  href: string;
  title: string;
}

const pageLinks: LinkType[] = [
  {
    href: '/',
    title: 'Pricing Page',
  },
  {
    href: '/',
    title: 'Authentication Design',
  },
  {
    href: '/',
    title: 'Register Now',
  },
  {
    href: '/',
    title: '404 Error Page',
  },
  {
    href: '/',
    title: 'Notes App',
  },
  {
    href: '/',
    title: 'User Application',
  },
  {
    href: '/',
    title: 'Account Setting',
  },
];

export { notifications, profile, pageLinks, appsLink, messages };

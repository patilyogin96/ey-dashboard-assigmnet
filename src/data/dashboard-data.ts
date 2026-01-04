import { ICONS } from "@/assets/sidebar-icons/icons";
import type { Activity } from "@/types/card.types";

export const TRANSACTIONS_DATA = [
  { id: 1, type: 'Paypal', description: 'Received Money', amount: 24820, isPositive: true, bgColor: 'bg-red-50' , icon: ICONS.paypal},
  { id: 2, type: 'Credit Card', description: 'Digital Ocean', amount: 1250, isPositive: false, bgColor: 'bg-green-50', icon: ICONS.creditcard },
  { id: 3, type: 'Mastercard', description: 'Netflix', amount: 99, isPositive: false, bgColor: 'bg-yellow-50', icon: ICONS.mastercard },
  { id: 4, type: 'Wallet', description: "Mac'D", amount: 82, isPositive: false, bgColor: 'bg-purple-50' ,icon: ICONS.wallet},
  { id: 5, type: 'Transfer', description: 'Refund', amount: 8934, isPositive: true, bgColor: 'bg-blue-50', icon: ICONS.transfer },
  { id: 6, type: 'Wallet', description: 'Buy Apple Watch', amount: 399, isPositive: false, bgColor: 'bg-purple-50',icon: ICONS.wallet },
];

export const PLAN_DATA = {
  name: 'Platinum',
  subtitle: 'Upgrade Plan',
  price: 5250,
  description: 'Plase make the payment to start enjoying all the features of our premium plan as soon as possible.',
  paymentMethods: [
    { id: 1, type: 'Credit card', lastFour: '8908', cardColor: 'bg-gradient-to-br from-red-400 to-orange-500' },
    { id: 2, type: 'Credit card', lastFour: '8908', cardColor: 'bg-gradient-to-br from-blue-400 to-cyan-500' },
  ]
};

export const MEETING_DATA = [
  { id: 1, title: 'Call with Woods', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-blue-200', tag: 'Business', tagColor: 'bg-purple-100 text-purple-600' },
  { id: 2, title: 'Call with hilda', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-green-200', tag: 'Meditation', tagColor: 'bg-green-100 text-green-600' },
  { id: 3, title: 'Conference call', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-orange-200', tag: 'Dinner', tagColor: 'bg-orange-100 text-orange-600' },
  { id: 4, title: 'Meeting with Mark', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-gray-200', tag: 'Meetup', tagColor: 'bg-gray-100 text-gray-600' },
  { id: 5, title: 'Meeting in Oakland', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-red-200', tag: 'Dinner', tagColor: 'bg-red-100 text-red-600' },
  { id: 6, title: 'Meeting with Carl', date: '21 Jul', time: '08:20-10:30', avatarColor: 'bg-purple-200', tag: 'Business', tagColor: 'bg-purple-100 text-purple-600' },
];


export const SAMPLE_ACTIVITIES: Activity[] = [
    {
      dotColor: 'red',
      title: '8 Invoices have been paid',
      date: 'Wednesday',
      description: 'Invoices have been paid to the company.',
      metaData:{
          name: 'invoice.pdf',
          attachment:ICONS.invoice

      }
    },
    {
      dotColor: 'purple',
      title: 'Create a new project for client 😎',
      date: 'April, 18',
      description: 'Invoices have been paid to the company.',
       metaData:{
          name: 'John Doe (Client)',
          attachment:ICONS.defaultAvatar
      }
    },
    {
      dotColor: 'blue',
      title: 'Order #37745 from September',
      date: 'January, 10',
      description: 'Invoices have been paid to the company.'
    }
  ];
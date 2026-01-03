
export interface Transaction {
  id: number | string;
  type: 'Paypal' | 'Credit Card' | 'Mastercard' | 'Wallet' | 'Transfer' | string;
  description: string;
  amount: number;
  isPositive: boolean;
  bgColor: string;
}

export interface TransactionCardProps {
  transactions: Transaction[];
}

// Upgrade Plan Types
export interface PaymentMethod {
  id: number | string;
  type: string;
  lastFour: string;
  cardColor: string;
}

export interface PlanData {
  name: string;
  subtitle: string;
  price: number;
  description: string;
  paymentMethods: PaymentMethod[];
}

export interface UpgradePlanCardProps {
  plan: PlanData;
}

// Meeting Schedule Types
export interface Meeting {
  id: number | string;
  title: string;
  date: string;
  time: string;
  avatarColor: string;
  tag: string;
  tagColor: string;
}

export interface MeetingScheduleCardProps {
  meetings: Meeting[];
}

// Dashboard Props (if you want to pass all data to main component)
export interface DashboardProps {
  transactions?: Transaction[];
  plan?: PlanData;
  meetings?: Meeting[];
}

// API Response Types (example structure for when you integrate with API)
export interface TransactionApiResponse {
  data: Transaction[];
  total: number;
  page: number;
}

export interface PlanApiResponse {
  data: PlanData;
  status: string;
}

export interface MeetingApiResponse {
  data: Meeting[];
  total: number;
}

// // Enum for Transaction Types (optional, for better type safety)
// export enum TransactionType {
//   PAYPAL = 'Paypal',
//   CREDIT_CARD = 'Credit Card',
//   MASTERCARD = 'Mastercard',
//   WALLET = 'Wallet',
//   TRANSFER = 'Transfer',
// }

// // Enum for Meeting Tags (optional)
// export enum MeetingTag {
//   BUSINESS = 'Business',
//   MEDITATION = 'Meditation',
//   DINNER = 'Dinner',
//   MEETUP = 'Meetup',
// }

// Color utility types
export type BgColorClass = `bg-${string}`;
export type TextColorClass = `text-${string}`;

// Extended types with optional fields (for partial updates)
export type PartialTransaction = Partial<Transaction> & Pick<Transaction, 'id'>;
export type PartialMeeting = Partial<Meeting> & Pick<Meeting, 'id'>;
export type PartialPaymentMethod = Partial<PaymentMethod> & Pick<PaymentMethod, 'id'>;


export interface Client {
  name: string;
  avatar: string;
}

export interface Activity {
  dotColor: 'red' | 'purple' | 'blue';
  title: string;
  date: string;
  description: string;
  attachment?: string;
  client?: Client;
}

export interface ActivityTimelineProps {
  headerImage: string;
  activities: Activity[];
}

export interface TimelineItemProps {
  activity: Activity;
  isLast: boolean;
}
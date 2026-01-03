import CalendarToday from "./CalendarToday.svg";
import ChatBubbleOutline from "./ChatBubbleOutline.svg";
import ContentCopy from "./ContentCopy.svg";
import ContentPaste from "./ContentPaste.svg";
import CreditCard from "./CreditCard.svg";
import FormElements from "./formElements.svg";
import FormValidation from "./formvalidation.svg";
import Icon from "./Icon.svg";
import Icon1 from "./Icon1.svg";
import LaptopChromebook from "./LaptopChromebook.svg";
import LockOpen from "./LockOpen.svg";
import MailOutline from "./MailOutline.svg";
import MoreHoriz from "./MoreHoriz.svg";
import MultiGridTab from "./multiGridtab.svg";
import PersonOutline from "./PersonOutline.svg";
import PieChartOutline from "./PieChartOutline.svg";
import StarBorder from "./StarBorder.svg";
import Vector from "./Vector.svg";
import Vector1 from "./Vector1.svg";

export const ICONS = {

  calendarToday: CalendarToday,
  chatBubbleOutline: ChatBubbleOutline,
  contentCopy: ContentCopy,
  contentPaste: ContentPaste,
  creditCard: CreditCard,
  formElements: FormElements,
  formValidation: FormValidation,
  icon: Icon,
  icon1: Icon1,
  laptopChromebook: LaptopChromebook,
  lockOpen: LockOpen,
  mailOutline: MailOutline,
  moreHoriz: MoreHoriz,
  multiGridTab: MultiGridTab,
  personOutline: PersonOutline,
  pieChartOutline: PieChartOutline,
  starBorder: StarBorder,
  user: Vector,
  userAlt: Vector1,
} as const;

export type IconName = keyof typeof ICONS;

/**
 * Shared Lucide icons used across the app.
 * size defaults to 1em so CSS font-size rules continue to scale icons.
 */
import {
  ArrowRightCircle,
  ArrowUpDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Cpu,
  Disc3,
  DollarSign,
  Droplet,
  Gem,
  Hammer,
  Home,
  Images,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Radio,
  Settings,
  ShieldCheck,
  Star,
  Timer,
  Truck,
  Users,
  Wrench,
  Zap,
} from 'lucide-react'

function createIcon(LucideIcon, { fill = false } = {}) {
  function ZxIcon({ className = '', style, size = '1em', ...rest }) {
    const classes = ['zx-icon', className].filter(Boolean).join(' ')
    return (
      <LucideIcon
        className={classes}
        style={style}
        size={size}
        strokeWidth={fill ? 1.5 : 2}
        {...(fill ? { fill: 'currentColor' } : {})}
        aria-hidden="true"
        {...rest}
      />
    )
  }
  ZxIcon.displayName = LucideIcon.displayName || LucideIcon.name
  return ZxIcon
}

export const IconStarFill = createIcon(Star, { fill: true })
export const IconArrowRightCircleFill = createIcon(ArrowRightCircle, { fill: true })
export const IconTools = createIcon(Hammer)
export const IconTelephoneFill = createIcon(Phone, { fill: true })
export const IconClockFill = createIcon(Clock, { fill: true })
export const IconGearFill = createIcon(Settings, { fill: true })
export const IconShieldCheck = createIcon(ShieldCheck)
export const IconDropletFill = createIcon(Droplet, { fill: true })
export const IconPatchCheckFill = createIcon(BadgeCheck, { fill: true })
export const IconCalendarCheckFill = createIcon(CalendarCheck, { fill: true })
export const IconLightningChargeFill = createIcon(Zap, { fill: true })
export const IconGeoAltFill = createIcon(MapPin, { fill: true })
export const IconWhatsapp = createIcon(MessageCircle)
export const IconWrench = createIcon(Wrench)
export const IconClock = createIcon(Clock)
export const IconCpu = createIcon(Cpu)
export const IconLightning = createIcon(Zap)
export const IconCheckCircleFill = createIcon(CheckCircle2, { fill: true })
export const IconInfoCircle = createIcon(Info)
export const IconGem = createIcon(Gem)
export const IconTruck = createIcon(Truck)
export const IconStopwatch = createIcon(Timer)
export const IconEnvelopeFill = createIcon(Mail, { fill: true })
export const IconCheckLg = createIcon(Check)
export const IconHouseFill = createIcon(Home, { fill: true })
export const IconPeopleFill = createIcon(Users, { fill: true })
export const IconClipboardCheck = createIcon(ClipboardCheck)
export const IconImages = createIcon(Images)
export const IconCurrencyDollar = createIcon(DollarSign)
export const IconLightbulb = createIcon(Lightbulb)
export const IconChevronDown = createIcon(ChevronDown)
export const IconAward = createIcon(Award)
export const IconPatchCheck = createIcon(BadgeCheck)
export const IconDisc = createIcon(Disc3)
export const IconArrowUpRight = createIcon(ArrowUpRight)
export const IconRadio = createIcon(Radio)
export const IconArrowUpDown = createIcon(ArrowUpDown)

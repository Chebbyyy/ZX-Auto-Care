# Figma Icon Export Checklist

Source (design): [Untitled UI Icons – Figma Community](https://www.figma.com/design/t7ePJ6qyMSgd3y8w0a2fIj/%E2%9D%96-Untitled-UI-Icons-%E2%80%93-1-100--essential-Figma-icons--Community-?node-id=272-45276)

Source (SVG bytes): `@untitledui/icons` open-source pack (same Untitled UI Line family as the Figma file). Figma MCP export was blocked by Starter plan rate limits (View seat ≈ 6 calls/month).

## Style Rules

- One visual family: Untitled UI Line
- Monochrome via `currentColor` stroke
- 24×24 viewBox
- `Fill`-suffixed filenames use the closest line glyph (Untitled UI Line has no separate solid set)

## Status (2026-07-16)

| Status | Count |
|--------|------:|
| Exported | 37 / 37 |
| Missing | 0 |

## Required Icons (Currently Used)

- [x] `IconArrowRightCircleFill.svg` ← ArrowCircleRight
- [x] `IconArrowUpDown.svg` ← SwitchVertical01
- [x] `IconArrowUpRight.svg` ← ArrowUpRight
- [x] `IconAward.svg` ← Award01
- [x] `IconCalendarCheckFill.svg` ← CalendarCheck01
- [x] `IconCheckCircleFill.svg` ← CheckCircle
- [x] `IconCheckLg.svg` ← Check
- [x] `IconClipboardCheck.svg` ← ClipboardCheck
- [x] `IconClock.svg` ← Clock
- [x] `IconClockFill.svg` ← Clock
- [x] `IconCpu.svg` ← CpuChip01
- [x] `IconCurrencyDollar.svg` ← CurrencyDollar
- [x] `IconDisc.svg` ← Disc01
- [x] `IconDropletFill.svg` ← Droplets01
- [x] `IconEnvelopeFill.svg` ← Mail01
- [x] `IconGem.svg` ← Diamond01
- [x] `IconGearFill.svg` ← Settings01
- [x] `IconGeoAltFill.svg` ← MarkerPin01
- [x] `IconHouseFill.svg` ← Home01
- [x] `IconImages.svg` ← Image03
- [x] `IconInfoCircle.svg` ← InfoCircle
- [x] `IconLightbulb.svg` ← Lightbulb01
- [x] `IconLightning.svg` ← Zap
- [x] `IconLightningChargeFill.svg` ← ZapFast
- [x] `IconPatchCheck.svg` ← CheckVerified01
- [x] `IconPatchCheckFill.svg` ← CheckVerified02
- [x] `IconPeopleFill.svg` ← Users01
- [x] `IconRadio.svg` ← Signal01
- [x] `IconShieldCheck.svg` ← ShieldTick
- [x] `IconStarFill.svg` ← Star01
- [x] `IconStopwatch.svg` ← ClockStopwatch
- [x] `IconTelephoneFill.svg` ← Phone
- [x] `IconTools.svg` ← Tool01
- [x] `IconTruck.svg` ← Truck01
- [x] `IconWhatsapp.svg` ← MessageChatCircle
- [x] `IconWrench.svg` ← Tool02

## Optional

- [x] `IconChevronDown.svg` ← ChevronDown

## App wiring

`web/src/components/icons/index.jsx` now loads these SVGs (Vite `?raw`) instead of Lucide.

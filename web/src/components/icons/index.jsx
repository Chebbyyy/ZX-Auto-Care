/**
 * Icons from web/src/assets/icons/*.svg
 * Color follows each SVG's own structure (stroke/fill + currentColor)
 * and inherits from CSS `color` on the parent.
 */
import IconArrowRightCircleFillRaw from '../../assets/icons/IconArrowRightCircleFill.svg?raw'
import IconArrowUpDownRaw from '../../assets/icons/IconArrowUpDown.svg?raw'
import IconArrowUpRightRaw from '../../assets/icons/IconArrowUpRight.svg?raw'
import IconAwardRaw from '../../assets/icons/IconAward.svg?raw'
import IconCalendarCheckFillRaw from '../../assets/icons/IconCalendarCheckFill.svg?raw'
import IconCheckCircleFillRaw from '../../assets/icons/IconCheckCircleFill.svg?raw'
import IconCheckLgRaw from '../../assets/icons/IconCheckLg.svg?raw'
import IconChevronDownRaw from '../../assets/icons/IconChevronDown.svg?raw'
import IconClipboardCheckRaw from '../../assets/icons/IconClipboardCheck.svg?raw'
import IconClockRaw from '../../assets/icons/IconClock.svg?raw'
import IconClockFillRaw from '../../assets/icons/IconClockFill.svg?raw'
import IconCpuRaw from '../../assets/icons/IconCpu.svg?raw'
import IconCurrencyDollarRaw from '../../assets/icons/IconCurrencyDollar.svg?raw'
import IconDiscRaw from '../../assets/icons/IconDisc.svg?raw'
import IconDropletFillRaw from '../../assets/icons/IconDropletFill.svg?raw'
import IconEnvelopeFillRaw from '../../assets/icons/IconEnvelopeFill.svg?raw'
import IconGemRaw from '../../assets/icons/IconGem.svg?raw'
import IconGearFillRaw from '../../assets/icons/IconGearFill.svg?raw'
import IconGeoAltFillRaw from '../../assets/icons/IconGeoAltFill.svg?raw'
import IconHouseFillRaw from '../../assets/icons/IconHouseFill.svg?raw'
import IconImagesRaw from '../../assets/icons/IconImages.svg?raw'
import IconInfoCircleRaw from '../../assets/icons/IconInfoCircle.svg?raw'
import IconLightbulbRaw from '../../assets/icons/IconLightbulb.svg?raw'
import IconLightningRaw from '../../assets/icons/IconLightning.svg?raw'
import IconLightningChargeFillRaw from '../../assets/icons/IconLightningChargeFill.svg?raw'
import IconPatchCheckRaw from '../../assets/icons/IconPatchCheck.svg?raw'
import IconPatchCheckFillRaw from '../../assets/icons/IconPatchCheckFill.svg?raw'
import IconPeopleFillRaw from '../../assets/icons/IconPeopleFill.svg?raw'
import IconRadioRaw from '../../assets/icons/IconRadio.svg?raw'
import IconShieldCheckRaw from '../../assets/icons/IconShieldCheck.svg?raw'
import IconStarFillRaw from '../../assets/icons/IconStarFill.svg?raw'
import IconStopwatchRaw from '../../assets/icons/IconStopwatch.svg?raw'
import IconTelephoneFillRaw from '../../assets/icons/IconTelephoneFill.svg?raw'
import IconToolsRaw from '../../assets/icons/IconTools.svg?raw'
import IconTruckRaw from '../../assets/icons/IconTruck.svg?raw'
import IconWhatsappRaw from '../../assets/icons/IconWhatsapp.svg?raw'
import IconWrenchRaw from '../../assets/icons/IconWrench.svg?raw'

/** Keep the SVG's fill/stroke/currentColor as authored; only size for layout. */
function prepareSvg(raw) {
  return raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\swidth="[^"]*"/, '')
    .replace(/\sheight="[^"]*"/, '')
    .replace(/\saria-hidden="[^"]*"/, '')
    .trim()
}

function createIcon(rawSvg, displayName) {
  const html = prepareSvg(rawSvg)

  function ZeIcon({ className = '', style, size = '1em', ...rest }) {
    const classes = ['ze-icon', className].filter(Boolean).join(' ')
    return (
      <span
        className={classes}
        style={{ width: size, height: size, ...style }}
        dangerouslySetInnerHTML={{ __html: html }}
        aria-hidden="true"
        {...rest}
      />
    )
  }

  ZeIcon.displayName = displayName
  return ZeIcon
}

export const IconStarFill = createIcon(IconStarFillRaw, 'IconStarFill')
export const IconArrowRightCircleFill = createIcon(
  IconArrowRightCircleFillRaw,
  'IconArrowRightCircleFill',
)
export const IconTools = createIcon(IconToolsRaw, 'IconTools')
export const IconTelephoneFill = createIcon(IconTelephoneFillRaw, 'IconTelephoneFill')
export const IconClockFill = createIcon(IconClockFillRaw, 'IconClockFill')
export const IconGearFill = createIcon(IconGearFillRaw, 'IconGearFill')
export const IconShieldCheck = createIcon(IconShieldCheckRaw, 'IconShieldCheck')
export const IconDropletFill = createIcon(IconDropletFillRaw, 'IconDropletFill')
export const IconPatchCheckFill = createIcon(IconPatchCheckFillRaw, 'IconPatchCheckFill')
export const IconCalendarCheckFill = createIcon(
  IconCalendarCheckFillRaw,
  'IconCalendarCheckFill',
)
export const IconLightningChargeFill = createIcon(
  IconLightningChargeFillRaw,
  'IconLightningChargeFill',
)
export const IconGeoAltFill = createIcon(IconGeoAltFillRaw, 'IconGeoAltFill')
export const IconWhatsapp = createIcon(IconWhatsappRaw, 'IconWhatsapp')
export const IconWrench = createIcon(IconWrenchRaw, 'IconWrench')
export const IconClock = createIcon(IconClockRaw, 'IconClock')
export const IconCpu = createIcon(IconCpuRaw, 'IconCpu')
export const IconLightning = createIcon(IconLightningRaw, 'IconLightning')
export const IconCheckCircleFill = createIcon(IconCheckCircleFillRaw, 'IconCheckCircleFill')
export const IconInfoCircle = createIcon(IconInfoCircleRaw, 'IconInfoCircle')
export const IconGem = createIcon(IconGemRaw, 'IconGem')
export const IconTruck = createIcon(IconTruckRaw, 'IconTruck')
export const IconStopwatch = createIcon(IconStopwatchRaw, 'IconStopwatch')
export const IconEnvelopeFill = createIcon(IconEnvelopeFillRaw, 'IconEnvelopeFill')
export const IconCheckLg = createIcon(IconCheckLgRaw, 'IconCheckLg')
export const IconHouseFill = createIcon(IconHouseFillRaw, 'IconHouseFill')
export const IconPeopleFill = createIcon(IconPeopleFillRaw, 'IconPeopleFill')
export const IconClipboardCheck = createIcon(IconClipboardCheckRaw, 'IconClipboardCheck')
export const IconImages = createIcon(IconImagesRaw, 'IconImages')
export const IconCurrencyDollar = createIcon(IconCurrencyDollarRaw, 'IconCurrencyDollar')
export const IconLightbulb = createIcon(IconLightbulbRaw, 'IconLightbulb')
export const IconChevronDown = createIcon(IconChevronDownRaw, 'IconChevronDown')
export const IconAward = createIcon(IconAwardRaw, 'IconAward')
export const IconPatchCheck = createIcon(IconPatchCheckRaw, 'IconPatchCheck')
export const IconDisc = createIcon(IconDiscRaw, 'IconDisc')
export const IconArrowUpRight = createIcon(IconArrowUpRightRaw, 'IconArrowUpRight')
export const IconRadio = createIcon(IconRadioRaw, 'IconRadio')
export const IconArrowUpDown = createIcon(IconArrowUpDownRaw, 'IconArrowUpDown')

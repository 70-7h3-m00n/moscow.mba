import stls from '@/styles/components/costs/Loan.module.sass'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { ui, currencyRates } from '@/config/index'
import { toNumberWithSpaces } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

type TypeLoanProps = {
  discount?: boolean
  type?: string | null
  format?: string | null
  notComparingPrices?: boolean
  renderedByComponent?: string | null
  programPrice?: number | null
  variant?: 'SectionStudyCost'
}

const Loan = ({
  discount = false,
  type = null,
  format = null,
  notComparingPrices = false,
  renderedByComponent = null,
  programPrice = null,
  variant
}: TypeLoanProps) => {
  const at = useAt()

  const SSLocale = useSSLocale()

  const atKz =
    at.kz || SSLocale === 'kz' || SSLocale === 'kk' || SSLocale === 'kk_KZ'

  const atUz = at.uz || SSLocale === 'uz' || SSLocale === 'uz_UZ'

  const programPriceKzUzConsidered = atKz
    ? programPrice * currencyRates.kzt
    : atUz
    ? programPrice * currencyRates.uzm
    : programPrice

  const currencySymbol = atKz
    ? `${ui.currentlySymbols.kzt}/мес.`
    : atUz
    ? `${ui.currentlySymbols.uzm}/мес.`
    : `${ui.currentlySymbols.rubAlt}/мес.`

  const setPrice = (rub: number) => {
    return atKz
      ? toNumberWithSpaces(rub * currencyRates.kzt)
      : atUz
      ? toNumberWithSpaces(rub * currencyRates.uzm)
      : toNumberWithSpaces(rub)
  }

  const price = {
    loanRegular: {
      mini: {
        online: setPrice(14900),
        blended: setPrice(15800)
      },
      mba: {
        online: setPrice(26500),
        blended: setPrice(27400)
      },
      profession: {
        online: setPrice(6000)
      },
      course: {
        online: setPrice(6000)
      },
      mbl: {
        online: setPrice(26500)
      }
    },
    loanDiscounted: {
      mini: {
        online: setPrice(8200)
      },
      mba: {
        online: setPrice(14600)
      },
      profession: {
        online: setPrice(3250)
      },
      course: {
        online: setPrice(3250)
      },
      mbl: {
        online: setPrice(14600)
      }
    }
  }

  const regularOrDiscounted = discount ? 'loanDiscounted' : 'loanRegular'

  const componentSpecificClasses = {
    simple: {},
    new: {},
    old: {
      CostOfStudy: stls.costOfStudyOldPrice
    }
  }

  const generalClasses = {
    simple: stls.simplePrice,
    new: stls.newPrice,
    old: stls.oldPrice
  }

  const getPriceClass = (typeOfPrice, renderedByComponent) => {
    if (!renderedByComponent) return `${typeOfPrice}-price`

    const componentSpecificClass =
      componentSpecificClasses[typeOfPrice]?.[renderedByComponent]
    const generalClass = generalClasses[typeOfPrice]

    return componentSpecificClass ? componentSpecificClass : generalClass
  }

  const regularPrice =
    programPriceKzUzConsidered &&
    Math.ceil(((programPriceKzUzConsidered / 45) * 100) / 1000) * 1000

  const regularPriceUI = programPriceKzUzConsidered
    ? toNumberWithSpaces(Math.floor(programPriceKzUzConsidered / 12))
    : price[regularOrDiscounted]?.[type]?.[format]

  const discountPriceUI = programPriceKzUzConsidered
    ? toNumberWithSpaces(Math.floor(regularPrice / 12))
    : price.loanRegular[type]?.[format]

  // console.log(regularPriceUI)
  // console.log(discountPriceUI)

  // regularPriceUI = toNumberWithSpaces(
  //   Number(regularPriceUI?.trim().replace(/\u00A0/, '')) * 10
  // )

  // discountPriceUI = toNumberWithSpaces(
  //   Number(discountPriceUI?.trim().replace(/\u00A0/, '')) / 10
  // )

  // console.log(regularPriceUI.trim().replace(/\u00A0/, ''))

  return (
    <>
      <i
        className={cn(
          discount
            ? getPriceClass('new', renderedByComponent)
            : getPriceClass('simple', renderedByComponent),
          {
            [stls.price]: variant === 'SectionStudyCost',
            [stls.smallerFontForSmallerLength]:
              variant === 'SectionStudyCost' &&
              regularPriceUI?.toString()?.length > 5
          }
        )}>
        <span>
          {regularPriceUI}{' '}
          <span
            className={cn({
              [stls.priceLabel]: variant === 'SectionStudyCost',
              [stls.smallerFontForSmallerLength]:
                variant === 'SectionStudyCost' &&
                regularPriceUI?.toString()?.length > 5
            })}>
            {currencySymbol}
          </span>
        </span>
      </i>
      {discount && !at.blended && !notComparingPrices && (
        <>
          <i
            className={cn(getPriceClass('old', renderedByComponent), {
              [stls.discount]: variant === 'SectionStudyCost'
            })}>
            <span
              className={cn({
                [stls.discountNum]: variant === 'SectionStudyCost'
              })}>
              {discountPriceUI}
            </span>{' '}
            <span
              className={cn({
                [stls.discountLabel]: variant === 'SectionStudyCost'
              })}>
              {currencySymbol}
            </span>
          </i>
        </>
      )}
      {variant === 'SectionStudyCost' && (
        <span className={stls.priceLabelInfo}>*рассрочка на 12 месяцев</span>
      )}
    </>
  )
}

export default Loan

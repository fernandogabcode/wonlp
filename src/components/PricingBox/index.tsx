import React from 'react'

import Button from 'components/Button'
import { gaEvent } from 'utils/ga'

import * as S from './styles'

import { PrincingBoxProps } from '../../types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'buy', label: 'pricing box button' })

const PricingBox = ({
  totalPrice,
  priceInstallment,
  numberInstallments,
  benefits,
  button
}: PrincingBoxProps) => (
  <S.Box>
    <S.Prices>
      <S.FullPrice>
        De <span>R${totalPrice}</span> por apenas
      </S.FullPrice>
      <S.DiscountPrice>
        <span>{numberInstallments}x de</span> R${priceInstallment}
      </S.DiscountPrice>
    </S.Prices>
    <S.BenefitsList dangerouslySetInnerHTML={{ __html: benefits }} />

    <Button href={button.url} onClick={onClick} withPrice>
      <p>Comprar o curso</p>
      <div>
        <S.ButtonFullPrice>R$549</S.ButtonFullPrice>
        <S.ButtonDiscountPrice>R$399</S.ButtonDiscountPrice>
      </div>
    </Button>
  </S.Box>
)

export default PricingBox

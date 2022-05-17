import React from 'react'

import * as S from './styles'

import Logo from 'components/Logo'
import Button from 'components/Button'
import Container from 'components/Container'

import { gaEvent } from 'utils/ga'
import { getImageUrl } from 'utils/getImageUrl'

import { HeaderProps, LogoProps } from 'types/api'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button
              href="https://www.udemy.com/course/react-avancado/?couponCode=PROMOMAI22"
              onClick={onClick}
              wide
            >
              Comprar
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getImageUrl(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero

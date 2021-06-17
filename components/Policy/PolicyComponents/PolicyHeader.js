import styled from 'styled-components'
import { device } from 'styles/device'

const PolicyHeaderStyle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
`

const PolicyToggle = styled.div`
  display: none;
  @media ${device.md} {
    margin-right: 1em;
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => (props.active === true ? ({ theme: { colors } }) => colors.turbo : 'inherit')};
    border: 2px solid ${({ theme: { colors } }) => colors.turbo};
    border-radius: 50%;

    cursor: pointer;
  }
  svg {
    width: 1em;
    height: 1em;
    transform: ${(props) => (props.active === true ? 'rotate(90deg)' : 'rotate(0deg)')};
    color: ${({ theme: { colors } }) => colors.mineShaft};
  }
`

const TitleWrapper = styled.div`
  flex: 1;
`

const Title = styled.h2`
  margin-bottom: 2px;
  color: ${({ theme: { colors } }) => colors.mineShaft};
  font-size: 20px;
  line-height: 30px;
  @media ${device.lg} {
    font-size: 24px;
  }
`
const Description = styled.p`
  color: ${({ theme: { colors } }) => colors.rollingStone};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

const PartnerLogoMd = styled.img`
  margin-left: 1em;
  width: 109px;
  display: none;
  justify-self: flex-end;
  @media ${device.md} {
    display: block;
  }
  @media ${device.lg} {
    display: none;
  }
`

const PolicyHeader = ({ policyData, active }) => {
  return (
    <PolicyHeaderStyle>
      <PolicyToggle active={active}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M9 5l7 7-7 7' />
        </svg>
      </PolicyToggle>

      <TitleWrapper>
        <Title>{policyData.title}</Title>
        <Description>XXXX-XXXX-INS | {policyData.description}</Description>
      </TitleWrapper>

      <PartnerLogoMd src={policyData.partner.logo} id={policyData.partner.id} alt={policyData.partner.name} />
    </PolicyHeaderStyle>
  )
}

export default PolicyHeader

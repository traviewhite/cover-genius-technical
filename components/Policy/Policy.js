import { useState } from 'react'
import styled from 'styled-components'
import { device } from 'styles/device'
import PolicyHeader from '@/components/Policy/PolicyComponents/PolicyHeader'
import PolicyBody from '@/components/Policy/PolicyComponents/PolicyBody'

const PolicyContainer = styled.div`
  margin: 1em 0;
  padding: 1em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 3px;
  background-color: ${({ theme: { colors } }) => colors.white};
  transform: ${(props) => (props.active === true ? 'translateY(-3px)' : 'translateY(0px)')};
  box-shadow: ${(props) => (props.active === true ? ({ theme: { boxShadow } }) => boxShadow.default : 'none')};

  transition: 250ms ease;
  * {
    transition: 250ms ease;
  }
`
const PolicyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Break = styled.div`
  margin: 0.5em 0 1em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.lineBreakGray};
`

const PartnerLogoLg = styled.img`
  display: none;

  @media ${device.lg} {
    margin-left: 1.5em;
    width: 197px;

    display: block;
    justify-self: flex-end;
  }
`

const Policy = ({ policyData }) => {
  const [active, setActive] = useState(false)

  return (
    <PolicyContainer onClick={() => setActive(!active)} active={active}>
      <PolicyContentWrapper>
        <PolicyHeader policyData={policyData} active={active} />

        <Break />

        <PolicyBody policyData={policyData} />
      </PolicyContentWrapper>

      <PartnerLogoLg src={policyData.partner.logo} id={policyData.partner.id} alt={policyData.partner.name} />
    </PolicyContainer>
  )
}
export default Policy

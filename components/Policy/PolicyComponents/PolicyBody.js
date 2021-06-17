import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { device, size } from 'styles/device'
import PolicyBodyItem from '@/components/Policy/PolicyComponents/PolicyBodyItem'

const PolicyBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CoverageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    border-right: 1px solid ${({ theme: { colors } }) => colors.lineBreakGray};
    margin-right: 1em;
    padding-right: 1em;
    &:last-child {
      border-right: none;
      margin-right: 0;
      padding-right: 0;
    }
  }
`

const PartnerLogoSm = styled.img`
  display: none;
  @media ${device.xs} {
    width: 84px;
    display: block;
  }
  @media ${device.sm} {
    width: 109px;
    display: block;
  }
  @media ${device.md} {
    display: none;
  }
`

const PolicyBody = ({ policyData }) => {
  const PolicyType = () => {
    switch (policyData.type) {
      case 'travel':
        return 'Coverage dates'
      case 'product':
        return 'Coverage dates'
      case 'parcel':
        return 'Date shipped'
      default:
        return 'Coverage dates'
    }
  }

  const Hidden = ({ screenSize, children }) => {
    const useWindowSize = () => {
      const [size, setSize] = useState([0])
      useEffect(() => {
        function updateSize() {
          setSize([window.innerWidth])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
      }, [])
      return size
    }
    const [width] = useWindowSize()
    return <>{width >= parseFloat(screenSize) ? children : null}</>
  }
  return (
    <PolicyBodyContainer>
      <CoverageWrapper>
        <Hidden screenSize={size.sm}>
          <PolicyBodyItem date main={[policyData.payment_date]} descriptor={'Payment date'} />
        </Hidden>

        <PolicyBodyItem
          date
          main={[policyData.coverage_start_date, policyData.coverage_end_date]}
          status={policyData.status}
          descriptor={PolicyType()}
        />

        <Hidden screenSize={size.md}>
          <PolicyBodyItem premium main={policyData.premium_formatted} descriptor={'Price/Premium'} />
        </Hidden>

        {policyData.renewal && (
          <Hidden screenSize={size.md}>
            <PolicyBodyItem renewal main={policyData.renewal} mainCapital descriptor={'Renewal'} />
          </Hidden>
        )}
      </CoverageWrapper>
      <PartnerLogoSm src={policyData.partner.logo} id={policyData.partner.id} alt={policyData.partner.name} />
    </PolicyBodyContainer>
  )
}

export default PolicyBody

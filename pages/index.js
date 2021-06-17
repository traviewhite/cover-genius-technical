import styled from 'styled-components'
import Policy from '@/components/Policy/Policy'
import { device } from 'styles/device'

const Header = styled.h1`
  color: ${({ theme: { colors } }) => colors.mineShaft};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  @media ${device.sm} {
    font-size: 28px;
    line-height: 35px;
  }
  @media ${device.md} {
    font-size: 32px;
    line-height: 40px;
  }
`

const Index = ({ data }) => {
  return (
    <>
      <Header>YOUR POLICIES</Header>
      {data.policies.map((policyData, index) => (
        <Policy key={index} policyData={policyData} />
      ))}
    </>
  )
}

export default Index

const API_URL = 'https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking'

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const items = await res.json()

  return {
    props: {
      data: items ?? null,
    },
    revalidate: 60,
  }
}

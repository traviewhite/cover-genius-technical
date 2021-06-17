import styled, { css } from 'styled-components'
import { device } from 'styles/device'
import moment from 'moment'

const sharedPropsH4 = css`
  color: ${({ theme: { colors } }) => colors.mineShaft};
  font-size: 16px;
  font-weight: normal;
`
const sharedPropsP = css`
  color: ${({ theme: { colors } }) => colors.rollingStone};
  font-size: 12px;
  font-weight: 400;
`
const ItemStyle = styled.div`
  h4 {
    ${sharedPropsH4}
    text-transform: ${(props) => (props.mainCapital ? 'capitalize' : 'uppercase')};
  }
  p {
    ${sharedPropsP}
    margin-right: ${(props) => props.status && '3em'};
  }
`
const DescriptorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Status = styled.h5`
  display: flex;
  align-items: center;
  font-family: 'brandon-grotesque', sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-align: right;
  text-transform: uppercase;
  color: ${(props) =>
    props.status === 'active' ? ({ theme: { colors } }) => colors.fern : ({ theme: { colors } }) => colors.scarlet};
  svg {
    margin: 0 0 1px 4px;
    height: 8px;
    width: 8px;
  }
`

const PolicyBodyItem = ({ main, date, premium, renewal, status, descriptor, mainCapital }) => {
  const Main = () => {
    switch (true) {
      case date:
        return (
          <>
            {moment(main[0]).format('DD-MMM-YYYY')}
            {main[1] ? (
              <>
                <span style={{ textTransform: 'lowercase' }}> to</span> {moment(main[1]).format('DD-MMM-YYYY')}
              </>
            ) : null}
          </>
        )
      case premium:
        return [main] && 'au $xx.xx'
      case renewal:
        return [main]
      default:
        return null
    }
  }

  return (
    <ItemStyle status={status} mainCapital={mainCapital}>
      <h4>{Main()}</h4>

      <DescriptorWrapper>
        <p>{descriptor}</p>

        {status && (
          <Status status={status}>
            {status}
            <svg viewBox='0 0 100 100' fill='currentColor' stroke='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='50' cy='50' r='50' />
            </svg>
          </Status>
        )}
      </DescriptorWrapper>
    </ItemStyle>
  )
}

export default PolicyBodyItem

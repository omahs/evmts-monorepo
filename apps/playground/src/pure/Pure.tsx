import { useQuery } from '@tanstack/react-query'

import { PureQuery } from './PureQuery.t.sol'

export const Pure = () => {
  return (
    <div>
      <span>Testing a pure query</span>
      <PureQuery />
    </div>
  )
}

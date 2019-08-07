import React, {FC} from 'react'

import uuid from './uuid'

const FlagTR: FC = () => {
  const [a, b] = [uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#E92434" offset="0%"/>
          <stop stopColor="#E11324" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="15"/>
        <path
          d="M13.052071,4.73691441 C12.4166497,4.27508353 11.6177441,4 10.75,4 C8.67893219,4 7,5.56700338 7,7.5 C7,9.43299662 8.67893219,11 10.75,11 C11.6177441,11 12.4166497,10.7249165 13.052071,10.2630856 C12.228638,11.3201293 10.9437152,12 9.5,12 C7.01471863,12 5,9.98528137 5,7.5 C5,5.01471863 7.01471863,3 9.5,3 C10.9437152,3 12.228638,3.67987067 13.052071,4.73691441 Z M14.2656441,8.07626735 L13.3470294,9.19000603 L13.4096022,7.74766364 L12.0665062,7.21817326 L13.4575914,6.83197525 L13.5461272,5.39099352 L14.3432923,6.59465241 L15.7411064,6.2335671 L14.8426963,7.36366722 L15.6180572,8.58148596 L14.2656441,8.07626735 Z"
          fill={`url(#${a})`}
        />
      </g>
    </svg>
  )
}

export default FlagTR
import React, {FC} from 'react'

import uuid from './uuid'

const FlagKG: FC = () => {
  const [a, b, c] = [uuid(), uuid(), uuid()]
  return (
    <svg viewBox="0 0 21 15" width="100%" height="100%" focusable="false">
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={a}>
          <stop stopColor="#FFFFFF" offset="0%"/>
          <stop stopColor="#F0F0F0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={b}>
          <stop stopColor="#F22A46" offset="0%"/>
          <stop stopColor="#E71834" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={c}>
          <stop stopColor="#FFF04D" offset="0%"/>
          <stop stopColor="#FFEE35" offset="100%"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect fill={`url(#${a})`} width="21" height="15"/>
        <rect fill={`url(#${b})`} width="21" height="15"/>
        <circle fill={`url(#${c})`} cx="10.5" cy="7.5" r="2.5"/>
        <path
          d="M10.5,11.0352098 L9.27613486,12.8621035 L8.96612997,10.6851139 L7.07080609,11.8000732 L7.73606171,9.70416723 L5.54467123,9.88636057 L7.05342533,8.28665818 L5,7.5 L7.05342533,6.71334182 L5.54467123,5.11363943 L7.73606171,5.29583277 L7.07080609,3.19992685 L8.96612997,4.31488606 L9.27613486,2.13789648 L10.5,3.96479024 L11.7238651,2.13789648 L12.03387,4.31488606 L13.9291939,3.19992685 L13.2639383,5.29583277 L15.4553288,5.11363943 L13.9465747,6.71334182 L16,7.5 L13.9465747,8.28665818 L15.4553288,9.88636057 L13.2639383,9.70416723 L13.9291939,11.8000732 L12.03387,10.6851139 L11.7238651,12.8621035 L10.5,11.0352098 Z M10.5,11 C12.4329966,11 14,9.43299662 14,7.5 C14,5.56700338 12.4329966,4 10.5,4 C8.56700338,4 7,5.56700338 7,7.5 C7,9.43299662 8.56700338,11 10.5,11 Z"
          fill={`url(#${c})`}
        />
      </g>
    </svg>
  )
}

export default FlagKG
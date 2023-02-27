import React from 'react'
import cn from 'classnames'

import './Glass.sass'

type color = 'purple' | 'yellow'

interface Props {
  children: React.ReactNode
  color?: color
}

const Glass: React.FC<Props> = ({ children, color }) => {
  const classes = cn('glass', {
    [`${color}-color`]: Boolean(color)
  })

  return <div className={classes}>{children}</div>
}

export default Glass

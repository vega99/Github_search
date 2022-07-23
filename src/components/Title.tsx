import React from 'react'

type Props = {
    title: string
}

const Title = (props: Props) => {
  return (
    <h4 className="Repositories fw-bold text-white">{props.title}</h4>
  )
}

export default Title

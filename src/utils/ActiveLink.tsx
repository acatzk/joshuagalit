import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Children } from 'react'

let parentActive = false;

const processChildren = (
  active,
  children,
  defaultClassName,
  currentClassName
) => {
  const child = Children.only(children);
  const childClassName = child.props.className || ''
  const className = active
    ? `${currentClassName} ${childClassName}`.trim()
    : `${defaultClassName} ${childClassName}`.trim()

  return React.cloneElement(child, {
    className: className || null
  })
}

export default function ActiveLink({
  children,
  default: defaultClassNames,
  current: currentClassNames,
  ...props
}) {
  const { asPath } = useRouter();
  const active = Boolean(asPath === props.href || asPath === props.as)
  parentActive = active;

  return (
    <Link href="/" {...props}>
      {processChildren(active, children, defaultClassNames, currentClassNames)}
    </Link>
  )
}

const Child = function ActiveLinkChild({
  children,
  default: defaultClassNames,
  current: currentClassNames,
  ...props
}) {
  return (
    <>
      {processChildren(
        parentActive,
        children,
        defaultClassNames,
        currentClassNames
      )}
    </>
  )
}

ActiveLink.Child = Child
import * as React from 'react'

// The address is stored reversed and base64-encoded, and only assembled in the
// browser after mount, so it never appears in the pre-rendered HTML or as a
// plain string in the JS bundle where scrapers look for addresses.
const ENCODED = 'ZWRpdWcudG5pb3BoZ2loQG9sbGVo'
const decode = (s) => [...atob(s)].reverse().join('')

const ProtectedEmail = ({ className }) => {
  const [address, setAddress] = React.useState(null)

  React.useEffect(() => {
    setAddress(decode(ENCODED))
  }, [])

  if (!address) {
    return <span className={className}>(enable JavaScript to see the email address)</span>
  }
  return <a className={className} href={`mailto:${address}`}>{address}</a>
}

export default ProtectedEmail

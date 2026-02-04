import React from 'react'
import SecurityBanner from './components/SecurityBanner'
import ExplicitConsent from './components/ExplicitConsent'

const SecurityPage = () => {
  return (
    <div
     style={{
        backgroundImage: "url('/assets/bg/security/seciruty-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden lg:pt-20"
      >
        <SecurityBanner />
        <ExplicitConsent />
    </div>
  )
}

export default SecurityPage
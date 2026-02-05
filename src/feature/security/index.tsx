import AudibilitySecurity from './components/AudibilitySecurity'
import ControlledAccess from './components/ControlledAccess'
import DataRetention from './components/DataRetention'
import ExplicitConsent from './components/ExplicitConsent'
import HummanIntervention from './components/HummanIntervention'
import LimitedDataLoggin from './components/LimitedDataLoggin'
import SecurityBanner from './components/SecurityBanner'
import TransparencyConversation from './components/TransparencyConversation'

const SecurityPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/bg/security/seciruty-bg.svg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen overflow-hidden "
    >
      <SecurityBanner />
      <ExplicitConsent />
      <TransparencyConversation />
      <LimitedDataLoggin />
      <ControlledAccess />
      <HummanIntervention />
      <DataRetention />
      <AudibilitySecurity />
      
    </div>
  )
}

export default SecurityPage
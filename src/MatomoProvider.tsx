import React from 'react'
import MatomoContext from './MatomoContext'
import { MatomoInstance } from './types'

export interface MatomoProviderProps {
  children: React.ReactNode
  value: MatomoInstance
}

const MatomoProvider: React.FC<MatomoProviderProps> = function ({
  children,
  value,
}) {
  return (
    <MatomoContext.Provider value={value}>{children}</MatomoContext.Provider>
  )
}

export default MatomoProvider

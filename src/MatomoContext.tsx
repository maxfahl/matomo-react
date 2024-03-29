import { createContext } from 'react'
import { MatomoInstance } from './types'

const MatomoContext = createContext<MatomoInstance | undefined>(undefined)

export default MatomoContext

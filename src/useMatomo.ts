import { useCallback, useContext } from 'react'
import MatomoContext from './MatomoContext'
import {
  CustomDimension,
  TrackEventParams,
  TrackLinkParams,
  TrackPageViewParams,
  TrackSiteSearchParams,
} from './types'
import useOutboundClickListener from './utils/useOutboundClickListener'

function useMatomo() {
  const context = useContext(MatomoContext)

  if (!context)
    throw new Error('useMatomo must be used withing a MatomoProvider.')

  const trackPageView = useCallback(
    (params?: TrackPageViewParams) => context?.trackPageView(params),
    [context],
  )

  const trackEvent = useCallback(
    (params: TrackEventParams) => context?.trackEvent(params),
    [context],
  )

  const trackEvents = useCallback(() => context?.trackEvents(), [context])

  const trackSiteSearch = useCallback(
    (params: TrackSiteSearchParams) => context?.trackSiteSearch(params),
    [context],
  )

  const trackLink = useCallback(
    (params: TrackLinkParams) => context?.trackLink(params),
    [context],
  )

  const enableLinkTracking = useCallback(() => {
    if (context) {
      useOutboundClickListener(context)
    }
  }, [context])

  const pushInstruction = useCallback(
    (name: string, ...args: any[]) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      context?.pushInstruction(name, ...args)
    },
    [context],
  )

  const pushCustomDimensions = useCallback(
    (dimensions: CustomDimension[]) => {
      context?.pushCustomDimensions(dimensions)
    },
    [context],
  )

  const pushCustomDimension = useCallback(
    (dimension: CustomDimension) => {
      context?.pushCustomDimension(dimension)
    },
    [context],
  )

  const pushUserId = useCallback(
    (userId: string) => {
      context?.pushUserId(userId)
    },
    [context],
  )

  return {
    trackEvent,
    trackEvents,
    trackPageView,
    trackSiteSearch,
    trackLink,
    enableLinkTracking,
    pushInstruction,
    pushCustomDimensions,
    pushCustomDimension,
    pushUserId,
  }
}

export default useMatomo

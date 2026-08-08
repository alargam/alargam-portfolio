declare global {
  interface Window {
    __wowInstance?: { init: () => void; sync: () => void }
    __wowInitialized?: boolean
  }
}

export const animationCreate = () => {
  if (typeof window === 'undefined') return

  if (window.__wowInitialized && window.__wowInstance) {
    window.__wowInstance.sync()
    return
  }

  import('wowjs')
    .then((module) => {
      const WOW = module.default
      const wow = new WOW.WOW({ live: false, offset: 0 })
      wow.init()
      window.__wowInstance = wow
      window.__wowInitialized = true
    })
    .catch(() => {
      window.__wowInitialized = true
    })
};

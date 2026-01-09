import { Store } from '@tanstack/store'

export const loadingStore = new Store(true)

// Auto-disable loading after 500ms
setTimeout(() => {
  loadingStore.setState(false)
}, 500)


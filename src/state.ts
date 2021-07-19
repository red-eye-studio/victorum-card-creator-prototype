import { get, set } from './utilities/persistent'
import { reactive, watchEffect } from 'vue'

export interface Image {
  filename: string | null
  payload: string | null
}

export interface Card {
  id: string
  name: string
  ability: string
  passive: string
}

export interface State {
  version: 1
  settings: {
    backgroundImage: Image
    topLeftImage: Image
    topCenterImage: Image
    topRightImage: Image
  }
  cards: Record<string, Card>
}

export const state = reactive<State>(get('state') || {
  version: 1,
  settings: {
    backgroundImage: {
      filename: null,
      payload: null
    },
    topLeftImage: {
      filename: null,
      payload: null
    },
    topCenterImage: {
      filename: null,
      payload: null
    },
    topRightImage: {
      filename: null,
      payload: null
    },
  },
  cards: {}
})

watchEffect(() => set('state', state))
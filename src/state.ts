import { reactive } from 'vue'

interface Image {
  filename?: string
  payload?: string
}

interface State {
  settings: {
    backgroundImage: Image
    topLeftImage: Image
    topCenterImage: Image
    topRightImage: Image
  }
}

export const state = reactive<State>({
  settings: {
    backgroundImage: {},
    topLeftImage: {},
    topCenterImage: {},
    topRightImage: {},
  },
})
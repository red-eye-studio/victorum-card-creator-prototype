export const get = <T>(name: string): T | undefined  => {
  try {
    return JSON.parse(localStorage.getItem(name) || '') ?? undefined
  } catch {
    return undefined
  }
}

export const set = <T>(name: string, value: T) => {
  localStorage.setItem(name, JSON.stringify(value, null, 2))
}
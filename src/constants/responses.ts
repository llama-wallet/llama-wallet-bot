export const success = (): string => {
  return JSON.stringify({ success: true })
}

export const error = (code: number) => {
  return JSON.stringify({ success: false, error: code })
}

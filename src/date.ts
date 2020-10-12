import dayjs from 'dayjs'

export function formatDate(date?: dayjs.ConfigType) {
  return dayjs(date).format('YYYY-MM-DD')
}

export function formatDateTime(date?: dayjs.ConfigType) {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

export {
  dayjs
}
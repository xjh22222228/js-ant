import dayjs from 'dayjs'

export function formatDate(date?: dayjs.ConfigType): string {
  return dayjs(date).format('YYYY-MM-DD')
}

export function formatDateTime(date?: dayjs.ConfigType): string {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
}

export function getWeek(date?: dayjs.ConfigType): string {
  const arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return arr[dayjs(date).day()];
}

export {
  dayjs
}

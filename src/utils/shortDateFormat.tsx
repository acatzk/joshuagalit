export const shortDateFormat = (time: any) => {
  let date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' ')),
    diff = (new Date().getTime() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400)

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return

  return (
    (day_diff == 0 &&
      ((diff < 60 && 'just now') ||
        (diff < 120 && '1m') ||
        (diff < 3600 && Math.floor(diff / 60) + 'm') ||
        (diff < 7200 && '1h') ||
        (diff < 86400 && Math.floor(diff / 3600) + 'h'))) ||
    (day_diff == 1 && 'd') ||
    (day_diff < 7 && day_diff + 'd') ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + 'w')
  )
}

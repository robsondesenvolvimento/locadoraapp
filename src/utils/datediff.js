const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(date1, date2) {
  // Discard the time and time-zone information.
  const diffDays = Math.abs((date1.getTime() - date2.getTime()) / (_MS_PER_DAY));

  return diffDays;
}

module.exports = { dateDiffInDays };

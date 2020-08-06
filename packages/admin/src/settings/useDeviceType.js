import MobileDetect from 'mobile-detect';
export function useDeviceType(userAgent) {
  const md = new MobileDetect(userAgent);
  const mobile = md.mobile();
  const tablet = md.tablet();
  const desktop = !(mobile && tablet) ? true : null;
  return {
    mobile,
    tablet,
    desktop,
  };
}

import MobileDetect from "mobile-detect";
export function useDeviceType(userAgent) {
  const md = new MobileDetect(userAgent);
  let mobile = false,
    tablet = false,
    desktop = false;
  if (md.tablet()) {
    tablet = true;
  } else if (md.mobile()) {
    mobile = true;
  } else {
    desktop = true;
  }
  return {
    mobile,
    tablet,
    desktop
  };
}

import React from 'react';
import ContentLoader from 'react-content-loader';

const PostLoader = (props) => (
  <ContentLoader
    height={350}
    width={245}
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="2" rx="0" ry="0" width="240" height="197" />
    <rect x="15" y="220" rx="0" ry="0" width="140" height="25" />
    <rect x="15" y="254" rx="0" ry="0" width="65" height="15" />
    <rect x="15" y="300" rx="0" ry="0" width="67" height="20" />
    <rect x="170" y="300" rx="0" ry="0" width="60" height="20" />
  </ContentLoader>
);
export const SidebarMobileLoader = () => (
  <ContentLoader
    height={46}
    width={400}
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="58" y="10" rx="0" ry="0" width="287" height="26" />
    <rect x="364" y="10" rx="0" ry="0" width="26" height="26" />
    <rect x="16" y="10" rx="0" ry="0" width="26" height="26" />
  </ContentLoader>
);

export const SidebarLoader = (props) => (
  <ContentLoader
    height={400}
    width="calc(100% - 30px)"
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="376" y="22" rx="0" ry="0" width="0" height="0" />
    <rect x="27" y="50" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="50" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="89" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="89" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="128" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="128" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="167" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="167" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="206" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="206" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="245" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="245" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="284" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="284" rx="0" ry="0" width="260" height="24" />

    <rect x="27" y="323" rx="0" ry="0" width="24" height="24" />
    <rect x="69" y="323" rx="0" ry="0" width="260" height="24" />
  </ContentLoader>
);
export default PostLoader;

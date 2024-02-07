const linkUrls = {
  github: 'https://github.com/stella0905',
  blog: 'https://stella0905.tistory.com/',
  diedieGithub: 'https://github.com/diedielolorg/diediefrontend',
  diedieSite: 'https://diediefrontend.vercel.app/',
  odimediGithub: 'https://github.com/orgs/diedielolorg/repositories',
  hanghaeCapsuleGithub: 'https://github.com/H14-Capsule/newClientCapsule',
  frontStudyNotion: 'https://www.notion.so/6919d4d1829c41e7a97ded46b95b5c29?pvs=4',
  hanghaeCertificate: 'https://ethereal-ethernet-87a.notion.site/6d9b32df1ea94165b007feb2d0fa7b07?pvs=4',
  tteokgukSite: 'https://www.tteokguk.site/e31e99d1-eade-4510-b01e-a93bc3a8df23?page=1',
  tteokgukDisQuietNews:
    'https://disquiet.io/@tteokguk/makerlog/%EC%A3%BC%EB%8B%88%EC%96%B4%EC%A7%80%EB%A7%8C-%EC%82%AC%EC%9D%B4%EB%93%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94-%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%96%B4-ft-%EB%8B%88%EB%96%A1%EB%82%B4%EB%96%A1-%EA%B0%9C%EB%B0%9C-%ED%9B%84%EA%B8%B0',
}

export const moveToLink = (linkName) => {
  const url = linkUrls[linkName]
  if (url) {
    window.open(url, '_blank')
  }
}

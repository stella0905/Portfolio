const linkUrls = {
  github: 'https://github.com/stella0905',
  blog: 'https://stella0905.tistory.com/',
  diedieGithub: 'https://github.com/diedielolorg/diediefrontend',
  diedieSite: 'https://diediefrontend.vercel.app/',
  odimediGithub: 'https://github.com/orgs/diedielolorg/repositories',
  hanghaeCapsuleGithub: 'https://github.com/H14-Capsule/newClientCapsule',
  frontStudyNotion:'https://www.notion.so/6919d4d1829c41e7a97ded46b95b5c29?pvs=4'
}

export const moveToLink = (linkName) => {
  const url = linkUrls[linkName]
  if (url) {
    window.open(url, '_blank')
  }
}

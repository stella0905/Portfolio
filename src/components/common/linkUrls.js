const linkUrls = {
  github: 'https://github.com/stella0905',
  blog: 'https://stella0905.tistory.com/',
  diedieGithub: 'https://github.com/diedielolorg/diediefrontend',
  diedieSite: 'https://diediefrontend.vercel.app/',
  odimediGithub: 'https://github.com/orgs/diedielolorg/repositories',
  hanghaeCapsuleGithub: 'https://github.com/H14-Capsule/newClientCapsule',
}

export const moveToLink = (linkName) => {
  const url = linkUrls[linkName]
  if (url) {
    window.open(url, '_blank')
  }
}

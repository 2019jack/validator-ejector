export enum Chains {
  MAINNET = 1,
  GOERLI = 5,
  HOLESKY = 17000,
  HOODI = 560048,
}

export const CAPELLA_FORK_VERSIONS = {
  [Chains.MAINNET]: '0x03000000',
  [Chains.GOERLI]: '0x03001020',
  [Chains.HOLESKY]: '0x04017000',
  [Chains.HOODI]: '0x40000910',
}

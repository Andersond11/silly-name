#!/usr/bin/env node

import minimist from 'minimist'

import Name from '#commands/name.js'

const main = (process) => {
  const args = minimist(process.argv.slice(2))

  const name = new Name()
  console.log(`Generated the name ${name.generate()}`)
}

main(process)
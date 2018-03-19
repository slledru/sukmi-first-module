const { expect } = require('chai')
const { torusVolume, sphereVolume } = require('./volume') // Destructuring

describe('volume tests', function() {
  it('calculate sphere volume correctly', function() {
    expect(sphereVolume(1)).to.equal(4.1887902047863905)
  })

  it('calculate torus volume correctly', function() {
    expect(torusVolume(4, 3)).to.equal(710.6115168784338)
  })
})

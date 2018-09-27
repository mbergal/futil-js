import chai from 'chai'
import * as f from '../src/'

chai.expect()
const expect = chai.expect

describe('Collections Functions', () => {
  it('flowMap', () => {
    expect(f.flowMap(n => n + n, n => n * n)([0, 1, 2, 3, 4])).to.eql([
      0,
      4,
      16,
      36,
      64,
    ])
    expect(
      f.flowMap(
        s => s.toUpperCase(),
        s => s.split(''),
        s => s.reverse(),
        s => s.join('')
      )(['Smart', 'Procure'])
    ).to.eql(['TRAMS', 'ERUCORP'])
  })
  it('findApply', () => {
    let x = {
      a: 1,
    }
    expect(f.findApply(f => x[f], ['b', 'c', 'a'])).to.equal(1)
    expect(f.findApply(f => x[f], ['b', 'c'])).to.equal(undefined)
  })
  it('map', () => {
    expect(f.map(x => x + 1, [1, 2, 3])).to.eql([2, 3, 4])
    expect(f.map(x => x + 1)([1, 2, 3])).to.eql([2, 3, 4])

    expect(f.map(x => x + 1, { a: 1, b: 2, c: 3 })).to.eql({ a: 2, b: 3, c: 4 })
    expect(f.map(x => x + 1)({ a: 1, b: 2, c: 3 })).to.eql({ a: 2, b: 3, c: 4 })
  })
})

import {validate_nodes} from '../src/lib.js'

describe('validate_nodes', () => {
  it('is a function', () => {
    expect(typeof validate_nodes).toBe('function')
  })

  it('returns "true" when called with empty array', () => {
    expect(validate_nodes([])).toBe(true)
  })

  it('returns "true" when called with valid node array (simple case #1)', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A',
      },
      {
        id: 'b',
        dependencyId: 'a',
        label: 'B'
      },
      {
        id: 'c',
        dependencyId: 'b',
        label: 'C'
      }
    ])).toBe(true)
  })

  it('returns "true" when called with valid node array (simple case #2)', () => {
    expect(validate_nodes([
      {
        id: 'a',
        dependencyId: 'b',
        label: 'A'
      },
      {
        id: 'b',
        label: 'B'
      },
      {
        id: 'c',
        dependencyId: 'b',
        label: 'C'
      }
    ])).toBe(true)
  })

  it('returns "false" when at least one node does not have "id" property', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A'
      },
      {
        label: 'B'
      },
      {
        id: 'c',
        label: 'C'
      }
    ])).toBe(false)
  })

  it('returns "false" when at least one node does not have "label" property', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A'
      },
      {
        id: 'b'
      },
      {
        id: 'c',
        label: 'C'
      }
    ])).toBe(false)
  })

  it('returns "false" when called with node array where at least 2 nodes have the same "id"', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A'
      },
      {
        id: 'b',
        label: "B"
      },
      {
        id: 'a',
        label: 'another A'
      }
    ])).toBe(false)
  })

  it('returns "false" when called with node array where at least one node has "dependencyId" which does not match "id" of any node', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A'
      },
      {
        id: 'b',
        dependencyId: 'I-am-not-equal-to-any-id',
        label: "B"
      },
      {
        id: 'c',
        label: 'C'
      }
    ])).toBe(false)
  })

  it('returns "false" when called with node array with cyclic dependencies between nodes', () => {
    expect(validate_nodes([
      {
        id: 'a',
        dependencyId: 'c',
        label: 'A'
      },
      {
        id: 'b',
        dependencyId: 'a',
        label: "B"
      },
      {
        id: 'c',
        dependencyId: 'b',
        label: 'C'
      }
    ])).toBe(false)
  })

  it('returns "false" when called with node array with cyclic dependencies between nodes (simple case)', () => {
    expect(validate_nodes([
      {
        id: 'a',
        dependencyId: 'b',
        label: 'A'
      },
      {
        id: 'b',
        dependencyId: 'a',
        label: "B"
      }
    ])).toBe(false)
  })

  it('returns "false" when called with node array where at least one node has equal "dependencyId" and "id"', () => {
    expect(validate_nodes([
      {
        id: 'a',
        label: 'A'
      },
      {
        id: 'b',
        dependencyId: 'b',
        label: "B"
      },
      {
        id: 'c',
        label: 'C'
      }
    ])).toBe(false)
  })
})

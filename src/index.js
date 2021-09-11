import { createFilter, dataToEsm } from '@rollup/pluginutils'
import schema from 'protocol-buffers-schema'
import fs from 'fs'

export default function proto(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const indent = 'indent' in options ? options.indent : '\t'
  return {
    name: 'proto',
    transform(code, id) {
      if (!filter(id)) return null
      if (id.slice(-6) === '.proto') {
        const parsed = schema.parse(fs.readFileSync(id))
        return {
          code: dataToEsm(parsed, {
            preferConst: options.preferConst,
            compact: options.compact,
            namedExports: options.namedExports,
            indent,
          }),
          map: { mappings: '' },
        }
      }
      return null
    },
  }
}

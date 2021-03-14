import { createFilter, dataToEsm } from '@rollup/pluginutils';
import { loadSync } from "@grpc/proto-loader"

export default function proto(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  const indent = 'indent' in options ? options.indent : '\t'
  return {
    name: 'proto',
    transform(code, id) {
      if (!filter(id)) return null
      if (id.slice(-6) === '.proto') {
        const parsed = loadSync(id)
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

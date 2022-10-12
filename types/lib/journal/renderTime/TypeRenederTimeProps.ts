import { TypeLessThan } from '@/types/index'

type TypeRenederTimeProps = {
    timestamp: string // TODO: figure out better types
    options: TypeLessThan,
    formatString?: string
}

export default TypeRenederTimeProps
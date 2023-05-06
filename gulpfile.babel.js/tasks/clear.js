import del from 'del'

// Config.
import path from '../config/path'

const clear = () => del( path.del.clean )

export default clear
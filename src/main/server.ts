import 'module-alias';

import app from '@/main/config/app';
import { env } from '@/shared/env';

app.listen(env.port, () => console.log(`server running at: http://localhost:${env.port}`))

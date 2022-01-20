import 'module-alias/register';

import app from '@/main/config/app';

import '../infra/config/mongo'



import { env } from '@/shared/env';

app.listen(env.port, () => console.log(`server running at: http://localhost:${env.port}`))
